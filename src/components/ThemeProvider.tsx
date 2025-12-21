"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => { },
    mounted: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Only use saved theme if user explicitly changed it, otherwise default to light
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        }
        // Default is already "light" from useState
    }, []);

    useEffect(() => {
        if (mounted) {
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(theme);
            localStorage.setItem("theme", theme);
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}

