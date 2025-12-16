"use client";

import { useEffect, useState } from "react";
import { X, Gift, PartyPopper } from "lucide-react";
import { Gift as GiftType } from "@/data/gifts";
import { useRouter } from "next/navigation";

interface WinnerPopupProps {
    gift: GiftType;
    onClose: () => void;
}

export function WinnerPopup({ gift, onClose }: WinnerPopupProps) {
    const router = useRouter();
    const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; color: string }>>([]);

    useEffect(() => {
        // Generate confetti pieces
        const pieces = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 2,
            color: ['#ef4444', '#22c55e', '#fbbf24', '#3b82f6', '#ec4899', '#8b5cf6'][Math.floor(Math.random() * 6)],
        }));
        setConfetti(pieces);
    }, []);

    const handleGetGift = () => {
        // Store the won gift in sessionStorage
        sessionStorage.setItem("wonGift", JSON.stringify(gift));
        router.push("/share");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Confetti */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {confetti.map((piece) => (
                    <div
                        key={piece.id}
                        className="absolute w-3 h-3 rounded-sm"
                        style={{
                            left: `${piece.left}%`,
                            top: '-20px',
                            backgroundColor: piece.color,
                            animation: `confetti-fall 3s linear ${piece.delay}s infinite`,
                        }}
                    />
                ))}
            </div>

            {/* Modal */}
            <div className="relative glass backdrop-blur-lg rounded-3xl p-8 max-w-md w-full animate-bounce-in">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-xl hover:bg-[var(--card-border)] transition-colors"
                >
                    <X className="w-5 h-5 text-[var(--text-muted)] " />
                </button>

                {/* Content */}
                <div className="text-center">
                    {/* Celebration icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-pink-600 mb-1 animate-bounce">
                        <PartyPopper className="w-10 h-10 text-white" />
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl font-bold mb-2 bg-gradient-to-br from-red-500 to-pink-600 bg-clip-text text-transparent">
                        Congratulations! 🎉
                    </h2>

                    <p className="text-lg text-[var(--text-muted)] mb-6">
                        You&apos;ve won an amazing gift!
                    </p>

                    {/* Gift display */}
                    <div className="card mb-6 bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-border)]">
                        <div className="text-6xl mb-3">{gift.icon}</div>
                        <h3 className="text-3xl font-bold text-[var(--foreground)]">{gift.name}</h3>
                        <p className="text-[var(--text-muted)] text-base mt-1">Worth ₹10,000+</p>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={handleGetGift}
                        className="btn-primary w-full text-lg py-4"
                    >
                        <Gift className="w-5 h-5" />
                        Get Your Gift Now!
                    </button>

                    <p className="text-sm text-[var(--text-muted)] mt-4">
                        ⏰ Claim within 24 hours to receive your gift
                    </p>
                </div>
            </div>
        </div>
    );
}
