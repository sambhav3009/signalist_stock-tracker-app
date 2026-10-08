import { getWatchlistItems } from '@/lib/actions/watchlist.actions';
import WatchlistPageClient from '@/components/WatchlistPageClient';
import { Star } from 'lucide-react';
import Link from 'next/link';

const WatchlistPage = async () => {
    const items = await getWatchlistItems();

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="watchlist-title">My Watchlist</h1>
                <span className="text-sm text-gray-500">
                    {items.length} {items.length === 1 ? 'stock' : 'stocks'}
                </span>
            </div>

            {items.length === 0 ? (
                <div className="watchlist-empty-container flex">
                    <div className="watchlist-empty">
                        <Star className="watchlist-star" />
                        <h2 className="empty-title">Your watchlist is empty</h2>
                        <p className="empty-description">
                            Search for stocks and add them to your watchlist to track them here.
                        </p>
                        <Link
                            href="/"
                            className="text-yellow-500 hover:text-yellow-400 font-medium transition-colors"
                        >
                            ← Back to Dashboard
                        </Link>
                    </div>
                </div>
            ) : (
                <WatchlistPageClient items={items} />
            )}
        </div>
    );
};

export default WatchlistPage;
