"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, RotateCcw, Trophy, Play, Pause } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import AdCashAd from "@/components/AdCashAd";

interface Present {
    id: number;
    x: number;
    y: number;
    emoji: string;
    speed: number;
}

const presentEmojis = ["🎁", "🎀", "🎄", "⭐", "🔔", "🍬"];

export default function CatchGame() {
    const router = useRouter();
    const [presents, setPresents] = useState<Present[]>([]);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [highScore, setHighScore] = useState(0);

    // Load high score
    useEffect(() => {
        const saved = localStorage.getItem("catchHighScore");
        if (saved) setHighScore(parseInt(saved));
    }, []);

    // Game timer
    useEffect(() => {
        if (!isPlaying || timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((t) => {
                if (t <= 1) {
                    setIsPlaying(false);
                    setIsGameOver(true);
                    if (score > highScore) {
                        setHighScore(score);
                        localStorage.setItem("catchHighScore", score.toString());
                    }
                    return 0;
                }
                return t - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isPlaying, timeLeft, score, highScore]);

    // Spawn presents
    useEffect(() => {
        if (!isPlaying) return;

        const spawnInterval = setInterval(() => {
            const newPresent: Present = {
                id: Date.now(),
                x: Math.random() * 80 + 10, // 10-90% of width
                y: -10,
                emoji: presentEmojis[Math.floor(Math.random() * presentEmojis.length)],
                speed: Math.random() * 2 + 1,
            };
            setPresents((prev) => [...prev, newPresent]);
        }, 800);

        return () => clearInterval(spawnInterval);
    }, [isPlaying]);

    // Move presents down
    useEffect(() => {
        if (!isPlaying) return;

        const moveInterval = setInterval(() => {
            setPresents((prev) =>
                prev
                    .map((p) => ({ ...p, y: p.y + p.speed }))
                    .filter((p) => p.y < 100) // Remove presents that fell off screen
            );
        }, 50);

        return () => clearInterval(moveInterval);
    }, [isPlaying]);

    const catchPresent = useCallback((id: number) => {
        setPresents((prev) => prev.filter((p) => p.id !== id));
        setScore((s) => s + 10);
    }, []);

    const startGame = () => {
        setPresents([]);
        setScore(0);
        setTimeLeft(30);
        setIsPlaying(true);
        setIsGameOver(false);
    };

    return (
        <main className="min-h-screen bg-[var(--background)]">
            {/* Header */}
            <header className="sticky top-0 z-40 glass border-b border-[var(--card-border)]">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <button
                        onClick={() => router.push("/games")}
                        className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Games</span>
                    </button>
                    <ThemeToggle />
                </div>
            </header>

            <div className="max-w-2xl mx-auto px-4 py-8">
                {/* Title */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">
                        🎁 Catch the Presents
                    </h1>
                    <p className="text-[var(--text-muted)]">
                        Tap the falling presents to catch them!
                    </p>
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-6 mb-6">
                    <div className="card !p-4 text-center">
                        <div className="text-2xl font-bold text-[var(--foreground)]">{score}</div>
                        <div className="text-sm text-[var(--text-muted)]">Score</div>
                    </div>
                    <div className="card !p-4 text-center">
                        <div className="text-2xl font-bold text-[var(--foreground)]">{timeLeft}s</div>
                        <div className="text-sm text-[var(--text-muted)]">Time</div>
                    </div>
                    <div className="card !p-4 text-center">
                        <div className="text-2xl font-bold text-yellow-500">{highScore}</div>
                        <div className="text-sm text-[var(--text-muted)]">Best</div>
                    </div>
                </div>

                {/* Game Area */}
                <div
                    className="relative w-full h-96 rounded-2xl bg-gradient-to-b from-blue-900 to-indigo-900 border border-[var(--card-border)] overflow-hidden mb-6"
                    style={{ touchAction: "manipulation" }}
                >
                    {/* Snowflakes background decoration */}
                    <div className="absolute inset-0 opacity-20 text-4xl pointer-events-none">
                        ❄️ ❄️ ❄️
                    </div>

                    {/* Presents */}
                    {presents.map((present) => (
                        <button
                            key={present.id}
                            onClick={() => catchPresent(present.id)}
                            className="absolute text-4xl transform -translate-x-1/2 hover:scale-125 transition-transform active:scale-90"
                            style={{
                                left: `${present.x}%`,
                                top: `${present.y}%`,
                            }}
                        >
                            {present.emoji}
                        </button>
                    ))}

                    {/* Start overlay */}
                    {!isPlaying && !isGameOver && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                            <button onClick={startGame} className="btn-primary text-lg">
                                <Play className="w-5 h-5" />
                                <span>Start Game</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* Controls */}
                {isPlaying && (
                    <div className="flex justify-center mb-8">
                        <button
                            onClick={() => setIsPlaying(false)}
                            className="btn-secondary"
                        >
                            <Pause className="w-4 h-4" />
                            <span>Pause</span>
                        </button>
                    </div>
                )}

                {/* Game Over Modal */}
                {isGameOver && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                        <div className="card text-center max-w-sm w-full animate-scale-in">
                            <div className="text-6xl mb-4">🎄</div>
                            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                                Game Over!
                            </h2>
                            <p className="text-[var(--text-muted)] mb-2">
                                You scored {score} points!
                            </p>
                            {score >= highScore && score > 0 && (
                                <p className="text-yellow-500 font-bold mb-4">🏆 New High Score!</p>
                            )}
                            <div className="flex gap-3 justify-center">
                                <button onClick={startGame} className="btn-primary">
                                    <RotateCcw className="w-4 h-4" />
                                    <span>Play Again</span>
                                </button>
                                <button onClick={() => router.push("/games")} className="btn-secondary">
                                    More Games
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ad */}
                <AdCashAd zoneId="10735922" />
            </div>
        </main>
    );
}
