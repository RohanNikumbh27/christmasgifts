"use client";

import { useState, useRef } from "react";
import { ChevronRight, GiftIcon, WandSparkles } from "lucide-react";
import { gifts, Gift } from "@/data/gifts";

interface LotteryWheelProps {
    onWin: (gift: Gift) => void;
}

export function LotteryWheel({ onWin }: LotteryWheelProps) {
    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const wheelRef = useRef<SVGSVGElement>(null);

    const segmentAngle = 360 / gifts.length;

    const spin = () => {
        if (isSpinning) return;

        setIsSpinning(true);

        // Random number of full rotations (5-8) + random segment
        const fullRotations = 5 + Math.floor(Math.random() * 4);
        const randomSegment = Math.floor(Math.random() * gifts.length);
        const segmentRotation = randomSegment * segmentAngle + segmentAngle / 2;
        const totalRotation = rotation + fullRotations * 360 + segmentRotation;

        setRotation(totalRotation);

        // Wait for animation to complete
        setTimeout(() => {
            setIsSpinning(false);
            // Calculate which gift was selected (accounting for pointer at top)
            const normalizedRotation = totalRotation % 360;
            const selectedIndex = Math.floor((360 - normalizedRotation + segmentAngle / 2) / segmentAngle) % gifts.length;
            onWin(gifts[selectedIndex]);
        }, 4000);
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

            // Text position (now outer)
            const midAngle = (startAngle + endAngle) / 2 - 90;
            const midRad = midAngle * (Math.PI / 180);
            const textX = 150 + 115 * Math.cos(midRad);
            const textY = 150 + 115 * Math.sin(midRad);

            // Icon position (now inner)
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
        <div className="flex flex-col items-center gap-6">
            {/* Wheel Container */}
            <div className="relative">
                {/* Pointer */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
                    <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[35px] border-t-pink-600 drop-shadow-2xl" />
                </div>

                {/* Outer glow ring */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-pink-600 opacity-50 blur-xl ${isSpinning ? 'animate-pulse' : ''}`}
                    style={{ margin: '-20px' }} />

                {/* Wheel */}
                <svg
                    ref={wheelRef}
                    width="300"
                    height="300"
                    viewBox="0 0 300 300"
                    className="drop-shadow-2xl transition-transform"
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        transitionDuration: isSpinning ? '4s' : '0s',
                        transitionTimingFunction: 'cubic-bezier(0.17, 0.67, 0.12, 0.99)',
                    }}
                >
                    {/* Outer ring */}
                    <circle
                        cx="150"
                        cy="150"
                        r="148"
                        fill="none"
                        stroke="url(#pinkGradient)"
                        strokeWidth="5"
                    />

                    {/* Segments */}
                    {renderSegments()}

                    {/* Center circle */}
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

                    {/* Gradients */}
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

            <button
                onClick={spin}
                disabled={isSpinning}
                className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
                <GiftIcon className="w-5 h-5" />
                <span>{isSpinning ? "Spinning..." : "SPIN TO WIN!"}</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-[var(--text-muted)] text-base text-center max-w-xs">
                🎁 Spin the wheel and win amazing Christmas gifts from TrustChristmas Foundation!
            </p>
        </div>
    );
}
