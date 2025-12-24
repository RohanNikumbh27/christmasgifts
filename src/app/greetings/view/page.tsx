"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Gift, Sparkles, Heart, ArrowLeft, Home, Share2, Copy, Check, Plus } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getCardById, greetingCards } from "@/data/greetings";
import NativeAd from "@/components/NativeAd";
import { Footer } from "@/components/Footer";
import { Suspense, useState, useEffect } from "react";
import Lottie from "lottie-react";
import christmasTreeAnimation from "../../../../public/christmas-tree.json";

function GreetingContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [copied, setCopied] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfetti(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    const cardId = searchParams.get("card") || "classic";
    const msgParam = searchParams.get("msg") || "1";
    const recipientName = searchParams.get("to") || "";
    const senderName = searchParams.get("from") || "your Santa Claus";
    const isPreview = searchParams.get("preview") === "true";

    const card = getCardById(cardId) || greetingCards[0];
    const msgId = parseInt(msgParam) || 1;
    const message = card.messages.find(m => m.id === msgId)?.message || card.messages[0].message;

    // Generate shareable link (without preview param)
    const getShareableLink = () => {
        if (typeof window === "undefined") return "";
        const params = new URLSearchParams({
            card: cardId,
            msg: msgParam,
            ...(recipientName && { to: recipientName }),
            ...(senderName && { from: senderName }),
        });
        return `${window.location.origin}/greetings/view?${params.toString()}`;
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(getShareableLink());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleWhatsApp = () => {
        const shareLink = getShareableLink();
        const text = encodeURIComponent(`🎄 You've received a Christmas greeting! Open to view:\n${shareLink}`);
        window.open(`https://wa.me/?text=${text}`, "_blank");
    };

    return (
        <main className={`h-svh bg-gradient-to-br ${card.gradient} relative overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
            {/* Confetti Animations */}
            <style jsx>{`
                @keyframes confetti-fall {
                    0% { transform: translateY(-100vh) rotate(0deg); opacity: 0; }
                    5% { opacity: 1; }
                    100% { transform: translateY(100vh) rotate(720deg); opacity: 0.5; }
                }
                @keyframes confetti-left-burst {
                    0% { 
                        transform: translate(-10%, -10%) rotate(0deg); 
                        opacity: 0; 
                    }
                    5% { opacity: 1; }
                    100% { 
                        transform: translate(50vw, 100vh) rotate(720deg); 
                        opacity: 0; 
                    }
                }
                @keyframes confetti-right-burst {
                    0% { 
                        transform: translate(10%, -10%) rotate(0deg); 
                        opacity: 0; 
                    }
                    5% { opacity: 1; }
                    100% { 
                        transform: translate(-50vw, 100vh) rotate(-720deg); 
                        opacity: 0; 
                    }
                }
                .confetti {
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    z-index: 1;
                    animation: confetti-fall linear infinite both;
                }
                .confetti-left {
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    z-index: 1;
                    left: 0;
                    top: 0;
                    animation: confetti-left-burst linear infinite both;
                }
                .confetti-right {
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    z-index: 1;
                    right: 0;
                    top: 0;
                    animation: confetti-right-burst linear infinite both;
                }
            `}</style>

            {/* Multiple Confetti Particles - Falling */}
            {showConfetti && Array.from({ length: 50 }).map((_, i) => (
                <div
                    key={i}
                    className="confetti"
                    style={{
                        left: `${Math.random() * 100}%`,
                        backgroundColor: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff6b9d', '#c44569', '#f8b500', '#1e90ff'][i % 7],
                        width: `${Math.random() * 8 + 4}px`,
                        height: `${Math.random() * 8 + 4}px`,
                        animationDuration: `${Math.random() * 3 + 3}s`,
                        animationDelay: `${Math.random() * 5}s`,
                        borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                    }}
                />
            ))}

            {/* Confetti Burst from Left Edge */}
            {showConfetti && Array.from({ length: 25 }).map((_, i) => {
                const randomTop = Math.random() * 30; // Random vertical offset 0-30%
                const randomHorizontal = Math.random() * 40 + 30; // Random horizontal spread 30-70vw
                return (
                    <div
                        key={`left-${i}`}
                        className="confetti-left"
                        style={{
                            top: `${randomTop}%`,
                            backgroundColor: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff6b9d', '#c44569', '#f8b500', '#1e90ff'][i % 7],
                            width: `${Math.random() * 10 + 6}px`,
                            height: `${Math.random() * 10 + 6}px`,
                            animationDuration: `${Math.random() * 2 + 2}s`,
                            animationDelay: `${Math.random() * 3}s`,
                            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                            '--randomX': `${randomHorizontal}vw`,
                        } as React.CSSProperties & { '--randomX': string }}
                    />
                );
            })}

            {/* Confetti Burst from Right Edge */}
            {showConfetti && Array.from({ length: 25 }).map((_, i) => {
                const randomTop = Math.random() * 30; // Random vertical offset 0-30%
                const randomHorizontal = Math.random() * 40 + 30; // Random horizontal spread 30-70vw
                return (
                    <div
                        key={`right-${i}`}
                        className="confetti-right"
                        style={{
                            top: `${randomTop}%`,
                            backgroundColor: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff6b9d', '#c44569', '#f8b500', '#1e90ff'][i % 7],
                            width: `${Math.random() * 10 + 6}px`,
                            height: `${Math.random() * 10 + 6}px`,
                            animationDuration: `${Math.random() * 2 + 2}s`,
                            animationDelay: `${Math.random() * 3}s`,
                            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                            '--randomX': `${randomHorizontal}vw`,
                        } as React.CSSProperties & { '--randomX': string }}
                    />
                );
            })}

            {/* Decorative Corner Icons */}
            <div className="fixed top-4 left-4 text-5xl md:text-6xl z-0 animate-pulse">✨</div>
            <div className="fixed top-4 right-4 text-5xl md:text-6xl z-0 animate-pulse" style={{ animationDelay: '0.5s' }}>⭐</div>
            <div className="fixed bottom-4 left-4 text-5xl md:text-6xl z-0 animate-pulse" style={{ animationDelay: '1s' }}>🌟</div>
            <div className="fixed bottom-4 right-4 text-5xl md:text-6xl z-0 animate-pulse" style={{ animationDelay: '1.5s' }}>✨</div>

            {/* Navigation Buttons - Replace Navbar */}
            <div className="sticky top-4 z-40 max-w-2xl mx-auto px-4 pt-4">
                <div className="flex items-center justify-between gap-3">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-lg"
                    >
                        <ArrowLeft className="w-4 h-4 text-gray-700" />
                        <span className="font-medium text-gray-700">Back</span>
                    </button>
                    <Link
                        href="/greetings"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-zinc-950 to-black hover:from-zinc-900 hover:to-black text-amber-300 font-medium transition-colors shadow-xl"
                    >
                        <Plus size={20} absoluteStrokeWidth />
                        <span>New</span>
                    </Link>
                </div>
            </div>

            <div className="max-w-2xl mx-auto px-4 pb-8 pt-4 relative z-10">
                {/* Greeting Card */}
                <div className="animate-scale-in h-[75svh] flex items-center flex-col justify-center">
                    {/* Card */}
                    <div
                        className="relative overflow-hidden p-8  md:p-12 md:pt-4 text-white"
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 text-6xl opacity-20">❄️</div>
                        <div className="absolute bottom-4 left-4 text-6xl opacity-20">❄️</div>

                        <div className="relative z-10 text-center">
                            {/* Emoji */}
                            <div className="text-7xl md:text-8xl mb-6 animate-bounce-slow">
                                {card.emoji}
                            </div>

                            {/* Recipient */}
                            <div className="mb-4 inline-block">
                                <div className="rounded-2xl">
                                    <p className="text-3xl md:text-5xl font-bold drop-shadow-lg">
                                        {recipientName ? recipientName : "Hello Dear 🤩"}
                                    </p>
                                </div>
                            </div>

                            {/* Message */}
                            <p className="text-xl md:text-2xl font-medium leading-relaxed md:leading-tight mb-6">
                                {message}
                            </p>

                            {/* Sender */}
                            {senderName && (
                                <p className="text-xl md:text-sm flex items-center justify-center gap-2">
                                    <Heart className="w-3 h-3" />
                                    <span>{card.title} card</span>
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Card Type Badge */}
                    <div className="flex justify-center -mt-4 relative z-10">
                        <div className="px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg flex items-center gap-2">
                            <span className="text-xl">{card.emoji}</span>
                            <span className="font-medium text-[var(--foreground)]">by {senderName || "your Santa"}</span>
                        </div>
                        <span className="h-12 w-12 text-[53px] -mt-4 ml-1">😉</span>
                    </div>
                </div>

                {/* Preview Mode Buttons - Bottom Dock */}
                {isPreview && (
                    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950 dark:bg-zinc-950 rounded-t-3xl px-4 py-4 shadow-2xl max-w-2xl mx-auto">
                        <div className="max-w-4xl mx-auto grid grid-cols-4 gap-3">
                            <button
                                onClick={() => router.back()}
                                className="flex items-center justify-center gap-2 px-2 md:px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 text-gray-800 dark:text-white font-medium hover:bg-neutral-700 dark:hover:bg-neutral-700 transition-colors shadow-md"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                <span className="hidden md:block">Back</span>
                            </button>
                            <Link
                                href="/"
                                className="flex items-center justify-center gap-2 px-2 md:px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 text-gray-800 dark:text-white font-medium hover:bg-neutral-700 dark:hover:bg-neutral-700 transition-colors shadow-md"
                            >
                                <Home className="w-5 h-5" />
                                <span className="hidden md:block">Home</span>
                            </Link>
                            <button
                                onClick={handleWhatsApp}
                                className="flex items-center justify-center gap-2 px-2 md:px-4 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium transition-colors shadow-md"
                            >
                                <Share2 className="w-5 h-5" />
                                <span className="hidden md:block">Share</span>
                            </button>
                            <button
                                onClick={handleCopy}
                                className="flex items-center justify-center gap-2 px-2 md:px-4 py-3 rounded-xl bg-neutral-700 dark:bg-zinc-800 hover:bg-neutral-800 dark:hover:bg-neutral-700 text-white font-medium transition-colors shadow-md"
                            >
                                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                <span className="hidden md:block">{copied ? "Copied!" : "Copy Link"}</span>
                            </button>
                        </div>
                    </div>
                )}




                {/* Footer Message */}
                <div className="mt-30 p-8 rounded-3xl bg-black/50 backdrop-blur-sm text-center border border-white/10">
                    <div className="mb-2">
                        <p className="text-sm text-white/70">
                            🎄 Spread the Christmas joy with TrustChristmas 🎁
                        </p>
                    </div>

                    <div className="mt-0">
                        <p className="text-white font-medium mb-4">
                            Want to send your own Christmas greeting?
                        </p>
                        <Link
                            href="/greetings"
                            className="bg-amber-400 text-black hover:bg-amber-300 inline-flex px-8 py-4 rounded-full mx-auto mt-4 items-center gap-3 font-bold transition-all shadow-lg"
                        >
                            <Sparkles className="w-5 h-5" />
                            <span>Create Your Greeting</span>
                        </Link>
                    </div>
                </div>


                {/* Ad */}
                <div className="mt-[100px]">
                    <NativeAd />
                </div>


                {/* Features Promotion Section */}
                <div className="mt-12 mb-8">
                    <h2 className="text-2xl font-bold text-center text-zinc-950 mb-2">✨ Explore More Features ✨</h2>
                    <p className="text-center text-zinc-900 mb-8">Discover everything TrustChristmas has to offer!</p>

                    <div className="grid grid-cols-1 gap-6">

                        {/* Greetings - 2nd */}
                        <Link
                            href="/greetings"
                            className="group relative overflow-hidden rounded-3xl bg-zinc-900 p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all border border-zinc-800"
                        >
                            <div className="absolute top-4 right-4 text-8xl text-zinc-700 opacity-40 group-hover:opacity-60 transition-opacity">💌</div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-5xl">🎄</span>
                                    <div>
                                        <h3 className="text-2xl font-bold text-zinc-100">Send Greetings</h3>
                                        <p className="text-zinc-500 text-sm">Share joy with loved ones</p>
                                    </div>
                                </div>
                                <p className="text-zinc-300 text-base leading-relaxed">Create beautiful personalized Christmas greetings and share them with your friends and family. Spread the holiday cheer!</p>
                                <div className="mt-4 inline-flex items-center gap-2 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                                    <span className="text-sm font-medium">Create Greeting</span>
                                    <span>→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Spin & Win */}
                        <Link
                            href="/spin"
                            className="group relative overflow-hidden rounded-3xl bg-zinc-900 p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all border border-zinc-800"
                        >
                            <div className="absolute top-4 right-4 text-8xl text-zinc-700 opacity-40 group-hover:opacity-60 transition-opacity">🎡</div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-5xl">🎁</span>
                                    <div>
                                        <h3 className="text-2xl font-bold text-zinc-100">Spin & Win Gifts!</h3>
                                        <p className="text-zinc-500 text-sm">Try your luck now</p>
                                    </div>
                                </div>
                                <p className="text-zinc-300 text-base leading-relaxed">Win amazing prizes like iPhones, MacBooks, Amazon vouchers, AirPods & more! Spin the wheel and claim your Christmas gift today!</p>
                                <div className="mt-4 inline-flex items-center gap-2 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                                    <span className="text-sm font-medium">Start Spinning</span>
                                    <span>→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Games with Thumbnails - Last */}
                        <Link
                            href="/games"
                            className="group relative overflow-hidden rounded-3xl bg-zinc-900 p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all border border-zinc-800"
                        >
                            <div className="absolute top-4 right-4 text-8xl text-zinc-700 opacity-40 group-hover:opacity-60 transition-opacity">🎮</div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-5xl">🕹️</span>
                                    <div>
                                        <h3 className="text-2xl font-bold text-zinc-100">Fun Christmas Games</h3>
                                        <p className="text-zinc-500 text-sm">3 exciting games to play</p>
                                    </div>
                                </div>
                                <p className="text-zinc-300 text-base leading-relaxed mb-6">Play exciting games - Catch falling gifts, test your memory skills, and challenge your Christmas trivia knowledge!</p>

                                {/* Game Thumbnails - One per row, image on top, text below */}
                                <div className="flex flex-col gap-6">
                                    <div className="rounded-2xl overflow-hidden border-2 border-zinc-700 group-hover:border-zinc-600 transition-colors">
                                        <img src="/games/Catch_The_Presents.png" alt="Catch The Presents" className="w-full rounded-t-xl" />
                                        <div className="bg-zinc-800 px-4 py-3">
                                            <p className="text-lg text-zinc-200 font-semibold">Catch Gifts</p>
                                            <p className="text-sm text-zinc-500 mt-1">Catch falling presents before they hit the ground!</p>
                                        </div>
                                    </div>
                                    <div className="rounded-2xl overflow-hidden border-2 border-zinc-700 group-hover:border-zinc-600 transition-colors">
                                        <img src="/games/Memory_Match_Game.png" alt="Memory Match" className="w-full rounded-t-xl" />
                                        <div className="bg-zinc-800 px-4 py-3">
                                            <p className="text-lg text-zinc-200 font-semibold">Memory Match</p>
                                            <p className="text-sm text-zinc-500 mt-1">Test your memory with holiday cards!</p>
                                        </div>
                                    </div>
                                    <div className="rounded-2xl overflow-hidden border-2 border-zinc-700 group-hover:border-zinc-600 transition-colors">
                                        <img src="/games/Christmas_Trivia.png" alt="Christmas Trivia" className="w-full rounded-t-xl" />
                                        <div className="bg-zinc-800 px-4 py-3">
                                            <p className="text-lg text-zinc-200 font-semibold">Trivia Quiz</p>
                                            <p className="text-sm text-zinc-500 mt-1">How much do you know about Christmas?</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 inline-flex items-center gap-2 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                                    <span className="text-sm font-medium">Play Now</span>
                                    <span>→</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default function GreetingViewPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">🎄</div>
                    <p className="text-[var(--text-muted)]">Loading your greeting...</p>
                </div>
            </div>
        }>
            <GreetingContent />
        </Suspense>
    );
}
