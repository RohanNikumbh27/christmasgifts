"use client";

import { useEffect, useState } from "react";
import { X, Gift, Sparkles, Clock, ChevronRight } from "lucide-react";
import { Gift as GiftType } from "@/data/gifts";
import { useRouter } from "next/navigation";

interface WinnerPopupProps {
    gift: GiftType;
    onClose: () => void;
}

export function WinnerPopup({ gift, onClose }: WinnerPopupProps) {
    const router = useRouter();
    const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; color: string; size: number }>>([]);

    useEffect(() => {
        // Generate confetti pieces with varied sizes
        const pieces = Array.from({ length: 60 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 2,
            color: ['#ef4444', '#22c55e', '#fbbf24', '#3b82f6', '#ec4899', '#8b5cf6'][Math.floor(Math.random() * 6)],
            size: Math.random() * 8 + 4,
        }));
        setConfetti(pieces);
    }, []);

    const handleGetGift = () => {
        sessionStorage.setItem("wonGift", JSON.stringify(gift));
        router.push("/share");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Confetti */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {confetti.map((piece) => (
                    <div
                        key={piece.id}
                        className="absolute rounded-full"
                        style={{
                            left: `${piece.left}%`,
                            top: '-20px',
                            width: `${piece.size}px`,
                            height: `${piece.size}px`,
                            backgroundColor: piece.color,
                            animation: `confetti-fall 3s linear ${piece.delay}s infinite`,
                        }}
                    />
                ))}
            </div>

            {/* Modal */}
            <div className="relative w-full max-w-sm animate-bounce-in">
                {/* Glow effect behind modal */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 to-rose-600/30 blur-3xl rounded-full scale-150" />

                {/* Modal content */}
                <div className="relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 shadow-2xl">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 p-2 rounded-full bg-[var(--background)] border border-[var(--card-border)] hover:bg-[var(--card-border)] transition-all"
                    >
                        <X className="w-4 h-4 text-[var(--text-muted)]" />
                    </button>

                    {/* Content */}
                    <div className="text-center">
                        {/* Celebration badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 mb-4">
                            <Sparkles className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold text-white">You&apos;re a Winner!</span>
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-1">
                            Congratulations!
                        </h2>
                        <p className="text-sm text-[var(--text-muted)] mb-5">
                            You&apos;ve won an amazing gift!
                        </p>

                        {/* Gift display card */}
                        <div className="relative bg-gradient-to-br from-[var(--background)] to-[var(--card-bg)] rounded-2xl p-5 mb-5 border border-[var(--card-border)]">
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-500/10 to-transparent rounded-tr-2xl" />

                            {/* Gift Image */}
                            <div className="w-24 h-24 mx-auto mb-3 rounded-xl overflow-hidden bg-white shadow-lg">
                                <img
                                    src={gift.image}
                                    alt={gift.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Fallback to emoji if image fails to load
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement!.innerHTML = `<span class="text-5xl flex items-center justify-center h-full">${gift.icon}</span>`;
                                    }}
                                />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--foreground)]">{gift.name}</h3>
                            {/* Show value for vouchers */}
                            {gift.category === "Voucher" && (
                                <p className="text-lg font-semibold text-green-500 mt-2">Worth {gift.value}</p>
                            )}
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={handleGetGift}
                            className="btn-primary group w-full py-4 px-6 rounded-2xl shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Gift className="w-5 h-5" />
                            <span>Claim Your Gift</span>
                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>

                        {/* Urgency notice */}
                        <div className="flex items-center justify-center gap-2 mt-4 text-[var(--text-muted)]">
                            <Clock className="w-4 h-4 text-orange-500" />
                            <span className="text-xs">Claim within 24 hours to receive your gift</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
