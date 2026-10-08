'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Star, Trash2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toggleWatchlist } from '@/lib/actions/watchlist.actions';

const WatchlistButton = ({
    symbol,
    company,
    isInWatchlist = false,
    showTrashIcon = false,
    type = 'button',
    onWatchlistChange,
}: WatchlistButtonProps) => {
    const [inWatchlist, setInWatchlist] = useState(isInWatchlist);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setInWatchlist(isInWatchlist);
    }, [isInWatchlist]);

    const handleToggle = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const nextState = !inWatchlist;
        setInWatchlist(nextState);
        onWatchlistChange?.(symbol, nextState);

        setLoading(true);
        try {
            const res = await toggleWatchlist(symbol, company || symbol);
            if (res && res.success && typeof res.isInWatchlist === 'boolean') {
                setInWatchlist(res.isInWatchlist);
            }
        } catch (err) {
            console.error('Error toggling watchlist:', err);
            setInWatchlist(!nextState);
            onWatchlistChange?.(symbol, !nextState);
        } finally {
            setLoading(false);
        }
    };

    if (type === 'icon') {
        if (showTrashIcon) {
            return (
                <button
                    onClick={handleToggle}
                    disabled={loading}
                    className="watchlist-icon-btn"
                    title="Remove from Watchlist"
                >
                    <div className="watchlist-icon">
                        {loading ? <Loader2 className="trash-icon animate-spin" /> : <Trash2 className="trash-icon" />}
                    </div>
                </button>
            );
        }

        return (
            <button
                onClick={handleToggle}
                disabled={loading}
                className={cn('watchlist-icon-btn', inWatchlist && 'watchlist-icon-added')}
                title={inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
            >
                <div className="watchlist-icon">
                    {loading ? (
                        <Loader2 className="star-icon animate-spin" />
                    ) : (
                        <Star className={cn('star-icon', inWatchlist ? 'fill-yellow-500 text-yellow-500' : 'text-gray-400')} />
                    )}
                </div>
            </button>
        );
    }

    return (
        <Button
            onClick={handleToggle}
            disabled={loading}
            className={cn('watchlist-btn', inWatchlist && 'watchlist-remove')}
        >
            {loading ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : inWatchlist ? (
                <>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Remove from Watchlist
                </>
            ) : (
                <>
                    <Star className="h-4 w-4 mr-2" />
                    Add to Watchlist
                </>
            )}
        </Button>
    );
};

export { WatchlistButton };
export default WatchlistButton;
