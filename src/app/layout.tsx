import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TrustChristmas Gift Carnival | Win Amazing Christmas Gifts!",
  description: "Spin the Christmas wheel and win exciting gifts from TrustChristmas Foundation. Join thousands of winners this holiday season!",
  keywords: "Christmas gifts, lottery, wheel spin, TrustChristmas, free gifts, holiday giveaway",
  openGraph: {
    title: "TrustChristmas Gift Carnival",
    description: "Spin the wheel and win amazing Christmas gifts!",
    type: "website",
  },
  other: {
    monetag: "cca29e63614b0b58e563ab0d59bcf97b",
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
