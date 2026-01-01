"use client";

import { useState } from "react";
import Link from "next/link";
import { Gift, ChevronDown, Shield, Users, Award, WandSparkles } from "lucide-react";
import { LotteryWheel } from "@/components/LotteryWheel";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Navbar } from "@/components/Navbar";
import { winners } from "@/data/winners";
import NativeAd from "@/components/NativeAd";
import { HowItWorks } from "@/components/HowItWorks";
import { GreetingsPromo } from "@/components/GreetingsPromo";

export default function Home() {
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  const displayedWinners = showAllTestimonials ? winners : winners.slice(0, 3);

  return (
    <main className="min-h-screen bg-[var(--background)] overflow-x-hidden relative">
      {/* Ambient Glare Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-left amber glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-400/30 to-orange-500/15 blur-3xl" />
        {/* Top-right orange glow */}
        <div className="absolute -top-20 -right-32 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-orange-400/25 to-amber-500/15 blur-3xl" />
        {/* Top-center subtle flare */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-b from-amber-300/20 to-transparent blur-3xl" />
        {/* Center-right subtle flare */}
        <div className="absolute top-1/4 -right-20 w-[350px] h-[350px] rounded-full bg-gradient-to-l from-orange-500/20 to-amber-400/10 blur-3xl" />
        {/* Center-left warm accent */}
        <div className="absolute top-1/3 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-amber-500/15 to-orange-400/10 blur-2xl" />
        {/* Mid-page center glow (behind wheel) */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-b from-orange-400/15 via-amber-400/10 to-transparent blur-3xl" />
        {/* Mid-right accent */}
        <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-amber-400/20 to-orange-500/10 blur-3xl" />
        {/* Mid-left accent */}
        <div className="absolute top-[55%] -left-32 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-orange-400/15 to-amber-500/10 blur-3xl" />
        {/* Bottom-left warm glow */}
        <div className="absolute top-2/3 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-orange-500/15 to-amber-400/10 blur-3xl" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="py-8 md:pb-12 md:pt-5 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 border border-amber-500/30 mb-6 animate-fade-in">
            <WandSparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-base font-medium text-amber-800">New Year Special 2026</span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
            <span className="bg-gradient-to-br from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Win Amazing
            </span>
            <br />
            <span className="text-[var(--foreground)]">New Year Gifts! 🎉</span>
          </h2>

          <p className="text-xl text-[var(--text-muted)] max-w-xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            Spin the wheel and claim your New Year gift from TrustNewYear Foundation.
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
          <LotteryWheel />
        </div>
      </section>

      <NativeAd />

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

      {/* <NativeAd /> */}

      {/* Testimonials Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold text-[var(--foreground)] mb-2">
              🏆 Real Winners, Real Gifts
            </h3>
            <p className="text-lg text-[var(--text-muted)]">
              See what our lucky winners have to say about their New Year gifts!
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
              <Link href="/winners" className="btn-secondary inline-flex">
                <span>View More Winners</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
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

      {/* <NativeAd /> */}

      {/* Greetings Promo */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <GreetingsPromo />
        </div>
      </section>

      <HowItWorks />


      {/* Footer */}
      <footer className="bg-zinc-900 dark:bg-black py-12 px-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">TrustNewYear</h3>
                  <p className="text-xs text-zinc-400">GlobalTrust Foundation</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400">
                Spreading joy and happiness through our New Year Gift Carnival 2026. A trusted foundation bringing smiles to thousands.
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
            <p>© 2026 TrustNewYear by GlobalTrust Foundation. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ for spreading New Year joy</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

