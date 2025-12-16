"use client";

interface AdBannerProps {
    variant?: "horizontal" | "vertical" | "square";
    className?: string;
}

export function AdBanner({ variant = "horizontal", className = "" }: AdBannerProps) {
    const sizeClasses = {
        horizontal: "w-full h-24",
        vertical: "w-full h-64 md:w-48 md:h-full",
        square: "w-full aspect-square max-w-xs",
    };

    return (
        <div className={`ad-container ${sizeClasses[variant]} ${className}`}>
            <div className="flex flex-col items-center justify-center h-full gap-2">
                <div className="text-2xl opacity-50">📢</div>
                <p className="text-xs opacity-70">Advertisement</p>
                <div className="w-24 h-1 bg-[var(--card-border)] rounded-full" />
            </div>
        </div>
    );
}
