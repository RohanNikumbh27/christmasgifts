import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { Gamepad2, Brain, Gift, HelpCircle } from "lucide-react";
import NativeAd from "@/components/NativeAd";

export const metadata = {
    title: "Christmas Games | TrustChristmas Foundation",
    description: "Play fun Christmas games and win amazing prizes!",
};

const games = [
    {
        id: "memory",
        title: "Memory Match",
        description: "Match Christmas pairs to test your memory!",
        icon: Brain,
        color: "from-purple-500 to-indigo-600",
        emoji: "🎄",
    },
    {
        id: "catch",
        title: "Catch the Presents",
        description: "Catch falling gifts before they hit the ground!",
        icon: Gift,
        color: "from-red-500 to-pink-600",
        emoji: "🎁",
    },
    {
        id: "trivia",
        title: "Christmas Trivia",
        description: "Test your Christmas knowledge with fun questions!",
        icon: HelpCircle,
        color: "from-green-500 to-emerald-600",
        emoji: "❓",
    },
];

export default function GamesPage() {
    return (
        <PageLayout
            title="Christmas Games 🎮"
            subtitle="Play fun games and spread the holiday cheer!"
        >
            {/* Games Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {games.map((game, index) => (
                    <Link
                        key={game.id}
                        href={`/games/${game.id}`}
                        className="group card hover:scale-[1.02] transition-all duration-300 animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex flex-col items-center text-center">
                            {/* Icon */}
                            <div
                                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${game.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                            >
                                <span className="text-4xl">{game.emoji}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                                {game.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[var(--text-muted)] text-sm mb-4">
                                {game.description}
                            </p>

                            {/* Play Button */}
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-medium text-sm group-hover:shadow-lg transition-shadow">
                                <Gamepad2 className="w-4 h-4" />
                                <span>Play Now</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Ad */}
            <NativeAd />

            {/* Info Card */}
            <div className="card text-center bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20 animate-fade-in">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                    🏆 Compete & Win!
                </h3>
                <p className="text-[var(--text-muted)]">
                    Play our Christmas games and share your high scores with friends.
                    The more you play, the more fun you spread!
                </p>
            </div>
        </PageLayout>
    );
}
