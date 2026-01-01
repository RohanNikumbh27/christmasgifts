import { PageLayout } from "@/components/PageLayout";
import Link from "next/link";

export const metadata = {
    title: "How It Works | TrustNewYear Foundation",
    description: "Learn how to win amazing New Year gifts from TrustNewYear Foundation in 3 simple steps.",
};

export default function HowItWorksPage() {
    return (
        <PageLayout
            title="How It Works ✨"
            subtitle="Get your New Year gift in 3 simple steps"
        >
            {/* Steps */}
            <div className="space-y-6 mb-12">
                {[
                    {
                        step: 1,
                        icon: "🎡",
                        title: "Spin the Wheel",
                        desc: "Visit our homepage and click the 'Spin Now' button to spin the magical New Year wheel. The wheel contains various exciting gifts ranging from electronics to jewelry, and everyone's a winner!",
                        tips: [
                            "Make sure you have a stable internet connection",
                            "Wait for the wheel to completely stop spinning",
                            "Your gift will be revealed with a magical animation"
                        ]
                    },
                    {
                        step: 2,
                        icon: "🤝",
                        title: "Share with Friends",
                        desc: "Once you've won your gift, share the joy with your friends and family! Share on WhatsApp, Facebook, Twitter, or copy the link. You need to share with at least 10 friends to unlock your gift.",
                        tips: [
                            "Share on multiple platforms for faster progress",
                            "Each unique share counts towards your goal",
                            "Track your progress with the share counter"
                        ]
                    },
                    {
                        step: 3,
                        icon: "📦",
                        title: "Receive Your Gift",
                        desc: "After completing the sharing requirement, submit your email address. Our team will verify your entry and contact you for delivery details. Your gift will arrive within 7-10 business days!",
                        tips: [
                            "Provide a valid email address you regularly check",
                            "Our team will contact you within 48 hours",
                            "Delivery is completely free across India"
                        ]
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="card relative animate-slide-up"
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-amber-200 font-bold text-lg shadow-lg">
                            {item.step}
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 pt-4">
                            <div className="text-6xl flex-shrink-0">{item.icon}</div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">{item.title}</h3>
                                <p className="text-[var(--text-muted)] mb-4">{item.desc}</p>
                                <div className="bg-[var(--background)] rounded-xl p-4 border border-[var(--card-border)]">
                                    <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2">💡 Tips:</h4>
                                    <ul className="space-y-1">
                                        {item.tips.map((tip, tipIndex) => (
                                            <li key={tipIndex} className="text-sm text-[var(--text-muted)] flex items-start gap-2">
                                                <span className="text-green-500">✓</span>
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6 text-center">Common Questions ❓</h2>
            <div className="space-y-4 mb-8">
                {[
                    {
                        q: "Is this really free?",
                        a: "Yes! TrustNewYear Foundation is a registered NGO that gives away gifts during the New Year season. There are no hidden charges."
                    },
                    {
                        q: "What if I don't complete sharing?",
                        a: "You need to share with at least 10 friends to claim your gift. Incomplete entries won't be eligible for gift delivery."
                    },
                    {
                        q: "How long does delivery take?",
                        a: "Delivery typically takes 7-10 business days after verification. We deliver across India for free."
                    },
                    {
                        q: "Can I spin multiple times?",
                        a: "Each person can spin once per New Year season. Make sure to complete your sharing to claim your gift!"
                    },
                ].map((faq, index) => (
                    <div
                        key={index}
                        className="card animate-fade-in"
                        style={{ animationDelay: `${(index + 3) * 100}ms` }}
                    >
                        <h4 className="font-semibold text-[var(--foreground)] mb-2">{faq.q}</h4>
                        <p className="text-sm text-[var(--text-muted)]">{faq.a}</p>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center animate-fade-in" style={{ animationDelay: "700ms" }}>
                <Link href="/" className="btn-primary text-lg">
                    🎡 Spin the Wheel Now!
                </Link>
            </div>
        </PageLayout>
    );
}
