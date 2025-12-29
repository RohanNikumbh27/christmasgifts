"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <PageLayout
            title="Contact Us 📬"
            subtitle="We'd love to hear from you!"
        >
            <div className="grid lg:grid-cols-5 gap-6">
                {/* Contact Info - Left Column */}
                <div className="lg:col-span-2 space-y-4">
                    {/* Get in Touch Card */}
                    <div className="card animate-slide-up">
                        <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">Get in Touch</h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="p-2.5 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex-shrink-0">
                                    <Mail className="w-4 h-4 text-white" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-semibold text-sm text-[var(--foreground)]">Email</h4>
                                    <p className="text-sm text-[var(--text-muted)] truncate">support@trustnewyear.org</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2.5 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex-shrink-0">
                                    <Phone className="w-4 h-4 text-white" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-semibold text-sm text-[var(--foreground)]">Phone</h4>
                                    <p className="text-sm text-[var(--text-muted)]">+91 9876 543 210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2.5 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex-shrink-0">
                                    <MapPin className="w-4 h-4 text-white" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-semibold text-sm text-[var(--foreground)]">Address</h4>
                                    <p className="text-sm text-[var(--text-muted)]">
                                        123, Celebration Lane<br />
                                        Mumbai, MH 400001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2.5 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex-shrink-0">
                                    <Clock className="w-4 h-4 text-white" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-semibold text-sm text-[var(--foreground)]">Support Hours</h4>
                                    <p className="text-sm text-[var(--text-muted)]">Mon-Sat, 9AM-6PM IST</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links Card */}
                    <div className="card animate-slide-up" style={{ animationDelay: "100ms" }}>
                        <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">Follow Us</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                { name: "Facebook", icon: Facebook, color: "hover:bg-blue-600 hover:text-white hover:border-blue-600" },
                                { name: "Twitter", icon: Twitter, color: "hover:bg-black hover:text-white hover:border-black" },
                                { name: "Instagram", icon: Instagram, color: "hover:bg-pink-600 hover:text-white hover:border-pink-600" },
                                { name: "YouTube", icon: Youtube, color: "hover:bg-red-600 hover:text-white hover:border-red-600" },
                            ].map((social, index) => (
                                <button
                                    key={index}
                                    className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--card-border)] text-[var(--foreground)] transition-all duration-200 ${social.color}`}
                                >
                                    <social.icon className="w-4 h-4" />
                                    <span className="text-sm font-medium">{social.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form - Right Column */}
                <div className="lg:col-span-3">
                    <div className="card h-full animate-slide-up" style={{ animationDelay: "150ms" }}>
                        {submitted ? (
                            <div className="text-center py-8">
                                <div className="inline-flex p-4 bg-green-500/20 rounded-full mb-4">
                                    <CheckCircle className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Message Sent! 🎉</h3>
                                <p className="text-[var(--text-muted)] mb-6 text-sm">
                                    Our team will get back to you within 24-48 hours.
                                </p>
                                <button
                                    onClick={() => {
                                        setSubmitted(false);
                                        setFormState({ name: "", email: "", subject: "", message: "" });
                                    }}
                                    className="btn-secondary"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">Send us a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                value={formState.name}
                                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                value={formState.email}
                                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            value={formState.subject}
                                            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50"
                                            placeholder="Question about my gift"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                                            Message
                                        </label>
                                        <textarea
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            rows={4}
                                            className="w-full px-4 py-2.5 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 resize-none"
                                            placeholder="Tell us how we can help..."
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="btn-primary w-full sm:w-auto">
                                        <Send className="w-4 h-4" />
                                        <span>Send Message</span>
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
