"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const faqs: FAQItem[] = [
    // General
    {
        category: "General",
        question: "What is TrustNewYear Gift Carnival?",
        answer: "TrustNewYear Gift Carnival is a free New Year giveaway program by TrustNewYear Foundation. We give away thousands of exciting gifts during the celebration season to spread joy and happiness across India."
    },
    {
        category: "General",
        question: "Is this really free? What's the catch?",
        answer: "Yes, it's completely free! There's no catch. We're a registered NGO funded by donations and sponsors who want to spread New Year cheer. The only requirement is that you share our campaign with friends to help us reach more people."
    },
    {
        category: "General",
        question: "Is TrustNewYear Foundation legitimate?",
        answer: "Absolutely! We're a registered Non-Governmental Organization (NGO) in India. We've been operating since 2020 and have successfully delivered over 12,500 gifts to happy winners. You can see real testimonials from our winners on our website."
    },
    // Participation
    {
        category: "Participation",
        question: "How do I participate?",
        answer: "Simply visit our homepage, spin the New Year wheel, and win a gift! Then share your winning entry with at least 10 friends through social media. After completing the sharing, submit your email address. That's it!"
    },
    {
        category: "Participation",
        question: "Can I spin more than once?",
        answer: "Each person can only participate once per New Year season. We track entries to ensure fairness for everyone. Attempting multiple entries may result in disqualification."
    },
    {
        category: "Participation",
        question: "Why do I need to share with 10 friends?",
        answer: "Sharing helps us spread the New Year joy to more people and allows us to reach a wider audience. It also helps us verify that participants are real people genuinely interested in our campaign."
    },
    {
        category: "Participation",
        question: "What if I don't complete the sharing requirement?",
        answer: "Unfortunately, incomplete entries won't be eligible for gift delivery. The sharing requirement helps us ensure genuine participation and spread awareness about our initiative."
    },
    // Prizes
    {
        category: "Prizes",
        question: "What kind of gifts can I win?",
        answer: "Our gift pool includes electronics (iPhones, laptops, smartwatches), jewelry, gaming consoles, home appliances, designer accessories, and much more! All gifts are brand new and original."
    },
    {
        category: "Prizes",
        question: "Can I choose which gift I want?",
        answer: "No, the wheel randomly determines your gift. This ensures fairness and excitement for all participants. However, every gift in our wheel is valuable and exciting!"
    },
    {
        category: "Prizes",
        question: "Can I exchange my gift for cash?",
        answer: "No, gifts cannot be exchanged for cash or other items. All gifts are non-transferable and non-exchangeable. They're meant to bring joy to you and your family!"
    },
    // Delivery
    {
        category: "Delivery",
        question: "How long does delivery take?",
        answer: "After your entry is verified, we ship within 3-5 business days. Delivery typically takes 7-10 business days depending on your location in India. You'll receive tracking information via email."
    },
    {
        category: "Delivery",
        question: "Is delivery really free?",
        answer: "Yes! Delivery is completely free across India. We don't charge any shipping, handling, or hidden fees. The gift arrives at your doorstep at no cost to you."
    },
    {
        category: "Delivery",
        question: "What if my gift arrives damaged?",
        answer: "If your gift arrives damaged, contact us within 48 hours with photos of the damage. We'll arrange a replacement at no cost. Please keep the original packaging until the issue is resolved."
    },
    {
        category: "Delivery",
        question: "I haven't received my gift yet. What should I do?",
        answer: "If it's been more than 15 business days since verification, please contact our support team with your tracking number. We'll investigate and ensure you receive your gift."
    },
    // Account & Technical
    {
        category: "Technical",
        question: "I'm having trouble spinning the wheel. What should I do?",
        answer: "Try refreshing the page or clearing your browser cache. Make sure you have a stable internet connection. If issues persist, try using a different browser or contact our support team."
    },
    {
        category: "Technical",
        question: "How do I check my sharing progress?",
        answer: "After spinning, you'll see a progress bar showing how many shares you've completed. Each successful share will update the counter. Different platforms may have slight delays in updating."
    },
    {
        category: "Technical",
        question: "I shared but my count isn't updating. Why?",
        answer: "Sometimes there's a slight delay in tracking shares. Make sure you're using the share buttons on our platform. Shares to fake accounts or bots won't be counted."
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>("all");

    const categories = ["all", ...Array.from(new Set(faqs.map(f => f.category)))];
    const filteredFAQs = activeCategory === "all"
        ? faqs
        : faqs.filter(f => f.category === activeCategory);

    return (
        <PageLayout
            title="Frequently Asked Questions ❓"
            subtitle="Find answers to common questions about our Gift Carnival"
        >
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                            ? "bg-gradient-to-br from-amber-500 to-orange-600 text-amber-200"
                            : "bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--card-border)] hover:border-[var(--foreground)]"
                            }`}
                    >
                        {category === "all" ? "All Questions" : category}
                    </button>
                ))}
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3 mb-8">
                {filteredFAQs.map((faq, index) => (
                    <div
                        key={index}
                        className="card p-0 overflow-hidden animate-fade-in"
                        style={{ animationDelay: `${index * 30}ms` }}
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-5 text-left"
                        >
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-red-500/10 text-red-500">
                                    {faq.category}
                                </span>
                                <span className="font-semibold text-[var(--foreground)]">{faq.question}</span>
                            </div>
                            <ChevronDown
                                className={`w-5 h-5 text-[var(--text-muted)] transition-transform ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="px-5 pb-5 pt-0">
                                <div className="border-t border-[var(--card-border)] pt-4">
                                    <p className="text-[var(--text-muted)]">{faq.answer}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Still have questions? */}
            <div className="card text-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 animate-fade-in">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Still have questions? 🤔</h3>
                <p className="text-[var(--text-muted)] mb-4">
                    Can&apos;t find what you&apos;re looking for? Our support team is happy to help!
                </p>
                <Link href="/contact" className="btn-primary">
                    Contact Support
                </Link>
            </div>
        </PageLayout>
    );
}
