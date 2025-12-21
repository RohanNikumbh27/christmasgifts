import { PageLayout } from "@/components/PageLayout";
import { TestimonialCard } from "@/components/TestimonialCard";
import { winners } from "@/data/winners";
import Link from "next/link";
import NativeAd from "@/components/NativeAd";

export const metadata = {
    title: "Winners | TrustChristmas Foundation",
    description: "See real winners who have received amazing Christmas gifts from TrustChristmas Foundation.",
};

export default function WinnersPage() {
    return (
        <PageLayout
            title="Our Winners 🏆"
            subtitle="Real people, real gifts, real happiness!"
        >
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                    { icon: "🎁", value: "12,500+", label: "Gifts Given" },
                    { icon: "😊", value: "10,250+", label: "Happy Winners" },
                    { icon: "🏙️", value: "150+", label: "Cities" },
                    { icon: "⭐", value: "4.9/5", label: "Rating" },
                ].map((stat, index) => (
                    <div
                        key={index}
                        className="card text-center animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="text-3xl mb-2">{stat.icon}</div>
                        <div className="text-2xl font-bold text-[var(--foreground)]">{stat.value}</div>
                        <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Gift Categories */}
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6 text-center">Gifts We&apos;ve Given 🎄</h2>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {[
                    "📱 iPhones", "💻 Laptops", "⌚ Smartwatches",
                    "🎧 Headphones", "🎮 Gaming", "💎 Jewelry",
                    "👜 Designer Bags", "📸 Cameras", "🏠 Home Appliances"
                ].map((gift, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-sm text-[var(--foreground)] animate-fade-in"
                        style={{ animationDelay: `${(index + 4) * 50}ms` }}
                    >
                        {gift}
                    </span>
                ))}
            </div>

            {/* Winners Grid */}
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6 text-center">What Winners Say 💬</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {winners.map((winner, index) => (
                    <TestimonialCard key={winner.id} winner={winner} index={index} />
                ))}
            </div>

            {/* CTA */}
            <div className="card text-center bg-gradient-to-br from-red-500/10 to-pink-500/10 border-red-500/20 animate-fade-in mt-16">
                <NativeAd />
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">Want to be Our Next Winner? 🌟</h3>
                <p className="text-[var(--text-muted)] mb-6">
                    Join thousands of happy winners this Christmas season!
                </p>
                <Link href="/" className="btn-primary text-lg">
                    🎡 Spin & Win Now!
                </Link>
            </div>
        </PageLayout>
    );
}
