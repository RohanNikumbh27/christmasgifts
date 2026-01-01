import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TrustNewYear",
  description: "Spin the wheel and win exciting gifts from TrustNewYear Foundation. Join thousands of winners this New Year 2026!",
  keywords: "New Year gifts, 2026, lottery, wheel spin, TrustNewYear, free gifts, new year giveaway",
  openGraph: {
    title: "TrustNewYear Gift Carnival 2026",
    description: "Spin the wheel and win amazing New Year gifts!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
