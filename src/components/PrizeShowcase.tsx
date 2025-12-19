"use client";

import { useState, useEffect } from "react";
import { showcaseGifts, Gift } from "@/data/gifts";
import { Sparkles, TrendingUp } from "lucide-react";
import NativeAd from "./NativeAd";

export function PrizeShowcase() {
    const [displayedGifts, setDisplayedGifts] = useState<Gift[]>([]);
    const [isAnimating, setIsAnimating] = useState(false);

    const shuffleGifts = () => {
        setIsAnimating(true);
        setTimeout(() => {
            const shuffled = [...showcaseGifts].sort(() => Math.random() - 0.5);
            setDisplayedGifts(shuffled.slice(0, 6));
            setIsAnimating(false);
        }, 300);
    };

    useEffect(() => {
        shuffleGifts();
        const interval = setInterval(shuffleGifts, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <h3 className="text-xl font-bold text-[var(--foreground)]">Today&apos;s Prize Pool</h3>
                <Sparkles className="w-5 h-5 text-yellow-500" />
            </div>

            {/* Prize Grid */}
            <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                {displayedGifts.map((gift, index) => (
                    <div
                        key={`${gift.id}-${index}`}
                        className="group relative bg-gradient-to-b from-[var(--card-bg)] to-[var(--background)] border border-[var(--card-border)] rounded-2xl p-4 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-1"
                    >
                        {/* Category badge */}
                        <div className="absolute top-3 right-3 z-20">
                            <span
                                className="px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide"
                                style={{
                                    backgroundColor: `${gift.color}20`,
                                    color: gift.color
                                }}
                            >
                                {gift.category}
                            </span>
                        </div>

                        {/* Product image container */}
                        <div className="relative aspect-square rounded-xl bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center mb-3 overflow-hidden shadow-inner mt-6">
                            {/* Decorative circle */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-zinc-200/50 dark:to-zinc-700/30" />

                            <img
                                src={gift.image}
                                alt={gift.name}
                                className="relative z-10 w-4/5 h-4/5 object-contain group-hover:scale-110 transition-transform duration-500 rounded-xl"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback emoji */}
                            <span className="hidden text-5xl">{gift.icon}</span>
                        </div>

                        {/* Product info */}
                        <div className="space-y-1.5">
                            <h4 className="text-sm font-bold text-[var(--foreground)] leading-tight line-clamp-2 min-h-[2.5rem]">
                                {gift.name}
                            </h4>

                            {/* Value badge */}
                            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-green-500/10 w-fit">
                                <TrendingUp className="w-3 h-3 text-green-500" />
                                <span className="text-sm font-bold text-green-500">{gift.value}</span>
                            </div>
                        </div>

                        {/* Hover glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-pink-500/0 group-hover:from-red-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none" />
                    </div>
                ))}
            </div>
            {/* Live indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
                <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
                </div>
                <span className="text-sm text-[var(--text-muted)]">Live prizes • Updates every 5 seconds</span>
            </div>
            <NativeAd/>

        </div>
    );
}
