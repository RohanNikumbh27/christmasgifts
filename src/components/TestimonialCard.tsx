"use client";

import Image from "next/image";
import { Clock, CheckCircle2 } from "lucide-react";
import { Winner } from "@/data/winners";

interface TestimonialCardProps {
    winner: Winner;
    index: number;
}

export function TestimonialCard({ winner, index }: TestimonialCardProps) {
    const formatTimeAgo = (days: number) => {
        if (days === 0) return "Today";
        if (days === 1) return "Yesterday";
        return `${days}d ago`;
    };

    return (
        <div
            className="relative rounded-2xl bg-[var(--card-bg)]/80 backdrop-blur-sm border border-[var(--card-border)] p-5 transition-all duration-300 hover:bg-[var(--card-bg)] animate-slide-up"
            style={{ animationDelay: `${index * 60}ms` }}
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                    <Image
                        src={winner.avatar}
                        alt={winner.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover ring-2 ring-[var(--card-border)]"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center ring-2 ring-[var(--card-bg)]">
                        <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                    </div>
                </div>

                {/* Name & Location */}
                <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[var(--foreground)] text-sm truncate">{winner.name}</h4>
                    <p className="text-xs text-[var(--text-muted)] truncate">{winner.location}</p>
                </div>

                {/* Time badge */}
                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-[var(--background)] text-[var(--text-muted)]">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs font-medium">{formatTimeAgo(winner.daysAgo)}</span>
                </div>
            </div>

            {/* Comment */}
            <p className="text-[var(--foreground)] text-sm leading-relaxed mb-4">
                {winner.comment}
            </p>

            {/* Gift badge */}
            <div className="flex items-center gap-2">
                <span className="text-base">🎁</span>
                <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">Won</span>
                <span className="text-sm font-semibold text-[var(--foreground)]">{winner.gift}</span>
            </div>
        </div>
    );
}
