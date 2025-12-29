import { PageLayout } from "@/components/PageLayout";

export const metadata = {
    title: "Terms & Conditions | TrustNewYear Foundation",
    description: "Read the terms and conditions for participating in TrustNewYear Gift Carnival.",
};

export default function TermsPage() {
    return (
        <PageLayout
            title="Terms & Conditions 📜"
            subtitle="Please read these terms carefully before participating"
        >
            <div className="prose prose-zinc dark:prose-invert max-w-none">
                <div className="card mb-6 animate-fade-in">
                    <p className="text-[var(--text-muted)]">
                        <strong>Last Updated:</strong> December 1, 2025
                    </p>
                </div>

                {/* Sections */}
                {[
                    {
                        title: "1. Acceptance of Terms",
                        content: `By participating in the TrustNewYear Gift Carnival ("Carnival"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not participate in the Carnival.`
                    },
                    {
                        title: "2. Eligibility",
                        content: `To participate in the Carnival, you must:
• Be a resident of India
• Be at least 18 years of age, or have parental/guardian consent if under 18
• Have a valid email address
• Have access to social media platforms for sharing

Employees of TrustNewYear Foundation and their immediate family members are not eligible to participate.`
                    },
                    {
                        title: "3. How to Participate",
                        content: `Participation involves the following steps:
1. Visit our website and spin the New Year wheel
2. Share your winning entry with at least 10 friends through social media platforms
3. Submit your valid email address
4. Wait for verification and delivery confirmation

Each participant may only enter once per New Year season. Multiple entries will result in disqualification.`
                    },
                    {
                        title: "4. Prize Information",
                        content: `• All prizes are given free of charge
• Prizes cannot be exchanged for cash or other items
• TrustNewYear Foundation reserves the right to substitute prizes of equal or greater value
• Prize delivery is subject to verification of sharing requirements
• Delivery is available only within India`
                    },
                    {
                        title: "5. Sharing Requirements",
                        content: `• Participants must share their entry with at least 10 unique friends
• Sharing through fake or bot accounts will result in immediate disqualification
• We track shares through our platform to verify authenticity
• Incomplete sharing will not be eligible for prize delivery`
                    },
                    {
                        title: "6. Verification Process",
                        content: `TrustNewYear Foundation reserves the right to verify all entries. We may:
• Contact you via email for verification
• Request additional information
• Disqualify entries that appear fraudulent
• Cancel prizes if Terms and Conditions are violated`
                    },
                    {
                        title: "7. Delivery Terms",
                        content: `• Delivery is free across India
• Delivery typically takes 7-10 business days after verification
• Incorrect address information may delay or cancel delivery
• We are not responsible for delays due to courier issues or force majeure events`
                    },
                    {
                        title: "8. Intellectual Property",
                        content: `All content on this website, including but not limited to text, graphics, logos, and images, is the property of TrustNewYear Foundation and is protected by copyright laws.`
                    },
                    {
                        title: "9. Limitation of Liability",
                        content: `TrustNewYear Foundation shall not be liable for:
• Any technical issues preventing participation
• Loss or damage arising from prize delivery
• Any indirect, incidental, or consequential damages
• Actions of third-party delivery partners`
                    },
                    {
                        title: "10. Changes to Terms",
                        content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Continued participation after changes constitutes acceptance of new terms.`
                    },
                    {
                        title: "11. Governing Law",
                        content: `These Terms and Conditions shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.`
                    },
                    {
                        title: "12. Contact Information",
                        content: `For questions about these Terms and Conditions, please contact us at:
Email: legal@trustnewyear.org
Phone: +91 9876 543 210`
                    },
                ].map((section, index) => (
                    <div
                        key={index}
                        className="card mb-4 animate-slide-up"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">{section.title}</h2>
                        <p className="text-[var(--text-muted)] whitespace-pre-line">{section.content}</p>
                    </div>
                ))}

                <div className="card text-center bg-gradient-to-br from-red-500/10 to-pink-500/10 border-red-500/20 animate-fade-in mt-8">
                    <p className="text-[var(--foreground)]">
                        By participating in the TrustNewYear Gift Carnival, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                    </p>
                </div>
            </div>
        </PageLayout>
    );
}
