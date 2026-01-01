import { PageLayout } from "@/components/PageLayout";
import { Gift, Truck, AlertCircle, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Refund Policy | TrustNewYear Foundation",
    description: "Understand our gift delivery and refund policy at TrustNewYear Foundation.",
};

export default function RefundPage() {
    return (
        <PageLayout
            title="Refund Policy 📋"
            subtitle="Everything you need to know about our gift delivery policy"
        >
            {/* Key Points */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                    {
                        icon: Gift,
                        title: "Free Gifts",
                        desc: "All gifts are given completely free of charge. There are no hidden costs or fees.",
                        color: "from-amber-500 to-orange-600"
                    },
                    {
                        icon: Truck,
                        title: "Free Delivery",
                        desc: "Delivery is absolutely free across India. No shipping charges apply.",
                        color: "from-green-500 to-emerald-600"
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="card animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className={`inline-flex p-3 bg-gradient-to-br ${item.color} rounded-xl mb-4`}>
                            <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">{item.title}</h3>
                        <p className="text-[var(--text-muted)]">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="card mb-6 animate-fade-in bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
                <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-[var(--foreground)] mb-2">Important Note</h3>
                        <p className="text-[var(--text-muted)]">
                            Since all gifts are provided free of charge as part of our charitable initiative,
                            there are no &quot;refunds&quot; in the traditional sense. This policy covers gift delivery,
                            exchanges, and dispute resolution.
                        </p>
                    </div>
                </div>
            </div>

            {/* Policy Sections */}
            {[
                {
                    title: "No Purchase, No Refund",
                    content: `TrustNewYear Gift Carnival is a free giveaway program. Since participants do not pay for gifts:

• There are no refunds because there are no payments
• All gifts are given as charitable donations
• No monetary transactions are involved in receiving gifts`
                },
                {
                    title: "Gift Delivery Terms",
                    content: `Once your entry is verified:

• Gifts will be shipped within 3-5 business days
• Delivery takes 7-10 business days from shipping
• You will receive tracking information via email
• Someone must be available to receive the delivery
• We attempt delivery twice before returning the package`
                },
                {
                    title: "Damaged or Defective Items",
                    content: `If your gift arrives damaged or defective:

• Report the issue within 48 hours of delivery
• Take clear photos of the damage
• Email us at support@trustnewyear.org with your order details
• We will arrange a replacement at no cost
• Original items may need to be returned for verification`
                },
                {
                    title: "Incorrect Items",
                    content: `If you receive a different gift than shown on your winning entry:

• Contact us immediately with your order details
• Keep the incorrect item in its original packaging
• We will arrange an exchange or send the correct item
• Return shipping for incorrect items is covered by us`
                },
                {
                    title: "Non-Delivery",
                    content: `If your gift is not delivered within 15 business days:

• Contact us with your tracking number
• We will investigate with our delivery partner
• If the package is lost, we will ship a replacement
• Address issues may result in return-to-sender situations`
                },
                {
                    title: "Eligibility Issues",
                    content: `Gifts may be cancelled if:

• Sharing requirements were not completed
• False or fraudulent information was provided
• Multiple entries from the same person
• Violation of Terms and Conditions

In these cases, no replacement will be provided.`
                },
                {
                    title: "Gift Value and Substitution",
                    content: `Please note:

• Gift values shown are approximate retail values
• We reserve the right to substitute gifts of equal or greater value
• Color and model variations may occur based on availability
• All gifts are brand new and original`
                },
                {
                    title: "Limitation of Liability",
                    content: `TrustNewYear Foundation is not liable for:

• Delays caused by incorrect address information
• Customs or import issues (for international addresses if applicable)
• Force majeure events affecting delivery
• Issues arising after successful delivery`
                },
                {
                    title: "Dispute Resolution",
                    content: `If you have any concerns:

1. First, contact us at support@trustnewyear.org
2. Provide your order/entry details
3. We aim to respond within 48 hours
4. Our team will work to resolve your issue fairly

For unresolved disputes, you may escalate to our grievance officer at grievance@trustnewyear.org.`
                },
            ].map((section, index) => (
                <div
                    key={index}
                    className="card mb-4 animate-slide-up"
                    style={{ animationDelay: `${(index + 2) * 50}ms` }}
                >
                    <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">{section.title}</h2>
                    <p className="text-[var(--text-muted)] whitespace-pre-line">{section.content}</p>
                </div>
            ))}

            {/* Contact CTA */}
            <div className="card text-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 animate-fade-in mt-8">
                <div className="inline-flex p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl mb-4">
                    <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Have Questions?</h3>
                <p className="text-[var(--text-muted)] mb-4">
                    Our support team is here to help with any delivery-related concerns.
                </p>
                <Link href="/contact" className="btn-primary">
                    Contact Support
                </Link>
            </div>
        </PageLayout>
    );
}
