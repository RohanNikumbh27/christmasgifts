import type { Metadata } from "next";
import { getCardById, greetingCards } from "@/data/greetings";

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const params = await searchParams;

    const cardId = params?.card ? String(params.card) : "classic";
    const recipientName = params?.to ? String(params.to) : "";
    const senderName = params?.from ? String(params.from) : "Someone special";

    const card = getCardById(cardId) || greetingCards[0];

    const title = recipientName
        ? `${card.emoji} Christmas Greeting for ${recipientName}!`
        : `${card.emoji} You've received a Christmas Greeting!`;

    const description = recipientName
        ? `${senderName} has sent a special Christmas greeting to ${recipientName}. Open to see the magical message! 🎄✨`
        : `${senderName} has sent you a special Christmas greeting. Open to see the magical message! 🎄✨`;

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
