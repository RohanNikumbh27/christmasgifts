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
    const senderName = searchParams.get("from") || "your friend";
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
        const text = encodeURIComponent(`🥳 ${senderName} has sent you New Year greetings! ✨🎉\n\nOpen to view your special message:\n${shareLink}`);
        window.open(`https://wa.me/?text=${text}`, "_blank");
    };

    return (
        <main className={`h-dvh bg-gradient-to-br ${card.gradient} relative overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
            {/* Enhanced Animations */}
            <style jsx>{`
                @keyframes confetti-fall {
                    0% { transform: translateY(-100vh) rotate(0deg); opacity: 0; }
                    5% { opacity: 1; }
                    100% { transform: translateY(100vh) rotate(720deg); opacity: 0.5; }
                }
                @keyframes confetti-left-burst {
                    0% { transform: translate(-10%, -10%) rotate(0deg); opacity: 0; }
                    5% { opacity: 1; }
                    100% { transform: translate(50vw, 100vh) rotate(720deg); opacity: 0; }
                }
                @keyframes confetti-right-burst {
                    0% { transform: translate(10%, -10%) rotate(0deg); opacity: 0; }
                    5% { opacity: 1; }
                    100% { transform: translate(-50vw, 100vh) rotate(-720deg); opacity: 0; }
                }
                @keyframes float-orb {
                    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
                    25% { transform: translate(20px, -30px) scale(1.1); opacity: 0.6; }
                    50% { transform: translate(-10px, -50px) scale(0.9); opacity: 0.5; }
                    75% { transform: translate(-25px, -20px) scale(1.05); opacity: 0.4; }
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 40px rgba(255,255,255,0.2), 0 0 80px rgba(255,255,255,0.1); }
                    50% { box-shadow: 0 0 60px rgba(255,255,255,0.3), 0 0 120px rgba(255,255,255,0.2); }
                }
                @keyframes border-glow {
                    0%, 100% { border-color: rgba(255,255,255,0.3); }
                    50% { border-color: rgba(255,255,255,0.6); }
                }
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                @keyframes sparkle {
                    0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
                    50% { opacity: 1; transform: scale(1) rotate(180deg); }
                }
                @keyframes float-gentle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes emoji-entrance {
                    0% { transform: scale(0) rotate(-180deg); opacity: 0; }
                    60% { transform: scale(1.2) rotate(10deg); }
                    100% { transform: scale(1) rotate(0deg); opacity: 1; }
                }
                @keyframes text-reveal {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .confetti { position: fixed; width: 10px; height: 10px; z-index: 1; animation: confetti-fall linear infinite both; }
                .confetti-left { position: fixed; width: 10px; height: 10px; z-index: 1; left: 0; top: 0; animation: confetti-left-burst linear infinite both; }
                .confetti-right { position: fixed; width: 10px; height: 10px; z-index: 1; right: 0; top: 0; animation: confetti-right-burst linear infinite both; }
                .float-orb { animation: float-orb 8s ease-in-out infinite; }
                .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
                .border-glow { animation: border-glow 2s ease-in-out infinite; }
                .shimmer-text { background: linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.8) 100%); background-size: 200% 100%; -webkit-background-clip: text; background-clip: text; animation: shimmer 3s linear infinite; }
                .float-gentle { animation: float-gentle 4s ease-in-out infinite; }
                .emoji-entrance { animation: emoji-entrance 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
                .text-reveal { animation: text-reveal 0.6s ease-out forwards; }
            `}</style>

            {/* Floating Orbs Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="float-orb absolute top-[10%] left-[10%] w-32 h-32 rounded-full bg-white/20" style={{ animationDelay: '0s' }} />
                <div className="float-orb absolute top-[60%] right-[15%] w-48 h-48 rounded-full bg-white/15" style={{ animationDelay: '2s' }} />
                <div className="float-orb absolute top-[30%] right-[5%] w-24 h-24 rounded-full bg-white/25" style={{ animationDelay: '4s' }} />
                <div className="float-orb absolute bottom-[20%] left-[20%] w-40 h-40 rounded-full bg-white/10" style={{ animationDelay: '1s' }} />
                <div className="float-orb absolute top-[50%] left-[50%] w-64 h-64 rounded-full bg-white/10" style={{ animationDelay: '3s' }} />
            </div>

            {/* Sparkle Effects */}
            {showConfetti && Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={`sparkle-${i}`}
                    className="fixed text-2xl pointer-events-none z-0"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `sparkle ${2 + Math.random() * 2}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 3}s`,
                    }}
                >
                    ✦
                </div>
            ))}

            {/* Confetti Particles - Falling */}
            {showConfetti && Array.from({ length: 50 }).map((_, i) => (
                <div
                    key={i}
                    className="confetti"
                    style={{
                        left: `${Math.random() * 100}%`,
                        backgroundColor: ['#fbbf24', '#f59e0b', '#ffffff', '#fcd34d', '#fde68a', '#fb923c', '#fdba74'][i % 7],
                        width: `${Math.random() * 8 + 4}px`,
                        height: `${Math.random() * 8 + 4}px`,
                        animationDuration: `${Math.random() * 3 + 3}s`,
                        animationDelay: `${Math.random() * 5}s`,
                        borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                    }}
                />
            ))}

            {/* Confetti Burst from Left */}
            {showConfetti && Array.from({ length: 25 }).map((_, i) => (
                <div
                    key={`left-${i}`}
                    className="confetti-left"
                    style={{
                        top: `${Math.random() * 30}%`,
                        backgroundColor: ['#fbbf24', '#f59e0b', '#ffffff', '#fcd34d', '#fde68a', '#fb923c', '#fdba74'][i % 7],
                        width: `${Math.random() * 10 + 6}px`,
                        height: `${Math.random() * 10 + 6}px`,
                        animationDuration: `${Math.random() * 2 + 2}s`,
                        animationDelay: `${Math.random() * 3}s`,
                        borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                    }}
                />
            ))}

            {/* Confetti Burst from Right */}
            {showConfetti && Array.from({ length: 25 }).map((_, i) => (
                <div
                    key={`right-${i}`}
                    className="confetti-right"
                    style={{
                        top: `${Math.random() * 30}%`,
                        backgroundColor: ['#fbbf24', '#f59e0b', '#ffffff', '#fcd34d', '#fde68a', '#fb923c', '#fdba74'][i % 7],
                        width: `${Math.random() * 10 + 6}px`,
                        height: `${Math.random() * 10 + 6}px`,
                        animationDuration: `${Math.random() * 2 + 2}s`,
                        animationDelay: `${Math.random() * 3}s`,
                        borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                    }}
                />
            ))}

            {/* Decorative Corner Icons - Enhanced */}
            <div className="fixed top-6 left-6 text-4xl md:text-5xl z-0 opacity-80" style={{ animation: 'sparkle 2s ease-in-out infinite' }}>✨</div>
            <div className="fixed top-6 right-6 text-4xl md:text-5xl z-0 opacity-80" style={{ animation: 'sparkle 2s ease-in-out infinite', animationDelay: '0.5s' }}>⭐</div>
            <div className="fixed bottom-6 left-6 text-4xl md:text-5xl z-0 opacity-80" style={{ animation: 'sparkle 2s ease-in-out infinite', animationDelay: '1s' }}>🌟</div>
            <div className="fixed bottom-6 right-6 text-4xl md:text-5xl z-0 opacity-80" style={{ animation: 'sparkle 2s ease-in-out infinite', animationDelay: '1.5s' }}>✨</div>

            {/* Navigation Buttons */}
            <div className="sticky top-4 z-40 max-w-2xl mx-auto px-4 pt-4">
                <div className="flex items-center justify-between gap-3">
                    <button
                        onClick={() => {
                            if (window.history.length > 1) {
                                router.back();
                            } else {
                                router.push('/greetings');
                            }
                        }}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/90 hover:bg-white transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <ArrowLeft className="w-4 h-4 text-gray-700" />
                        <span className="font-semibold text-sm tracking-wide text-gray-700">Back</span>
                    </button>
                    <Link
                        href="/greetings"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-zinc-900 to-black hover:from-zinc-800 hover:to-zinc-900 text-amber-300 font-semibold transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                        <Plus size={18} />
                        <span>Create yours</span>
                    </Link>
                </div>
            </div>

            <div className="max-w-2xl mx-auto px-4 pb-8 pt-16 relative z-10">
                {/* Greeting Card - Enhanced */}
                <div className="float-gentle min-h-[65svh] flex items-center flex-col justify-center">
                    {/* Main Card Container with Glassmorphism */}
                    <div className="relative w-full max-w-xl">
                        {/* Glow Ring Behind Card - lighter for performance */}
                        <div className="absolute -inset-2 rounded-[36px] bg-white/15 opacity-60" />

                        {/* Card */} {/* backdrop-blur-sm */}
                        <div className="relative overflow-hidden p-8 md:p-10 rounded-3xl bg-white/20 border-2 border-white/40 shadow-2xl border-glow">
                            {/* Shimmer Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ animation: 'shimmer 4s linear infinite', backgroundSize: '200% 100%' }} />

                            {/* Inner Decorative Corners */}
                            <div className="absolute top-3 left-3 text-3xl opacity-30">✧</div>
                            <div className="absolute top-3 right-3 text-3xl opacity-30">✧</div>
                            <div className="absolute bottom-3 left-3 text-3xl opacity-30">✧</div>
                            <div className="absolute bottom-3 right-3 text-3xl opacity-30">✧</div>

                            <div className="relative z-10 text-center text-white">
                                {/* Emoji */}
                                <div className="relative inline-block mb-6">
                                    <div className="text-8xl md:text-9xl emoji-entrance">{card.emoji}</div>
                                </div>

                                {/* Recipient Name */}
                                <div className="text-reveal mb-6" style={{ animationDelay: '0.3s' }}>
                                    <p className="text-4xl md:text-5xl font-black tracking-tight drop-shadow-2xl leading-tight">
                                        {recipientName ? (
                                            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text">
                                                {recipientName}
                                            </span>
                                        ) : (
                                            <span>Hello Dear 🤩</span>
                                        )}
                                    </p>
                                    <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full" />
                                </div>

                                {/* Message Box */}
                                <div
                                    className="text-reveal mb-6 p-6 md:p-8 rounded-2xl bg-white/25 border border-white/30 shadow-lg relative overflow-hidden"
                                    style={{ animationDelay: '0.5s' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
                                    <p className="text-lg md:text-xl font-medium leading-relaxed tracking-wide relative z-10">
                                        &ldquo;{message}&rdquo;
                                    </p>
                                </div>

                                {/* Sender Info */}
                                <div className="text-reveal" style={{ animationDelay: '0.7s' }}>
                                    <p className="text-sm md:text-base flex items-center justify-center gap-2 opacity-90">
                                        <Heart className="w-4 h-4 fill-current" />
                                        <span className="font-medium">{card.title} card</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sender Badge - Enhanced */}
                    <div className="text-reveal mt-6" style={{ animationDelay: '0.9s' }}>
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/95 shadow-xl border border-white/50">
                            <span className="text-2xl">{card.emoji}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">From</span>
                                <span className="font-bold text-gray-800">{senderName || "your friend"} 🌟</span>
                            </div>
                        </div>
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
                <div className="mt-30 p-8 md:p-10 rounded-3xl bg-white/20 backdrop-blur-sm text-center border border-white/10">
                    <div className="mb-3">
                        <p className="text-base tracking-wide text-black/80">
                            🎉 Spread the New Year joy with TrustNewYear 🎁
                        </p>
                    </div>

                    <div className="mt-4">
                        <p className="text-lg md:text-xl text-black font-semibold mb-5 tracking-wide">
                            Want to send your own New Year greeting?
                        </p>
                        <Link
                            href="/greetings"
                            className="bg-amber-400 text-black hover:bg-zinc-900 hover:text-white inline-flex px-8 py-4 rounded-full mx-auto mt-4 items-center gap-3 font-bold text-base tracking-wide transition-all shadow-lg hover:shadow-xl hover:scale-105"
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
                <div className="mt-16 mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-zinc-950 mb-3 tracking-tight">✨ Explore More Features ✨</h2>
                    <p className="text-center text-zinc-700 text-lg mb-10 tracking-wide">Discover everything TrustNewYear has to offer!</p>

                    <div className="grid grid-cols-1 gap-6">

                        {/* Greetings - 2nd */}
                        <Link
                            href="/greetings"
                            className="group relative overflow-hidden rounded-3xl bg-zinc-900 p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all border border-zinc-800"
                        >
                            <div className="absolute top-4 right-4 text-8xl text-zinc-700 opacity-40 group-hover:opacity-60 transition-opacity">💌</div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-5xl">🎉</span>
                                    <div>
                                        <h3 className="text-2xl font-bold text-zinc-100">Send Greetings</h3>
                                        <p className="text-zinc-500 text-sm">Share joy with loved ones</p>
                                    </div>
                                </div>
                                <p className="text-zinc-300 text-base leading-relaxed">Create beautiful personalized New Year greetings and share them with your friends and family. Spread the celebration!</p>
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
                                <p className="text-zinc-300 text-base leading-relaxed">Win amazing prizes like iPhones, MacBooks, Amazon vouchers, AirPods & more! Spin the wheel and claim your New Year gift today!</p>
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
                                        <h3 className="text-2xl font-bold text-zinc-100">Fun New Year Games</h3>
                                        <p className="text-zinc-500 text-sm">3 exciting games to play</p>
                                    </div>
                                </div>
                                <p className="text-zinc-300 text-base leading-relaxed mb-6">Play exciting games - Catch falling gifts, test your memory skills, and challenge your New Year trivia knowledge!</p>

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
                                        <img src="/games/Trivia.png" alt="New Year Trivia" className="w-full rounded-t-xl" />
                                        <div className="bg-zinc-800 px-4 py-3">
                                            <p className="text-lg text-zinc-200 font-semibold">Trivia Quiz</p>
                                            <p className="text-sm text-zinc-500 mt-1">How much do you know about New Year traditions?</p>
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
                    <div className="text-6xl mb-4 animate-bounce">🎉</div>
                    <p className="text-[var(--text-muted)]">Loading your greeting...</p>
                </div>
            </div>
        }>
            <GreetingContent />
        </Suspense>
    );
}
