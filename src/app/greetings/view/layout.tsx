import type { Metadata } from "next";
import { getCardById, greetingCards } from "@/data/greetings";

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const params = await searchParams;

    const cardId = params?.card ? String(params.card) : "classic";
    const recipientName = params?.to ? String(params.to) : "";
    const senderName = params?.from ? String(params.from) : "Your friend";

    const card = getCardById(cardId) || greetingCards[0];

    const title = `🎅 ${senderName} has sent you Christmas greetings! ✨🎄`;

    const description = `Open to view your special message from ${senderName}!`;

    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            type: "website",
            images: [
                {
                    url: "/og-greeting.png",
                    width: 1200,
                    height: 630,
                    alt: "Christmas Greeting from TrustChristmas",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
            images: ["/og-greeting.png"],
        },
    };
}

export default function GreetingViewLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
