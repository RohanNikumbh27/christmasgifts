"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Gift, ChevronRight, Clock, Sparkles, GiftIcon, ArrowLeft } from "lucide-react";
import { gifts, Gift as GiftType, getGiftForSpinCount } from "@/data/gifts";
import NativeAd from "@/components/NativeAd";
import { GreetingsPromo } from "@/components/GreetingsPromo";

export default function SpinPage() {
    const router = useRouter();
    const [isSpinning, setIsSpinning] = useState(false);
    const [hasSpun, setHasSpun] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [wonGift, setWonGift] = useState<GiftType | null>(null);
    const [spinCount, setSpinCount] = useState(1);
    const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; color: string; size: number }>>([]);
    const hasStarted = useRef(false);

    const segmentAngle = 360 / gifts.length;

    // Auto-spin on page load
    useEffect(() => {
        if (hasStarted.current) return;
        hasStarted.current = true;

        // Load spin count and first spin timestamp from localStorage
        const storedSpinCount = localStorage.getItem("spinCount");
        const firstSpinTime = localStorage.getItem("firstSpinTime");
        let currentSpinCount = storedSpinCount ? parseInt(storedSpinCount, 10) : 1;

        // Check if 5 minutes have passed since the first spin
        const now = Date.now();
        const fiveMinutesInMs = 5 * 60 * 1000;

        if (firstSpinTime) {
            const timeElapsed = now - parseInt(firstSpinTime, 10);
            if (timeElapsed > fiveMinutesInMs) {
                // Reset spin count if more than 5 minutes have passed
                currentSpinCount = 1;
                localStorage.setItem("firstSpinTime", now.toString());
            }
        } else {
            // First spin ever, store the timestamp
            localStorage.setItem("firstSpinTime", now.toString());
        }

        // Reset to 1 if we've reached 50 spins
        if (currentSpinCount > 50) {
            currentSpinCount = 1;
            localStorage.setItem("firstSpinTime", now.toString());
        }

        setSpinCount(currentSpinCount);

        // Save the current spin count to localStorage
        localStorage.setItem("spinCount", currentSpinCount.toString());

        // Start spinning after a short delay
        setTimeout(() => {
            spin(currentSpinCount);
        }, 500);
    }, []);

    const spin = (count: number) => {
        if (isSpinning) return;

        setIsSpinning(true);

        // Get gift based on spin count
        const selectedGift = getGiftForSpinCount(count);
        setWonGift(selectedGift);

        // Random number of full rotations (5-8) + random segment offset for visual variety
        const fullRotations = 5 + Math.floor(Math.random() * 4);
        const randomOffset = Math.random() * segmentAngle * 0.5;
        const totalRotation = rotation + fullRotations * 360 + randomOffset;

        setRotation(totalRotation);

        // Wait for animation to complete
        setTimeout(() => {
            setIsSpinning(false);
            setHasSpun(true);
            // Generate confetti
            const pieces = Array.from({ length: 60 }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 2,
                color: ['#ef4444', '#22c55e', '#fbbf24', '#3b82f6', '#ec4899', '#8b5cf6'][Math.floor(Math.random() * 6)],
                size: Math.random() * 8 + 4,
            }));
            setConfetti(pieces);
            // Store won gift in session storage
            sessionStorage.setItem("wonGift", JSON.stringify(selectedGift));
        }, 4000);
    };

    const handleClaimGift = () => {
        router.push("/share");
    };

    const handleSpinAgain = () => {
        // Check if 5 minutes have passed since the first spin
        const firstSpinTime = localStorage.getItem("firstSpinTime");
        const now = Date.now();
        const fiveMinutesInMs = 5 * 60 * 1000;

        let newSpinCount: number;

        if (firstSpinTime) {
            const timeElapsed = now - parseInt(firstSpinTime, 10);
            if (timeElapsed > fiveMinutesInMs) {
                // Reset spin count if more than 5 minutes have passed
                newSpinCount = 1;
                localStorage.setItem("firstSpinTime", now.toString());
            } else {
                // Within 5 minutes, increment normally
                const storedSpinCount = localStorage.getItem("spinCount");
                newSpinCount = storedSpinCount ? parseInt(storedSpinCount, 10) + 1 : 2;
            }
        } else {
            // No first spin time, start fresh
            newSpinCount = 1;
            localStorage.setItem("firstSpinTime", now.toString());
        }

        // Reset to 1 if we've reached beyond 50 spins
        if (newSpinCount > 50) {
            newSpinCount = 1;
            localStorage.setItem("firstSpinTime", now.toString());
        }

        // Save the new spin count to localStorage
        localStorage.setItem("spinCount", newSpinCount.toString());

        // Refresh the page to restart the spin with the new count
        window.location.reload();
    };

    const handleBack = () => {
        router.push("/");
    };

    const renderSegments = () => {
        return gifts.map((gift, index) => {
            const startAngle = index * segmentAngle;
            const endAngle = startAngle + segmentAngle;

            const startRad = (startAngle - 90) * (Math.PI / 180);
            const endRad = (endAngle - 90) * (Math.PI / 180);

            const x1 = 150 + 140 * Math.cos(startRad);
            const y1 = 150 + 140 * Math.sin(startRad);
            const x2 = 150 + 140 * Math.cos(endRad);
            const y2 = 150 + 140 * Math.sin(endRad);

            const largeArcFlag = segmentAngle > 180 ? 1 : 0;

            const pathData = `M 150 150 L ${x1} ${y1} A 140 140 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

            const midAngle = (startAngle + endAngle) / 2 - 90;
            const midRad = midAngle * (Math.PI / 180);
            const textX = 150 + 115 * Math.cos(midRad);
            const textY = 150 + 115 * Math.sin(midRad);
            const iconX = 150 + 65 * Math.cos(midRad);
            const iconY = 150 + 65 * Math.sin(midRad);

            return (
                <g key={gift.id}>
                    <path
                        d={pathData}
                        fill={gift.color}
                        stroke="#27272a"
                        strokeWidth="3"
                    />
                    <text
                        x={iconX}
                        y={iconY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="24"
                    >
                        {gift.icon}
                    </text>
                    <text
                        x={textX}
                        y={textY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={gift.textColor}
                        fontSize="13"
                        fontWeight="600"
                        transform={`rotate(${midAngle + 90}, ${textX}, ${textY})`}
                    >
                        {gift.name.split(' ').map((word, i, arr) => (
                            <tspan
                                key={i}
                                x={textX}
                                dy={i === 0 ? `-${(arr.length - 1) * 1}px` : '15px'}
                            >
                                {word}
                            </tspan>
                        ))}
                    </text>
                </g>
            );
        });
    };

    return (
        <main className="bg-[var(--background)] overflow-x-hidden">
            {/* Back Button Header */}
            <header className="sticky top-0 z-50 glass border-b border-[var(--card-border)]">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--card-bg)] transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Back to Home</span>
                    </button>
                </div>
            </header>

            {/* Confetti overlay */}
            {hasSpun && (
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-40">
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
            )}

            <section className="py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-pink-600 to-rose-600 border border-pink-500/30 mb-4 animate-fade-in">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span className="text-base font-medium text-zinc-100">Spin #{spinCount}</span>
                        </div>
                        <h1 className="text-4xl md:text-4xl font-bold text-[var(--foreground)] mb-2">
                            {isSpinning ? "Spinning..." : hasSpun ? "🎉 You Won!" : "Ready to Spin!"}
                        </h1>
                        <p className="text-lg text-[var(--text-muted)]">
                            {isSpinning ? "Watch the wheel decide your fate!" : hasSpun ? "Congratulations on your prize!" : "Your Christmas gift awaits!"}
                        </p>
                    </div>

                    {/* Main Content - Responsive Layout */}
                    <div className="flex flex-col items-center justify-center gap-8">


                        {/* Spinner Section */}
                        <div className="flex flex-col items-center gap-6">
                            {/* Wheel Container - Only show when spinning or before spin */}
                            {!hasSpun && (
                                <div className="relative">
                                    {/* Pointer */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
                                        <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[35px] border-t-rose-600 drop-shadow-2xl" />
                                    </div>

                                    {/* Outer glow ring */}
                                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-pink-600 to-rose-600 opacity-50 blur-xl ${isSpinning ? 'animate-pulse' : ''}`}
                                        style={{ margin: '-20px' }} />

                                    {/* Wheel */}
                                    <svg
                                        viewBox="0 0 300 300"
                                        className="drop-shadow-2xl transition-transform w-[300px] h-[300px] max-w-full"
                                        style={{
                                            transform: `rotate(${rotation}deg)`,
                                            transitionDuration: isSpinning ? '4s' : '0s',
                                            transitionTimingFunction: 'cubic-bezier(0.17, 0.67, 0.12, 0.99)',
                                        }}
                                    >
                                        <circle
                                            cx="150"
                                            cy="150"
                                            r="148"
                                            fill="none"
                                            stroke="url(#pinkGradient)"
                                            strokeWidth="5"
                                        />
                                        {renderSegments()}
                                        <circle
                                            cx="150"
                                            cy="150"
                                            r="30"
                                            fill="url(#centerGradient)"
                                            stroke="url(#pinkGradient)"
                                            strokeWidth="4"
                                        />
                                        <text
                                            x="150"
                                            y="150"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            fill="white"
                                            fontSize="16"
                                        >
                                            🎄
                                        </text>
                                        <defs>
                                            <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#ef4444" />
                                                <stop offset="50%" stopColor="#ec4899" />
                                                <stop offset="100%" stopColor="#db2777" />
                                            </linearGradient>
                                            <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                                                <stop offset="0%" stopColor="#ef4444" />
                                                <stop offset="100%" stopColor="#db2777" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                </div>
                            )}

                            {/* Won Gift Display */}
                            {hasSpun && wonGift && (
                                <div className="w-full max-w-md animate-bounce-in">
                                    <div className="relative bg-gradient-to-br from-[var(--background)] to-[var(--card-bg)] rounded-2xl p-5 mb-5 border border-[var(--card-border)]">
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-500/10 to-transparent rounded-tr-2xl" />

                                        {/* Gift Image */}
                                        <div className="w-24 h-24 mx-auto mb-3 rounded-xl overflow-hidden bg-white shadow-lg">
                                            <img
                                                src={wonGift.image}
                                                alt={wonGift.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.parentElement!.innerHTML = `<span class="text-5xl flex items-center justify-center h-full">${wonGift.icon}</span>`;
                                                }}
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-[var(--foreground)] text-center">{wonGift.name}</h3>
                                        {wonGift.category === "Voucher" && (
                                            <p className="text-lg font-semibold text-green-500 mt-2 text-center">Worth {wonGift.value}</p>
                                        )}
                                    </div>

                                    {/* CTA Buttons */}
                                    <button
                                        onClick={handleClaimGift}
                                        className="btn-primary group w-full py-4 px-6 rounded-2xl shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98] mb-3"
                                    >
                                        <Gift className="w-5 h-5" />
                                        <span>Claim Your Gift</span>
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </button>

                                    <button
                                        onClick={handleSpinAgain}
                                        className="btn-secondary w-full py-3 px-6 rounded-2xl"
                                    >
                                        <GiftIcon className="w-5 h-5" />
                                        <span>Spin Again</span>
                                    </button>

                                    {/* Urgency notice */}
                                    <div className="flex items-center justify-center gap-2 mt-4 text-[var(--text-muted)]">
                                        <Clock className="w-4 h-4 text-orange-500" />
                                        <span className="text-xs">Claim within 24 hours to receive your gift</span>
                                    </div>
                                </div>
                            )}

                            {/* Spinning indicator */}
                            {isSpinning && (
                                <p className="text-[var(--text-muted)] text-base text-center max-w-xs animate-pulse">
                                    🎁 The wheel is choosing your Christmas gift...
                                </p>
                            )}
                        </div>

                    </div>

                    {/* Ad Section - Below everything */}
                    <div className="mt-14 w-full flex justify-center">
                        <NativeAd />
                    </div>

                    {/* Greetings Promo */}
                    <div className="w-full max-w-2xl mx-auto">
                        <GreetingsPromo />
                    </div>
                </div>
            </section>
        </main>
    );
}
