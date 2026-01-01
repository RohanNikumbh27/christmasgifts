"use client";

import Link from "next/link";
import { Gift } from "lucide-react";

export function Footer() {
    return (
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
    );
}
