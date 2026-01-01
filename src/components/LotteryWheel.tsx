"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, GiftIcon } from "lucide-react";
import { gifts } from "@/data/gifts";

export function LotteryWheel() {
    const router = useRouter();
    const [rotation] = useState(0);
    const wheelRef = useRef<SVGSVGElement>(null);

    const segmentAngle = 360 / gifts.length;

    const handleSpinClick = () => {
        // Navigate to /spin route where auto-spin will happen
        router.push("/spin");
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

    // Get spin count from session storage for display
    const getSpinCount = () => {
        if (typeof window !== 'undefined') {
            const stored = sessionStorage.getItem("spinCount");
            return stored ? parseInt(stored) + 1 : 1;
        }
        return 1;
    };

    return (
        <div className="flex flex-col items-center gap-6">
            {/* Wheel Container */}
            <div className="relative cursor-pointer" onClick={handleSpinClick}>
                {/* Pointer */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
                    <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[35px] border-t-orange-600 drop-shadow-2xl" />
                </div>

                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 opacity-50 blur-xl animate-pulse"
                    style={{ margin: '-20px' }} />

                {/* Wheel */}
                <svg
                    ref={wheelRef}
                    viewBox="0 0 300 300"
                    className="drop-shadow-2xl w-[300px] h-[300px] max-w-full h-auto hover:scale-105 transition-transform duration-300"
                    style={{
                        transform: `rotate(${rotation}deg)`,
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
                        🎉
                    </text>

                    {/* Gradients */}
                    <defs>
                        <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f59e0b" />
                            <stop offset="50%" stopColor="#f97316" />
                            <stop offset="100%" stopColor="#ea580c" />
                        </linearGradient>
                        <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#ea580c" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            <button
                onClick={handleSpinClick}
                className="btn-primary group w-full py-4 px-6 rounded-2xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
                <GiftIcon className="w-5 h-5" />
                <span>SPIN TO WIN!</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-[var(--text-muted)] text-base text-center max-w-xs mb-5">
                🎁 Spin the wheel and win amazing New Year gifts from TrustNewYear Foundation!
            </p>
        </div>
    );
}

