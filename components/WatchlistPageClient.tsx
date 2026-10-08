'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TrendingUp } from 'lucide-react';
import WatchlistButton from '@/components/WatchlistButton';

type WatchlistItem = {
    symbol: string;
    company: string;
    addedAt: string;
};

const WatchlistPageClient = ({ items }: { items: WatchlistItem[] }) => {
    const [watchlistItems, setWatchlistItems] = useState(items);

    const handleWatchlistChange = (symbol: string, isAdded: boolean) => {
        if (!isAdded) {
            setWatchlistItems((prev) => prev.filter((item) => item.symbol !== symbol));
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {watchlistItems.map((item) => (
                <div
                    key={item.symbol}
                    className="bg-gray-800 border border-gray-600 rounded-lg p-4 hover:border-gray-500 transition-colors"
                >
                    <div className="flex items-start justify-between gap-3">
                        <Link
                            href={`/stocks/${item.symbol}`}
                            className="flex items-center gap-3 flex-1 min-w-0"
                        >
                            <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center flex-shrink-0">
                                <TrendingUp className="h-5 w-5 text-teal-400" />
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-semibold text-gray-100 text-base truncate">
                                    {item.symbol}
                                </h3>
                                <p className="text-sm text-gray-500 truncate">
                                    {item.company}
                                </p>
                            </div>
                        </Link>
                        <WatchlistButton
                            symbol={item.symbol}
                            company={item.company}
                            isInWatchlist={true}
                            showTrashIcon={true}
                            type="icon"
                            onWatchlistChange={handleWatchlistChange}
                        />
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-700">
                        <Link
                            href={`/stocks/${item.symbol}`}
                            className="text-sm text-yellow-500 hover:text-yellow-400 transition-colors"
                        >
                            View details →
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WatchlistPageClient;
