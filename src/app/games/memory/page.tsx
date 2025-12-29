"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, RotateCcw, Trophy } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import NativeAd from "@/components/NativeAd";

const emojis = ["🎉", "🥳", "🎁", "⭐", "🥂", "✨", "🎊", "🍾"];

interface Card {
    id: number;
    emoji: string;
    isFlipped: boolean;
    isMatched: boolean;
}

export default function MemoryGame() {
    const router = useRouter();
    const [cards, setCards] = useState<Card[]>([]);
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [moves, setMoves] = useState(0);
    const [matches, setMatches] = useState(0);
    const [isWon, setIsWon] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

    const initializeGame = () => {
        const shuffled = [...emojis, ...emojis]
            .sort(() => Math.random() - 0.5)
            .map((emoji, index) => ({
                id: index,
                emoji,
                isFlipped: false,
                isMatched: false,
            }));
        setCards(shuffled);
        setFlippedCards([]);
        setMoves(0);
        setMatches(0);
        setIsWon(false);
        setIsLocked(false);
    };

    useEffect(() => {
        initializeGame();
    }, []);

    const handleCardClick = (id: number) => {
        if (isLocked) return;
        if (flippedCards.length === 2) return;
        if (cards[id].isFlipped || cards[id].isMatched) return;

        const newCards = [...cards];
        newCards[id].isFlipped = true;
        setCards(newCards);

        const newFlipped = [...flippedCards, id];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            setMoves((m) => m + 1);
            setIsLocked(true);

            const [first, second] = newFlipped;
            if (cards[first].emoji === cards[second].emoji) {
                // Match found
                setTimeout(() => {
                    const matchedCards = [...cards];
                    matchedCards[first].isMatched = true;
                    matchedCards[second].isMatched = true;
                    setCards(matchedCards);
                    setMatches((m) => m + 1);
                    setFlippedCards([]);
                    setIsLocked(false);

                    if (matches + 1 === emojis.length) {
                        setIsWon(true);
                    }
                }, 500);
            } else {
                // No match
                setTimeout(() => {
                    const resetCards = [...cards];
                    resetCards[first].isFlipped = false;
                    resetCards[second].isFlipped = false;
                    setCards(resetCards);
                    setFlippedCards([]);
                    setIsLocked(false);
                }, 1000);
            }
        }
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
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">
                        🧠 Memory Match
                    </h1>
                    <p className="text-[var(--text-muted)]">
                        Match all the New Year pairs!
                    </p>
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-6 mb-6">
                    <div className="card !p-4 text-center">
                        <div className="text-2xl font-bold text-[var(--foreground)]">{moves}</div>
                        <div className="text-sm text-[var(--text-muted)]">Moves</div>
                    </div>
                    <div className="card !p-4 text-center">
                        <div className="text-2xl font-bold text-[var(--foreground)]">{matches}/{emojis.length}</div>
                        <div className="text-sm text-[var(--text-muted)]">Matches</div>
                    </div>
                </div>

                {/* Game Board */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                    {cards.map((card) => (
                        <button
                            key={card.id}
                            onClick={() => handleCardClick(card.id)}
                            className={`aspect-square rounded-xl text-4xl flex items-center justify-center transition-all duration-300 transform ${card.isFlipped || card.isMatched
                                ? "bg-gradient-to-br from-red-500 to-pink-600 rotate-0 scale-100"
                                : "bg-[var(--card-bg)] border border-[var(--card-border)] hover:scale-105"
                                } ${card.isMatched ? "opacity-50" : ""}`}
                            disabled={card.isMatched}
                        >
                            {card.isFlipped || card.isMatched ? card.emoji : "🎉"}
                        </button>
                    ))}
                </div>

                {/* Restart Button */}
                <div className="flex justify-center mb-8">
                    <button onClick={initializeGame} className="btn-secondary">
                        <RotateCcw className="w-4 h-4" />
                        <span>Restart Game</span>
                    </button>
                </div>

                {/* Win Modal */}
                {isWon && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                        <div className="card text-center max-w-sm w-full animate-scale-in">
                            <div className="text-6xl mb-4">🎉</div>
                            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                                You Won!
                            </h2>
                            <p className="text-[var(--text-muted)] mb-4">
                                Completed in {moves} moves!
                            </p>
                            <div className="flex gap-3 justify-center">
                                <button onClick={initializeGame} className="btn-primary">
                                    <Trophy className="w-4 h-4" />
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
                <NativeAd />
            </div>
        </main>
    );
}
