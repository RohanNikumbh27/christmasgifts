import { PageLayout } from "@/components/PageLayout";
import { Shield, Eye, Lock, UserCheck } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | TrustChristmas Foundation",
    description: "Learn how TrustChristmas Foundation collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
    return (
        <PageLayout
            title="Privacy Policy 🔒"
            subtitle="Your privacy is important to us"
        >
            <div className="card mb-8 animate-fade-in">
                <p className="text-[var(--text-muted)]">
                    <strong>Last Updated:</strong> December 1, 2025
                </p>
                <p className="text-[var(--text-muted)] mt-2">
                    TrustChristmas Foundation (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                    This Privacy Policy explains how we collect, use, and safeguard your information.
                </p>
            </div>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
                {[
                    { icon: Shield, title: "Secure", desc: "Data protected" },
                    { icon: Eye, title: "Transparent", desc: "Clear practices" },
                    { icon: Lock, title: "Private", desc: "No selling data" },
                    { icon: UserCheck, title: "Your Rights", desc: "Full control" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="card text-center animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <item.icon className="w-8 h-8 text-red-500 mx-auto mb-2" />
                        <h3 className="font-bold text-[var(--foreground)]">{item.title}</h3>
                        <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Sections */}
            {[
                {
                    title: "1. Information We Collect",
                    content: `We collect information that you provide directly to us, including:

**Personal Information:**
• Name and email address
• Phone number (optional)
• Delivery address (for prize winners)
• Social media sharing data

**Automatically Collected Information:**
• Device information (browser type, operating system)
• IP address and approximate location
• Website usage data and analytics
• Cookies and similar technologies`
                },
                {
                    title: "2. How We Use Your Information",
                    content: `We use the information we collect to:

• Process your participation in the Gift Carnival
• Verify sharing requirements
• Deliver prizes to winners
• Send confirmation and update emails
• Improve our website and services
• Prevent fraud and abuse
• Comply with legal obligations`
                },
                {
                    title: "3. Information Sharing",
                    content: `We do not sell, trade, or rent your personal information. We may share your information with:

• **Delivery Partners:** To ship your prizes
• **Service Providers:** For website hosting and analytics
• **Legal Authorities:** When required by law

All third parties are bound by confidentiality agreements.`
                },
                {
                    title: "4. Cookies and Tracking",
                    content: `We use cookies and similar technologies to:

• Remember your preferences
• Track website usage for analytics
• Improve user experience
• Monitor sharing activity

You can control cookies through your browser settings. Disabling cookies may affect some website functionality.`
                },
                {
                    title: "5. Data Security",
                    content: `We implement appropriate security measures to protect your information:

• SSL/TLS encryption for data transmission
• Secure servers with access controls
• Regular security audits
• Employee training on data protection

However, no internet transmission is 100% secure. We cannot guarantee absolute security.`
                },
                {
                    title: "6. Data Retention",
                    content: `We retain your personal information for:

• **Active Participants:** Duration of the Carnival season plus 6 months
• **Winners:** 2 years for delivery and support purposes
• **Analytics Data:** 1 year in anonymized form

You may request deletion of your data at any time.`
                },
                {
                    title: "7. Your Rights",
                    content: `You have the right to:

• **Access:** Request a copy of your personal data
• **Correction:** Update or correct your information
• **Deletion:** Request deletion of your data
• **Opt-out:** Unsubscribe from marketing communications
• **Portability:** Receive your data in a portable format

Contact us at privacy@trustchristmas.org to exercise these rights.`
                },
                {
                    title: "8. Children's Privacy",
                    content: `Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately.`
                },
                {
                    title: "9. Changes to Privacy Policy",
                    content: `We may update this Privacy Policy periodically. We will notify you of significant changes by:

• Posting the new policy on our website
• Updating the "Last Updated" date
• Sending email notifications for material changes

Continued use after changes constitutes acceptance of the updated policy.`
                },
                {
                    title: "10. Contact Us",
                    content: `For privacy-related questions or concerns:

**Email:** privacy@trustchristmas.org
**Phone:** +91 9876 543 210
**Address:** TrustChristmas Foundation, 123 Christmas Lane, Mumbai 400001`
                },
            ].map((section, index) => (
                <div
                    key={index}
                    className="card mb-4 animate-slide-up"
                    style={{ animationDelay: `${(index + 4) * 50}ms` }}
                >
                    <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">{section.title}</h2>
                    <div className="text-[var(--text-muted)] whitespace-pre-line [&_strong]:text-[var(--foreground)]">
                        {section.content.split(/(\*\*.*?\*\*)/).map((part, i) =>
                            part.startsWith('**') && part.endsWith('**')
                                ? <strong key={i}>{part.slice(2, -2)}</strong>
                                : part
                        )}
                    </div>
                </div>
            ))}
        </PageLayout>
    );
}
