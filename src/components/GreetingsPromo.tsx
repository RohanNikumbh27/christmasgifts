"use client";

import Link from "next/link";
import { Send, Sparkles } from "lucide-react";

export function GreetingsPromo() {
    return (
        <div className="my-8 animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 p-6 shadow-lg shadow-green-500/20">
                {/* Decorative elements */}
                <div className="absolute top-2 right-4 text-4xl opacity-30">🎄</div>
                <div className="absolute bottom-2 left-4 text-4xl opacity-30">❄️</div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full blur-2xl" />

                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-center sm:text-left">
                        <div className="hidden sm:flex w-12 h-12 rounded-xl bg-white/20 items-center justify-center">
                            <Send className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                                <Sparkles className="w-4 h-4 text-yellow-300" />
                                <span className="text-xs font-medium text-white/80 uppercase tracking-wide">New Feature</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white">
                                Send Christmas Greetings! 🎅
                            </h3>
                            <p className="text-sm text-white/80">
                                Create beautiful greeting cards for your friends & family
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/greetings"
                        className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
                    >
                        <span>Create Now</span>
                        <Send className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
