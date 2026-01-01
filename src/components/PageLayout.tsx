"use client";

import Link from "next/link";
import { Gift } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import NativeAd from "@/components/NativeAd";

interface PageLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
}

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
    return (
        <main className="min-h-screen bg-[var(--background)] relative overflow-x-hidden">
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
                {/* Mid-right accent */}
                <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-amber-400/20 to-orange-500/10 blur-3xl" />
                {/* Mid-left accent */}
                <div className="absolute top-[55%] -left-32 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-orange-400/15 to-amber-500/10 blur-3xl" />
                {/* Bottom-left warm glow */}
                <div className="absolute top-2/3 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-orange-500/15 to-amber-400/10 blur-3xl" />
            </div>

            <Navbar />

            {/* Page Header - only show if title exists */}
            {title && (
                <section className="py-6 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-1">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-base text-[var(--text-muted)]">{subtitle}</p>
                        )}
                    </div>
                </section>
            )}

            {/* Content */}
            <section className="py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    {children}
                </div>
            </section>

            {/* <NativeAd /> */}

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
                        <p>© 2026 TrustNewYear Foundation. All rights reserved.</p>
                        <p className="mt-2">Made with ❤️ for spreading New Year joy</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
