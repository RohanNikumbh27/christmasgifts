"use client";

import Image from "next/image";
import { Clock, CheckCircle2, Quote } from "lucide-react";
import { Winner } from "@/data/winners";

interface TestimonialCardProps {
    winner: Winner;
    index: number;
}

export function TestimonialCard({ winner, index }: TestimonialCardProps) {
    const formatTimeAgo = (days: number) => {
        if (days === 0) return "Today";
        if (days === 1) return "Yesterday";
        return `${days} days ago`;
    };

    return (
        <div
            className="card animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
                {/* Avatar */}
                <div className="relative">
                    <Image
                        src={winner.avatar}
                        alt={winner.name}
                        width={56}
                        height={56}
                        className="rounded-2xl object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-[var(--card-bg)]">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                    <h4 className="font-semibold text-[var(--foreground)]">{winner.name}</h4>
                    <p className="text-sm text-[var(--text-muted)]">{winner.location}</p>
                    <div className="flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3 text-[var(--text-muted)]" />
                        <span className="text-xs text-[var(--text-muted)]">{formatTimeAgo(winner.daysAgo)}</span>
                    </div>
                </div>

                {/* Quote icon */}
                <Quote className="w-6 h-6 text-[var(--card-border)]" />
            </div>

            {/* Comment */}
            <p className="text-[var(--foreground)] leading-relaxed mb-4">
                {winner.comment}
            </p>

            {/* Gift tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-br from-red-500/20 to-pink-600/20 border border-red-500/30">
                <span className="text-sm">🎁</span>
                <span className="text-sm font-medium text-[var(--foreground)]">Won: {winner.gift}</span>
            </div>
        </div>
    );
}
