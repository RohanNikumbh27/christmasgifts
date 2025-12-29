import { PageLayout } from "@/components/PageLayout";
import { Shield, Users, Award, Heart, Target, Star } from "lucide-react";

export const metadata = {
    title: "About Us | TrustNewYear Foundation",
    description: "Learn about TrustNewYear Foundation - our mission to spread joy and happiness through New Year gifts.",
};

export default function AboutPage() {
    return (
        <PageLayout
            title="About TrustNewYear 🎉"
            subtitle="Spreading joy and happiness through our New Year Gift Carnival 2026"
        >
            {/* Mission Section */}
            <div className="card mb-8 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl">
                        <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--foreground)]">Our Mission</h2>
                </div>
                <p className="text-[var(--text-muted)] leading-relaxed">
                    At TrustNewYear Foundation, we believe that the magic of New Year should be experienced by everyone.
                    Our mission is to spread joy and happiness by giving amazing gifts to people all around India during
                    the festive season. We&apos;ve been making New Year special since 2020, and we&apos;ve touched the lives
                    of over 10,000+ families.
                </p>
            </div>

            {/* Vision Section */}
            <div className="card mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl">
                        <Star className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--foreground)]">Our Vision</h2>
                </div>
                <p className="text-[var(--text-muted)] leading-relaxed">
                    We envision a world where the spirit of giving transcends boundaries. Our goal is to become
                    the largest New Year gift-giving initiative in India, reaching every corner of the nation
                    with smiles and joy. By 2030, we aim to gift over 1 million families.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                    { icon: "🎁", value: "12,500+", label: "Gifts Given" },
                    { icon: "😊", value: "10,250+", label: "Happy Winners" },
                    { icon: "🏙️", value: "150+", label: "Cities Covered" },
                    { icon: "💰", value: "₹2Cr+", label: "Gift Value" },
                ].map((stat, index) => (
                    <div
                        key={index}
                        className="card text-center animate-slide-up"
                        style={{ animationDelay: `${(index + 2) * 100}ms` }}
                    >
                        <div className="text-3xl mb-2">{stat.icon}</div>
                        <div className="text-2xl font-bold text-[var(--foreground)]">{stat.value}</div>
                        <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Values Section */}
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6 text-center">Our Core Values ✨</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                    {
                        icon: Shield,
                        title: "Trust & Transparency",
                        desc: "We are a registered NGO with complete transparency in our operations.",
                        color: "from-green-500 to-emerald-600"
                    },
                    {
                        icon: Users,
                        title: "Community First",
                        desc: "Every gift we give strengthens our community bonds and spreads happiness.",
                        color: "from-blue-500 to-cyan-600"
                    },
                    {
                        icon: Heart,
                        title: "Genuine Care",
                        desc: "We genuinely care about making every winner&apos;s New Year memorable.",
                        color: "from-red-500 to-pink-600"
                    },
                ].map((value, index) => (
                    <div
                        key={index}
                        className="card text-center animate-slide-up"
                        style={{ animationDelay: `${(index + 6) * 100}ms` }}
                    >
                        <div className={`inline-flex p-3 bg-gradient-to-br ${value.color} rounded-xl mb-4`}>
                            <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">{value.title}</h3>
                        <p className="text-sm text-[var(--text-muted)]">{value.desc}</p>
                    </div>
                ))}
            </div>

            {/* Trust Badges */}
            <div className="card text-center animate-fade-in" style={{ animationDelay: "900ms" }}>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Why Trust Us?</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--card-border)]">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-[var(--foreground)]">NGO Registered</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--card-border)]">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-[var(--foreground)]">5+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--card-border)]">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-[var(--foreground)]">10,000+ Winners</span>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
