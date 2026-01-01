"use client";

import { useRouter } from "next/navigation";
import { gifts } from "@/data/gifts";

export function MiniSpinner() {
    const router = useRouter();
    const segmentAngle = 360 / gifts.length;

    const handleClick = () => {
        router.push("/spin");
    };

    const renderSegments = () => {
        return gifts.map((gift, index) => {
            const startAngle = index * segmentAngle;
            const endAngle = startAngle + segmentAngle;

            const startRad = (startAngle - 90) * (Math.PI / 180);
            const endRad = (endAngle - 90) * (Math.PI / 180);

            const x1 = 50 + 45 * Math.cos(startRad);
            const y1 = 50 + 45 * Math.sin(startRad);
            const x2 = 50 + 45 * Math.cos(endRad);
            const y2 = 50 + 45 * Math.sin(endRad);

            const largeArcFlag = segmentAngle > 180 ? 1 : 0;
            const pathData = `M 50 50 L ${x1} ${y1} A 45 45 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

            const midAngle = (startAngle + endAngle) / 2 - 90;
            const midRad = midAngle * (Math.PI / 180);
            const iconX = 50 + 30 * Math.cos(midRad);
            const iconY = 50 + 30 * Math.sin(midRad);

            return (
                <g key={gift.id}>
                    <path
                        d={pathData}
                        fill={gift.color}
                        stroke="#27272a"
                        strokeWidth="1"
                    />
                    <text
                        x={iconX}
                        y={iconY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="10"
                    >
                        {gift.icon}
                    </text>
                </g>
            );
        });
    };

    return (
        <div
            onClick={handleClick}
            className="relative cursor-pointer group transform hover:scale-110 transition-transform duration-300"
            title="Click to spin!"
        >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 opacity-40 blur-lg group-hover:opacity-60 transition-opacity"
                style={{ margin: '-8px' }} />

            {/* Mini Wheel */}
            <svg
                viewBox="0 0 100 100"
                className="w-16 h-16 drop-shadow-lg animate-spin-slow"
            >
                {/* Outer ring */}
                <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="url(#miniPinkGradient)"
                    strokeWidth="2"
                />

                {renderSegments()}

                {/* Center circle */}
                <circle
                    cx="50"
                    cy="50"
                    r="12"
                    fill="url(#miniCenterGradient)"
                    stroke="url(#miniPinkGradient)"
                    strokeWidth="2"
                />
                <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="8"
                >
                    🎉
                </text>

                <defs>
                    <linearGradient id="miniPinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="50%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                    <radialGradient id="miniCenterGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#ea580c" />
                    </radialGradient>
                </defs>
            </svg>

            {/* Pointer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1">
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-orange-600" />
            </div>
        </div>
    );
}
