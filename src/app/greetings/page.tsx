"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Copy, Check, ChevronRight, Shuffle, Eye } from "lucide-react";

// ... (existing code)


import AdCashAd from "@/components/AdCashAd";
import { greetingCards } from "@/data/greetings";

export default function GreetingsPage() {
    const [step, setStep] = useState(1);
    const [selectedCard, setSelectedCard] = useState(greetingCards[0]);
    const [selectedMessageId, setSelectedMessageId] = useState(1);
    const [recipientName, setRecipientName] = useState("");
    const [senderName, setSenderName] = useState("");
    const [generatedLink, setGeneratedLink] = useState("");
    const [copied, setCopied] = useState(false);

    const shuffleMessage = () => {
        const newId = Math.floor(Math.random() * 5) + 1;
        setSelectedMessageId(newId);
    };

    const generateGreeting = () => {
        const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
        const params = new URLSearchParams({
            card: selectedCard.id,
            msg: selectedMessageId.toString(),
            ...(recipientName && { to: recipientName }),
            ...(senderName && { from: senderName }),
        });

        const link = `${baseUrl}/greetings/view?${params.toString()}`;
        setGeneratedLink(link);
        setStep(3);
    };

    const getShareableLink = () => {
        // Remove preview param if exists
        return generatedLink.replace(/&?preview=true/, '');
    };

    const getPreviewLink = () => {
        return `${generatedLink}&preview=true`;
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

    const handlePreview = () => {
        window.open(getPreviewLink(), "_blank");
    };

    const currentMessage = selectedCard.messages.find(m => m.id === selectedMessageId)?.message || "";

    return (
        <PageLayout
            title=""
            subtitle=""
        >
            {/* Custom Header: Title left, Steps right on desktop */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
                        Send Greetings 💌
                    </h2>
                    <p className="text-sm text-[var(--text-muted)]">
                        Create beautiful Christmas greetings for your loved ones
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center gap-2">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s
                                    ? "bg-gradient-to-r from-red-500 to-pink-600 text-white"
                                    : "bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-muted)]"
                                    }`}
                            >
                                {s}
                            </div>
                            {s < 3 && (
                                <div
                                    className={`w-8 h-1 mx-1 rounded ${step > s ? "bg-gradient-to-r from-red-500 to-pink-600" : "bg-[var(--card-border)]"
                                        }`}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Step 1: Choose Card */}
            {step === 1 && (
                <div className="animate-fade-in">
                    <h3 className="text-xl font-bold text-[var(--foreground)] text-center mb-6">
                        Choose Your Card Style
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                        {greetingCards.map((card) => (
                            <button
                                key={card.id}
                                onClick={() => setSelectedCard(card)}
                                className={`relative p-6 h-40 rounded-2xl border-4 transition-all hover:scale-105 bg-gradient-to-br flex flex-col items-center justify-center ${card.gradient} ${selectedCard.id === card.id
                                    ? "border-black dark:border-white"
                                    : "border-transparent hover:border-white/30"
                                    }`}
                            >
                                {/* Corner circles for selected card */}
                                {selectedCard.id === card.id && (
                                    <>
                                        <div className="absolute top-1 left-1 w-3 h-3 rounded-full bg-black dark:bg-white" />
                                        <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-black dark:bg-white" />
                                        <div className="absolute bottom-1 left-1 w-3 h-3 rounded-full bg-black dark:bg-white" />
                                        <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-black dark:bg-white" />
                                    </>
                                )}
                                <div className="text-5xl mb-3 text-center">
                                    {card.emoji}
                                </div>
                                <p className="font-semibold text-white text-center">
                                    {card.title}
                                </p>
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8">
                        <button onClick={() => setStep(2)} className="btn-primary">
                            <span>Continue</span>
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* Step 2: Personalize */}
            {step === 2 && (
                <div className="animate-fade-in max-w-xl mx-auto">
                    <h3 className="text-xl font-bold text-[var(--foreground)] text-center mb-6">
                        Personalize Your Greeting
                    </h3>

                    {/* Selected Card Preview Mini */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedCard.gradient} flex items-center justify-center`}>
                            <span className="text-2xl">{selectedCard.emoji}</span>
                        </div>
                        <span className="font-medium text-[var(--foreground)]">{selectedCard.title}</span>
                        <button onClick={() => setStep(1)} className="text-sm text-red-500 hover:underline">
                            Change
                        </button>
                    </div>

                    <div className="space-y-4">
                        {/* Recipient Name */}
                        <div>
                            <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                                Recipient&apos;s Name
                            </label>
                            <input
                                type="text"
                                value={recipientName}
                                onChange={(e) => setRecipientName(e.target.value)}
                                placeholder="e.g., Mom, John, Best Friend"
                                className="w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-red-500/50"
                            />
                        </div>

                        {/* Sender Name */}
                        <div>
                            <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                value={senderName}
                                onChange={(e) => setSenderName(e.target.value)}
                                placeholder="Your name"
                                className="w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-red-500/50"
                            />
                        </div>

                        {/* Message Selection */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-sm font-medium text-[var(--foreground)]">
                                    Message
                                </label>
                                <button
                                    onClick={shuffleMessage}
                                    className="text-sm text-red-500 hover:underline flex items-center gap-1"
                                >
                                    <Shuffle className="w-3 h-3" />
                                    Shuffle Message
                                </button>
                            </div>

                            <div
                                className={`p-4 rounded-xl bg-gradient-to-br ${selectedCard.gradient} text-white`}
                            >
                                <p className="text-lg leading-relaxed">&ldquo;{currentMessage}&rdquo;</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-3 mt-8">
                        <button onClick={() => setStep(1)} className="btn-secondary">
                            Back
                        </button>
                        <button onClick={generateGreeting} className="btn-primary">
                            <span>Generate Greeting</span>
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* Step 3: Share */}
            {step === 3 && (
                <div className="animate-fade-in max-w-xl mx-auto text-center">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                        Your Greeting is Ready!
                    </h3>
                    <p className="text-[var(--text-muted)] mb-6">
                        Share this link with {recipientName || "your loved one"}
                    </p>

                    {/* Preview Button */}
                    <button
                        onClick={handlePreview}
                        className="btn-primary w-full shadow-lg hover:shadow-xl mb-4"
                    >
                        <Eye className="w-5 h-5" />
                        <span>View, how it looks!</span>
                    </button>

                    {/* Link Preview */}
                    <div className="card !p-4 mb-6 text-left">
                        <p className="text-sm text-[var(--text-muted)] mb-2">Greeting Link:</p>
                        <div className="flex items-center gap-2">
                            <code className="flex-1 text-sm text-[var(--foreground)] bg-[var(--background)] p-3 rounded-lg overflow-x-auto">
                                {getShareableLink()}
                            </code>
                            <button
                                onClick={handleCopy}
                                className="p-3 rounded-xl bg-[var(--card-bg)] hover:bg-[var(--card-border)] transition-colors"
                            >
                                {copied ? (
                                    <Check className="w-5 h-5 text-green-500" />
                                ) : (
                                    <Copy className="w-5 h-5 text-[var(--foreground)]" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Share Buttons */}
                    <div className="space-y-3 mb-6">
                        <button
                            onClick={handleWhatsApp}
                            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium transition-colors"
                        >
                            <span>📱</span>
                            <span>Share on WhatsApp</span>
                        </button>
                        <button
                            onClick={handleCopy}
                            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] font-medium hover:bg-[var(--card-border)] transition-colors"
                        >
                            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                            <span>{copied ? "Copied!" : "Copy Link"}</span>
                        </button>
                    </div>

                    <button
                        onClick={() => {
                            setStep(1);
                            setGeneratedLink("");
                            setRecipientName("");
                            setSenderName("");
                            setSelectedMessageId(1);
                        }}
                        className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)]"
                    >
                        Create Another Greeting
                    </button>
                </div>
            )}

            {/* Ad */}
            <div className="mt-8">
                <AdCashAd zoneId="10735922" />
            </div>
        </PageLayout>
    );
}
