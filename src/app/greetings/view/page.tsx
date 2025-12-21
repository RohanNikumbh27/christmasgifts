"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Gift, Sparkles, Heart, ArrowLeft, Home, Share2, Copy, Check } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getCardById, greetingCards } from "@/data/greetings";
import AdCashAd from "@/components/AdCashAd";
import { Suspense, useState } from "react";

function GreetingContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [copied, setCopied] = useState(false);

    const cardId = searchParams.get("card") || "classic";
    const msgParam = searchParams.get("msg") || "1";
    const recipientName = searchParams.get("to") || "";
    const senderName = searchParams.get("from") || "";
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
        <main className="min-h-screen bg-[var(--background)]">
            {/* Header */}
            <header className="sticky top-0 z-40 glass border-b border-[var(--card-border)]">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl">
                            <Gift className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="font-bold text-[var(--foreground)]">TrustChristmas</h1>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400">GlobalTrust Foundation</p>
                        </div>
                    </Link>
                    <ThemeToggle />
                </div>
            </header>

            <div className="max-w-2xl mx-auto px-4 py-12">
                {/* Greeting Card */}
                <div className="animate-scale-in">
                    {/* Card */}
                    <div
                        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.gradient} p-8 md:p-12 text-white shadow-2xl`}
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
                            {recipientName && (
                                <p className="text-xl md:text-2xl mb-4 opacity-90">
                                    Dear {recipientName},
                                </p>
                            )}

                            {/* Message */}
                            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                                {message}
                            </p>

                            {/* Sender */}
                            {senderName && (
                                <p className="text-xl md:text-2xl flex items-center justify-center gap-2">
                                    <Heart className="w-5 h-5" />
                                    <span>From {senderName}</span>
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Card Type Badge */}
                    <div className="flex justify-center -mt-4 relative z-10">
                        <div className="px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg flex items-center gap-2">
                            <span className="text-xl">{card.emoji}</span>
                            <span className="font-medium text-[var(--foreground)]">{card.title}</span>
                        </div>
                    </div>
                </div>

                {/* Preview Mode Buttons */}
                {isPreview && (
                    <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] font-medium hover:bg-[var(--card-border)] transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back</span>
                        </button>
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] font-medium hover:bg-[var(--card-border)] transition-colors"
                        >
                            <Home className="w-4 h-4" />
                            <span>Home</span>
                        </Link>
                        <button
                            onClick={handleWhatsApp}
                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium transition-colors"
                        >
                            <Share2 className="w-4 h-4" />
                            <span>Share</span>
                        </button>
                        <button
                            onClick={handleCopy}
                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 text-white font-medium transition-colors"
                        >
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            <span>{copied ? "Copied!" : "Copy Link"}</span>
                        </button>
                    </div>
                )}

                {/* Ad */}
                <div className="mt-8">
                    <AdCashAd zoneId="10735922" />
                </div>

                {/* CTA for non-preview mode */}
                {!isPreview && (
                    <div className="mt-8 text-center">
                        <p className="text-[var(--text-muted)] mb-4">
                            Want to send your own Christmas greeting?
                        </p>
                        <Link
                            href="/greetings"
                            className="btn-primary inline-flex"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Create Your Greeting</span>
                        </Link>
                    </div>
                )}

                {/* Footer Message */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-[var(--text-muted)]">
                        🎄 Spread the Christmas joy with TrustChristmas 🎁
                    </p>
                </div>
            </div>
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
