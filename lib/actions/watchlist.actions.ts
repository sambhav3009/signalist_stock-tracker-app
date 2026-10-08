'use server';

import { connectToDatabase } from '@/database/mongoose';
import { Watchlist } from '@/database/models/watchlist.model';
import { auth } from '@/lib/better-auth/auth';
import { headers } from 'next/headers';

export async function getWatchlistSymbolsByEmail(email: string): Promise<string[]> {
    if (!email) return [];

    try {
        const mongoose = await connectToDatabase();
        const db = mongoose.connection.db;
        if (!db) throw new Error('MongoDB connection not found');

        // Better Auth stores users in the "user" collection
        const user = await db.collection('user').findOne<{ _id?: unknown; id?: string; email?: string }>({ email });

        if (!user) return [];

        const userId = (user.id as string) || String(user._id || '');
        if (!userId) return [];

        const items = await Watchlist.find({ userId }, { symbol: 1 }).lean();
        return items.map((i) => String(i.symbol));
    } catch (err) {
        console.error('getWatchlistSymbolsByEmail error:', err);
        return [];
    }
}

export async function getWatchlistItems(): Promise<{ symbol: string; company: string; addedAt: string }[]> {
    try {
        const session = await auth.api.getSession({ headers: await headers() });
        if (!session?.user?.id) return [];

        await connectToDatabase();

        const items = await Watchlist.find({ userId: session.user.id })
            .sort({ addedAt: -1 })
            .lean();

        return items.map((item) => ({
            symbol: String(item.symbol),
            company: String(item.company),
            addedAt: item.addedAt ? new Date(item.addedAt).toISOString() : new Date().toISOString(),
        }));
    } catch (err) {
        console.error('getWatchlistItems error:', err);
        return [];
    }
}

export async function toggleWatchlist(symbol: string, company?: string) {
    if (!symbol) return { success: false, error: 'Symbol is required' };

    try {
        const session = await auth.api.getSession({ headers: await headers() });
        if (!session?.user?.id) {
            return { success: false, error: 'Unauthorized' };
        }

        const userId = session.user.id;
        const normalizedSymbol = symbol.toUpperCase().trim();
        const normalizedCompany = (company || symbol).trim();

        await connectToDatabase();

        const existing = await Watchlist.findOne({ userId, symbol: normalizedSymbol });
        if (existing) {
            await Watchlist.deleteOne({ _id: existing._id });
            return { success: true, isInWatchlist: false };
        } else {
            await Watchlist.create({
                userId,
                symbol: normalizedSymbol,
                company: normalizedCompany,
                addedAt: new Date(),
            });
            return { success: true, isInWatchlist: true };
        }
    } catch (err) {
        console.error('toggleWatchlist error:', err);
        return { success: false, error: 'Failed to update watchlist' };
    }
}