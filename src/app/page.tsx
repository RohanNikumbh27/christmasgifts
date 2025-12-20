"use client";

import { useState } from "react";
import Link from "next/link";
import { Gift, ChevronDown, Shield, Users, Award, WandSparkles } from "lucide-react";
import { LotteryWheel } from "@/components/LotteryWheel";
import { WinnerPopup } from "@/components/WinnerPopup";
import { TestimonialCard } from "@/components/TestimonialCard";
import { AdBanner } from "@/components/AdBanner";
import { ThemeToggle } from "@/components/ThemeToggle";
// import { PrizeShowcase } from "@/components/PrizeShowcase";
import { Gift as GiftType } from "@/data/gifts";
import { winners } from "@/data/winners";
import NativeAd from "@/components/NativeAd";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [wonGift, setWonGift] = useState<GiftType | null>(null);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  const handleWin = (gift: GiftType) => {
    setWonGift(gift);
    setShowPopup(true);
  };

  const displayedWinners = showAllTestimonials ? winners : winners.slice(0, 3);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="sticky top-0 z-40 glass border-b border-[var(--card-border)]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-green-600 flex items-center justify-center">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-[var(--foreground)]">TrustChristmas</h1>
              <p className="text-sm text-[var(--text-muted)]">Foundation</p>
            </div>
          </div> */}
          <div
            className="flex items-center gap-3"
          >
            <div className="p-2 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-[var(--foreground)]">
                TrustChristmas
              </h1>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">GlobalTrust Foundation</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-red-500 to-pink-600 border border-red-500/30 mb-6 animate-fade-in">
            <WandSparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-base font-medium text-zinc-100">Christmas Special 2025</span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
            <span className="bg-gradient-to-br from-red-500 to-pink-600 bg-clip-text text-transparent">
              Win Amazing
            </span>
            <br />
            <span className="text-[var(--foreground)]">Christmas Gifts! 🎄</span>
          </h2>

          <p className="text-xl text-[var(--text-muted)] max-w-xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            Spin the wheel and claim your Christmas gift from TrustChristmas Foundation.
            Over <strong className="text-[var(--foreground)]">10,000+ winners</strong> already!
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)]">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-base text-[var(--foreground)]">100% Genuine</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)]">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-base text-[var(--foreground)]">50K+ Participants</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)]">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-base text-[var(--foreground)]">NGO Registered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Wheel Section */}
      <section className="py-0 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <LotteryWheel onWin={handleWin} />
        </div>
      </section>

      {/* Prize Showcase - Auto shuffling */}
      {/* <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <PrizeShowcase />
        </div>
      </section> */}

      <AdBanner />

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total Gifts Given", value: "12,500+", icon: "🎁" },
              { label: "Happy Winners", value: "10,250+", icon: "😊" },
              { label: "Cities Covered", value: "150+", icon: "🏙️" },
              { label: "Gift Value", value: "₹2Cr+", icon: "💰" },
            ].map((stat, index) => (
              <div
                key={index}
                className="card text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-[var(--foreground)]">{stat.value}</div>
                <div className="text-base text-[var(--text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NativeAd />

      {/* Testimonials Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold text-[var(--foreground)] mb-2">
              🏆 Real Winners, Real Gifts
            </h3>
            <p className="text-lg text-[var(--text-muted)]">
              See what our lucky winners have to say about their Christmas gifts!
            </p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedWinners.map((winner, index) => (
              <TestimonialCard key={winner.id} winner={winner} index={index} />
            ))}
          </div>

          {/* View More Button */}
          {!showAllTestimonials && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllTestimonials(true)}
                className="btn-secondary"
              >
                <span>View More Winners</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}

          {showAllTestimonials && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllTestimonials(false)}
                className="btn-secondary"
              >
                <span>Show Less</span>
                <ChevronDown className="w-4 h-4 rotate-180" />
              </button>
            </div>
          )}
        </div>
      </section>

      <AdBanner />

      {/* How It Works */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold text-[var(--foreground)] mb-2">
              How It Works ✨
            </h3>
            <p className="text-lg text-[var(--text-muted)]">
              Get your Christmas gift in 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: 1, title: "Spin the Wheel", desc: "Click the spin button and watch the wheel decide your gift!", icon: "🎡" },
              { step: 2, title: "Share with Friends", desc: "Share the joy with 10 friends to unlock your gift", icon: "🤝" },
              { step: 3, title: "Receive Your Gift", desc: "Get your Christmas gift delivered to your doorstep!", icon: "📦" },
            ].map((item, index) => (
              <div
                key={index}
                className="card text-center relative animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
                  {item.step}
                </div>
                <div className="text-5xl mb-4 mt-4">{item.icon}</div>
                <h4 className="text-2xl font-bold text-[var(--foreground)] mb-2">{item.title}</h4>
                <p className="text-base text-[var(--text-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NativeAd />


      {/* Footer */}
      <footer className="bg-zinc-900 dark:bg-black py-12 px-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">TrustChristmas</h3>
                  <p className="text-xs text-zinc-400">GlobalTrust Foundation</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400">
                Spreading joy and happiness through our Christmas Gift Carnival. A trusted foundation bringing smiles to thousands.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="/winners" className="hover:text-white transition-colors">Winners</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 text-center text-sm text-zinc-400">
            <p>© 2025 TrustChristmas by GlobalTrust Foundation. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ for spreading Christmas joy</p>
          </div>
        </div>
      </footer>

      {/* Winner Popup */}
      {showPopup && wonGift && (
        <WinnerPopup gift={wonGift} onClose={() => setShowPopup(false)} />
      )}
    </main>
  );
}
