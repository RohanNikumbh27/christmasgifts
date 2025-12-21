"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Gift as GiftType } from "@/data/gifts";
import {
    ArrowLeft,
    Share2,
    Copy,
    Check,
    Lock,
    Unlock,
    MessageCircle,
    Twitter,
    Facebook
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import AdCashAd from "@/components/AdCashAd";

export default function SharePage() {
    const router = useRouter();
    const [gift, setGift] = useState<GiftType | null>(null);
    const [shareCount, setShareCount] = useState(0);
    const [copied, setCopied] = useState(false);
    const [email, setEmail] = useState("");
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const requiredShares = 10;

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim() && email.includes("@")) {
            setIsSubmitting(true);

            try {
                // Save email to MongoDB via API
                const response = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email.trim() }),
                });

                const data = await response.json();

                if (response.ok && data.success) {
                    // Store email in localStorage for persistence
                    localStorage.setItem("userEmail", email);
                    localStorage.setItem("emailSubmitted", "true");
                    setEmailSubmitted(true);
                } else {
                    console.error('Failed to save email:', data.error);
                    // Still allow user to proceed even if API fails
                    localStorage.setItem("userEmail", email);
                    localStorage.setItem("emailSubmitted", "true");
                    setEmailSubmitted(true);
                }
            } catch (error) {
                console.error('Error submitting email:', error);
                // Fallback to localStorage if API fails
                localStorage.setItem("userEmail", email);
                localStorage.setItem("emailSubmitted", "true");
                setEmailSubmitted(true);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    useEffect(() => {
        const storedGift = sessionStorage.getItem("wonGift");
        if (storedGift) {
            setGift(JSON.parse(storedGift));
        }

        // Restore email submission state from localStorage
        const storedEmail = localStorage.getItem("userEmail");
        const wasSubmitted = localStorage.getItem("emailSubmitted");
        if (storedEmail && wasSubmitted === "true") {
            setEmail(storedEmail);
            setEmailSubmitted(true);
        }
    }, []);

    const incrementShareCount = () => {
        // Increment share count up to the required amount
        setShareCount(prev => Math.min(prev + 1, requiredShares));
    };

    const handleShare = async (platform: string) => {
        const shareUrl = typeof window !== 'undefined' ? window.location.origin : '';
        const shareText = `🎄 I just won ${gift?.name} from TrustChristmas Foundation! Spin the wheel and win amazing Christmas gifts! 🎁`;

        // Handle copy separately - no increment
        if (platform === 'copy') {
            navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            return;
        }

        // Try Web Share API first (mobile devices)
        if (navigator.share && platform !== 'copy') {
            try {
                await navigator.share({
                    title: 'TrustChristmas Gift Carnival',
                    text: shareText,
                    url: shareUrl,
                });
                // User completed the share
                incrementShareCount();
                return;
            } catch (err) {
                // User cancelled or API not supported, fall through to popup method
                if ((err as Error).name === 'AbortError') {
                    return; // User cancelled, don't open popup
                }
            }
        }

        // Fallback to popup method for desktop
        let url = '';
        switch (platform) {
            case 'whatsapp':
                url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
                break;
            case 'twitter':
                url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
                break;
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
                break;
        }

        if (url) {
            const shareWindow = window.open(url, '_blank', 'width=600,height=400');
            const startTime = Date.now();

            // Track if user spent enough time to likely have shared
            const checkInterval = setInterval(() => {
                if (shareWindow?.closed) {
                    clearInterval(checkInterval);
                    const timeSpent = Date.now() - startTime;

                    // If user spent more than 3 seconds, they likely shared
                    if (timeSpent > 3000) {
                        incrementShareCount();
                    }
                }
            }, 500);

            // Clean up after 2 minutes
            setTimeout(() => clearInterval(checkInterval), 120000);
        }
    };

    const progress = (shareCount / requiredShares) * 100;
    const isUnlocked = shareCount >= requiredShares;

    return (
        <main className="min-h-screen bg-[var(--background)]">
            {/* Header */}
            <header className="sticky top-0 z-40 glass border-b border-[var(--card-border)]">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <button
                        onClick={() => router.push('/')}
                        className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-base">Back</span>
                    </button>
                    <ThemeToggle />
                </div>
            </header>

            <div className="max-w-2xl mx-auto px-4 py-4">
                {/* Gift Preview */}
                {gift && (
                    <div className="card flex items-center gap-4 !p-4 mb-4 animate-scale-in">
                        <div className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
                            style={{ backgroundColor: gift.color + '20' }}>
                            <span className="text-3xl">{gift.icon}</span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-[var(--text-muted)]">Your Gift</p>
                            <h2 className="text-xl font-bold text-[var(--foreground)]">
                                {gift.name}
                            </h2>
                        </div>
                    </div>
                )}

                {/* Unlock Progress */}
                <div className="card mb-4">
                    <div className="flex items-center gap-3 mb-6">
                        {isUnlocked ? (
                            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                                <Unlock className="w-6 h-6 text-green-500" />
                            </div>
                        ) : (
                            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                                <Lock className="w-6 h-6 text-red-500" />
                            </div>
                        )}
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-[var(--foreground)]">
                                {isUnlocked ? "Gift Unlocked! 🎉" : "Unlock Your Gift"}
                            </h3>
                            <p className="text-[var(--text-muted)] text-base">
                                {isUnlocked
                                    ? "Congratulations! Your gift will be delivered soon."
                                    : `Share with ${requiredShares - shareCount} more friends to unlock`
                                }
                            </p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-base text-[var(--text-muted)]">Progress</span>
                            <span className="text-base font-semibold text-[var(--foreground)]">
                                {shareCount}/{requiredShares} shares
                            </span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    {/* Progress Steps */}
                    <div className="flex justify-between">
                        {Array.from({ length: requiredShares }, (_, i) => (
                            <div
                                key={i}
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-all
                  ${i < shareCount
                                        ? 'bg-green-500 text-white'
                                        : 'bg-[var(--card-border)] text-[var(--text-muted)]'
                                    }`}
                            >
                                {i < shareCount ? <Check className="w-3 h-3" /> : i + 1}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Share Buttons */}
                {!isUnlocked && (
                    <div className="card">
                        <div className="flex items-center gap-2 mb-4">
                            <Share2 className="w-6 h-6 text-[var(--foreground)]" />
                            <h3 className="text-xl font-semibold text-[var(--foreground)]">Share Now</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => handleShare('whatsapp')}
                                className="share-btn whatsapp"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>WhatsApp</span>
                            </button>

                            <button
                                onClick={() => handleShare('facebook')}
                                className="share-btn facebook"
                            >
                                <Facebook className="w-5 h-5" />
                                <span>Facebook</span>
                            </button>

                            <button
                                onClick={() => handleShare('twitter')}
                                className="share-btn twitter"
                            >
                                <Twitter className="w-5 h-5" />
                                <span>Twitter</span>
                            </button>

                            <button
                                onClick={() => handleShare('copy')}
                                className="share-btn copy"
                            >
                                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                                <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                            </button>
                        </div>
                    </div>
                )}

                {/* Claim Gift Section (when unlocked) */}
                {isUnlocked && (
                    <div className="card text-center mb-8 bg-gradient-to-br from-red-500/10 to-pink-600/10 border-pink-500/30">
                        <div className="text-6xl mb-4">🎊</div>
                        <h3 className="text-3xl font-bold text-[var(--foreground)] mb-2">
                            Your Gift is Ready!
                        </h3>

                        {isSubmitting ? (
                            <div className="py-8">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin"></div>
                                </div>
                                <p className="text-lg text-[var(--text-muted)]">
                                    Processing your claim...
                                </p>
                            </div>
                        ) : !emailSubmitted ? (
                            <>
                                <p className="text-lg text-[var(--text-muted)] mb-6">
                                    Enter your email address to claim your gift. All further communication will happen through this email.
                                </p>
                                <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-4">
                                    <div className="flex flex-col gap-4">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email address"
                                            required
                                            className="w-full px-4 py-4 rounded-xl bg-[var(--background)] border border-[var(--card-border)] text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-lg"
                                        />
                                        <button type="submit" className="btn-primary text-lg px-8 py-4">
                                            Claim Your Gift Now
                                        </button>
                                    </div>
                                </form>
                                <p className="text-sm text-[var(--text-muted)]">
                                    📧 We&apos;ll send gift details and delivery updates to this email
                                </p>
                            </>
                        ) : (
                            <div className="animate-scale-in">
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 mb-4 mx-auto">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="text-2xl font-bold text-[var(--foreground)] mb-3">
                                    Claim Submitted! 🎉
                                </h4>
                                <div className="bg-[var(--card-bg)] rounded-2xl p-6 mb-4 border border-[var(--card-border)]">
                                    <p className="text-base text-[var(--text-muted)] mb-2">
                                        Confirmation sent to:
                                    </p>
                                    <p className="text-lg font-semibold text-[var(--foreground)] mb-4 break-all">
                                        {email}
                                    </p>
                                    <div className="h-px bg-[var(--card-border)] mb-4"></div>
                                    <div className="flex items-start gap-3 text-left">
                                        <span className="text-2xl">📦</span>
                                        <div>
                                            <p className="font-semibold text-[var(--foreground)] mb-1">What&apos;s Next?</p>
                                            <p className="text-sm text-[var(--text-muted)]">
                                                Your gift will be delivered within 7 business days. Check your inbox for tracking details!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => router.push('/')}
                                    className="btn-secondary text-base px-6 py-3"
                                >
                                    Back to Home
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Ad */}
                <AdCashAd zoneId="10735922" />

                {/* Tips */}
                <div className="card">
                    <h4 className="text-xl font-semibold text-[var(--foreground)] mb-3">💡 Quick Tips</h4>
                    <ul className="space-y-2 text-base text-[var(--text-muted)]">
                        <li className="flex items-start gap-2">
                            <span className="text-green-500">✓</span>
                            Share on multiple platforms to unlock faster
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500">✓</span>
                            You can share multiple times on the same platform
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500">✓</span>
                            Gifts are delivered within 7 business days
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500">✓</span>
                            All gifts are 100% genuine and verified
                        </li>
                    </ul>
                </div>


            </div>
        </main >
    );
}
