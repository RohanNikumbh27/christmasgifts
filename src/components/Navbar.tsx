'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Gift, Menu, X, Gamepad2, Mail, Trophy, Home } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeProvider';

const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Games', href: '/games', icon: Gamepad2 },
    { label: 'Greetings', href: '/greetings', icon: Mail },
    { label: 'Winners', href: '/winners', icon: Trophy },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <>
            <header className="sticky top-0 z-50 glass border-b border-[var(--card-border)]">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl">
                                <Gift className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="font-bold text-[var(--foreground)]">TrustChristmas</h1>
                                <p className="text-xs text-zinc-600 dark:text-zinc-400">GlobalTrust Foundation</p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${isActive(item.href)
                                        ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-600/20'
                                        : 'text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--card-bg)]'
                                        }`}
                                >
                                    <item.icon className="w-4 h-4" />
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            ))}
                        </nav>

                        {/* Right side: Theme Toggle + Mobile Menu Button */}
                        <div className="flex items-center gap-2">
                            <ThemeToggle />

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-3 rounded-xl bg-[var(--card-bg)] hover:border-[var(--text-muted)] transition-all duration-200 flex items-center justify-center"
                                aria-label="Toggle menu"
                            >
                                <Menu className="w-5 h-5 text-[var(--foreground)]" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation - Portal to Body */}
            {mounted && createPortal(
                <div
                    className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div
                        className={`absolute right-0 top-0 h-full w-[300px] shadow-2xl transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-hidden border-l ${theme === 'dark' ? 'bg-black/80 backdrop-blur-xl border-white/20' : 'bg-white border-neutral-200'}`}
                    >
                        {/* Festive Background Decorations (Dark Mode Only) */}
                        {theme === 'dark' && (
                            <>
                                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
                                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
                            </>
                        )}

                        <div className="flex flex-col h-full relative z-10">
                            {/* Header */}
                            <div className={`flex items-center justify-between p-6 border-b ${theme === 'dark' ? 'border-[var(--card-border)]/50' : 'border-neutral-200'}`}>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl shadow-lg shadow-pink-600/20">
                                        <Gift className="w-5 h-5 text-white" />
                                    </div>
                                    <span className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${theme === 'dark' ? 'from-pink-400 to-rose-400' : 'from-pink-600 to-rose-600'}`}>
                                        Menu
                                    </span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className={`p-2 rounded-full transition-colors border border-transparent ${theme === 'dark' ? 'hover:bg-white/10 hover:border-[var(--card-border)]' : 'hover:bg-neutral-100 hover:border-neutral-200'}`}
                                >
                                    <X className={`w-5 h-5 ${theme === 'dark' ? 'text-[var(--text-muted)] hover:text-[var(--foreground)]' : 'text-neutral-500 hover:text-neutral-900'}`} />
                                </button>
                            </div>

                            {/* Nav Items */}
                            <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                                {navItems.map((item, idx) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`group flex items-center gap-4 px-3 py-3 rounded-2xl transition-all duration-300 border ${isActive(item.href)
                                            ? (theme === 'dark' ? 'bg-gradient-to-r from-red-950 to-pink-950 border-red-900' : 'bg-gradient-to-r from-red-500/50 to-pink-500/50 border-red-200')
                                            : (theme === 'dark' ? 'border-transparent hover:bg-white/5' : 'border-transparent hover:bg-neutral-100')
                                            }`}
                                        style={{ transitionDelay: `${idx * 50}ms` }}
                                    >
                                        <div className={`p-2.5 rounded-xl transition-all duration-300 ${isActive(item.href)
                                            ? 'bg-gradient-to-br from-red-500 to-pink-600 text-white shadow-md shadow-red-500/25'
                                            : (theme === 'dark' ? 'bg-white/10 border-transparent text-[var(--text-muted)] group-hover:text-[var(--foreground)]' : 'bg-white border-neutral-200 text-neutral-500 group-hover:text-neutral-900 group-hover:border-neutral-300') + ' border group-hover:scale-110'
                                            }`}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <span className={`block text-lg font-semibold transition-colors ${isActive(item.href)
                                                ? (theme === 'dark' ? 'text-[var(--foreground)]' : 'text-neutral-900')
                                                : (theme === 'dark' ? 'text-[var(--text-muted)] group-hover:text-[var(--foreground)]' : 'text-neutral-600 group-hover:text-neutral-900')
                                                }`}>
                                                {item.label}
                                            </span>
                                        </div>
                                        <div className={`opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0`}>
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                        </div>
                                    </Link>
                                ))}
                            </nav>

                            {/* Footer in menu */}
                            <div className="p-6 mt-auto">
                                <div className="relative overflow-hidden p-5 rounded-3xl bg-gradient-to-br from-pink-600 to-rose-600 text-white shadow-xl shadow-pink-900/20">
                                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                                    <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-black/10 rounded-full blur-2xl" />

                                    <div className="relative z-10 text-center">
                                        <div className="text-3xl mb-2">🎄</div>
                                        <h3 className="font-bold text-lg mb-1">Merry Christmas!</h3>
                                        <p className="text-red-100 text-sm opacity-90">
                                            May your holidays be filled with joy and gifts! 🎁
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6 text-center">
                                    <p className="text-xs text-[var(--text-muted)] font-medium">
                                        Made with ❤️ by TrustChristmas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
