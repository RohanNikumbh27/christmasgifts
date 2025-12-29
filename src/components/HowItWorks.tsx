"use client";

import NativeAd from "@/components/NativeAd";

export function HowItWorks() {
    return (
        <>
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-4xl font-bold text-[var(--foreground)] mb-2">
                            How It Works ✨
                        </h3>
                        <p className="text-lg text-[var(--text-muted)]">
                            Get your New Year gift in 3 simple steps
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                step: 1,
                                title: "Spin the Wheel",
                                desc: "Click the spin button and watch the wheel decide your gift!",
                                icon: "🎡",
                            },
                            {
                                step: 2,
                                title: "Share with Friends",
                                desc: "Share the joy with 10 friends to unlock your gift",
                                icon: "🤝",
                            },
                            {
                                step: 3,
                                title: "Receive Your Gift",
                                desc: "Get your New Year gift delivered to your doorstep!",
                                icon: "📦",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="card text-center relative animate-slide-up"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold text-sm">
                                    {item.step}
                                </div>
                                <div className="text-5xl mb-4 mt-4">{item.icon}</div>
                                <h4 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-base text-[var(--text-muted)]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <NativeAd /> */}
        </>
    );
}