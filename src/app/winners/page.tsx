"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { TestimonialCard } from "@/components/TestimonialCard";
import { winners } from "@/data/winners";
import Link from "next/link";
import NativeAd from "@/components/NativeAd";
import { GreetingsPromo } from "@/components/GreetingsPromo";
import { Sparkles, Trophy, Gift, Star, TrendingUp, ChevronDown } from "lucide-react";

const stats = [
    { icon: Gift, value: "12,500+", label: "Gifts Given", gradient: "from-red-500 to-pink-600" },
    { icon: Trophy, value: "10,250+", label: "Happy Winners", gradient: "from-amber-500 to-orange-600" },
    { icon: TrendingUp, value: "150+", label: "Cities", gradient: "from-emerald-500 to-teal-600" },
    { icon: Star, value: "4.9/5", label: "Rating", gradient: "from-violet-500 to-purple-600" },
];

const giftCategories = [
    { emoji: "📱", name: "iPhones", gradient: "from-slate-600 to-slate-800" },
    { emoji: "💻", name: "Laptops", gradient: "from-blue-500 to-cyan-600" },
    { emoji: "⌚", name: "Smartwatches", gradient: "from-rose-500 to-pink-600" },
    { emoji: "🎧", name: "Headphones", gradient: "from-purple-500 to-indigo-600" },
    { emoji: "🎮", name: "Gaming", gradient: "from-green-500 to-emerald-600" },
    { emoji: "💎", name: "Jewelry", gradient: "from-amber-400 to-yellow-500" },
    { emoji: "👜", name: "Designer Bags", gradient: "from-fuchsia-500 to-pink-600" },
    { emoji: "📸", name: "Cameras", gradient: "from-orange-500 to-red-600" },
    { emoji: "🏠", name: "Home Appliances", gradient: "from-teal-500 to-cyan-600" },
];

const WINNERS_PER_LOAD = 3;

export default function WinnersPage() {
    const [visibleCount, setVisibleCount] = useState(WINNERS_PER_LOAD);

    const displayedWinners = winners.slice(0, visibleCount);
    const hasMore = visibleCount < winners.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + WINNERS_PER_LOAD, winners.length));
    };

    return (
        <PageLayout
            title="Our Winners 🏆"
            subtitle="Real people, real gifts, real happiness!"
        >
            {/* Enhanced Stats Section */}
            <div className="relative mb-16">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-3xl -z-10" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slide-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Gradient accent top */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient}`} />

                                {/* Icon with gradient background */}
                                <div className={`w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                <div className="text-3xl font-bold text-[var(--foreground)] mb-1">{stat.value}</div>
                                <div className="text-sm text-[var(--text-muted)] font-medium">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Enhanced CTA */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-500 via-pink-500 to-rose-600 p-8 md:p-12 text-center shadow-2xl animate-fade-in">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute top-4 right-4 text-6xl opacity-20">🎉</div>
                <div className="absolute bottom-4 left-4 text-6xl opacity-20">🎁</div>

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                        <Sparkles className="w-4 h-4 text-yellow-300" />
                        <span className="text-sm font-medium text-white">Limited Time Offer</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Want to be Our Next Winner? 🌟
                    </h3>
                    <p className="text-white/90 mb-8 text-lg max-w-md mx-auto">
                        Join thousands of happy winners this New Year 2026!
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-white text-pink-600 font-bold text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        <span>🎡</span>
                        <span>Spin & Win Now!</span>
                    </Link>
                </div>
            </div>

            {/* Enhanced Gift Categories */}
            <div className="my-16">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    <h2 className="text-2xl font-bold text-[var(--foreground)]">Gifts We&apos;ve Given</h2>
                    <span className="text-2xl">🎉</span>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    {giftCategories.map((gift, index) => (
                        <span
                            key={index}
                            className={`px-4 py-2 rounded-full bg-gradient-to-r ${gift.gradient} text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default animate-fade-in flex items-center gap-2`}
                            style={{ animationDelay: `${(index + 4) * 50}ms` }}
                        >
                            <span>{gift.emoji}</span>
                            <span>{gift.name}</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Winners Grid Section */}
            <div className="mb-16">
                <div className="flex items-center justify-center gap-2 mb-8">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    <h2 className="text-2xl font-bold text-[var(--foreground)]">What Winners Say</h2>
                    <span className="text-2xl">💬</span>
                </div>

                {/* Subtle background pattern */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent rounded-3xl -z-10" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {displayedWinners.map((winner, index) => (
                            <TestimonialCard key={winner.id} winner={winner} index={index} />
                        ))}
                    </div>
                </div>

                {/* View More Button + Ad */}
                {hasMore && (
                    <div className="mt-10 flex flex-col items-center">
                        <button
                            onClick={handleLoadMore}
                            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold text-lg shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            <span>View More Winners</span>
                            <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                        </button>

                        {/* Ad after button */}
                        <div className="mt-3 w-full">
                            <NativeAd />
                        </div>
                    </div>
                )}

                {/* Greetings Promo */}
                <section className="px-4">
                    <div className="max-w-6xl mx-auto">
                        <GreetingsPromo />
                    </div>
                </section>

                {/* Show final ad if all winners are shown */}
                {!hasMore && (
                    <>
                        <div className="mt-10">
                            <NativeAd />
                        </div>
                        <GreetingsPromo />
                    </>
                )}
            </div>
        </PageLayout>
    );
}
