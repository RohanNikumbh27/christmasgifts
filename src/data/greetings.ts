// Greeting card data with predefined messages
export interface GreetingCard {
    id: string;
    emoji: string;
    title: string;
    gradient: string;
    messages: { id: number; message: string }[];
}

export const greetingCards: GreetingCard[] = [
    {
        id: "classic",
        emoji: "🥂",
        title: "Classic Celebration",
        gradient: "from-amber-500 to-orange-600",
        messages: [
            { id: 1, message: "🥂✨ Happy New Year 2026! May this year bring you endless opportunities, cherished moments, and dreams fulfilled. Cheers! 🎉🌟" },
            { id: 2, message: "🌟🥂 As we toast to 2026, may your days be bright, your heart be light, and your future be extraordinary! ✨🎊" },
            { id: 3, message: "🎁✨ Wishing you a spectacular 2026! May every moment sparkle with joy and every day bring new reasons to smile! 🥂🌟" },
            { id: 4, message: "🌟🥂 Cheers to new beginnings! May 2026 be filled with success, happiness, and unforgettable memories! ✨🎁" },
            { id: 5, message: "🥂🎁 Here's to an amazing 2026! May all your resolutions come true and your journey be extraordinary! ✨🌟" },
        ],
    },
    {
        id: "celebration",
        emoji: "🎉",
        title: "New Year Wishes",
        gradient: "from-red-500 to-pink-600",
        messages: [
            { id: 1, message: "🎉🥳 Happy New Year 2026! May this year bring you endless joy, success, and beautiful memories. Here's to new beginnings! ✨🎊" },
            { id: 2, message: "🎊🎉 Cheers to 2026! Wishing you a year filled with laughter, love, and all the happiness your heart can hold! 🥂✨" },
            { id: 3, message: "🎉✨ New Year, New Dreams! May 2026 bring you closer to your goals and shower you with blessings. Happy New Year! 🎊🎁" },
            { id: 4, message: "⭐🎉 As we welcome 2026, may your life be filled with new adventures, great opportunities, and wonderful surprises! 🎊✨" },
            { id: 5, message: "🎁🎉 Here's to a sparkling New Year! May 2026 bring you prosperity, good health, and moments worth celebrating! 🥳⭐" },
        ],
    },
    {
        id: "star",
        emoji: "🌟",
        title: "Starlit Blessings",
        gradient: "from-purple-500 to-indigo-600",
        messages: [
            { id: 1, message: "🌟🙏 May the stars guide you to your dreams in 2026! Wishing you a year of peace, purpose, and endless possibilities! ✨💜" },
            { id: 2, message: "💜🌟 As the clock strikes midnight, may your heart be filled with hope for a brighter tomorrow! Happy New Year 2026! ✨🙏" },
            { id: 3, message: "🙏✨ May 2026 be your most blessed year yet! May every sunrise bring new opportunities and every sunset bring contentment! 🌟💜" },
            { id: 4, message: "🌟💜 Under the New Year stars, may all your wishes come true! Wishing you grace, love, and abundance in 2026! ✨🙏" },
            { id: 5, message: "✨🌟 The new year brings new hope! May 2026 illuminate your path with joy, success, and beautiful moments! 💜🙏" },
        ],
    },
    {
        id: "gift",
        emoji: "🎁",
        title: "Gift of Love",
        gradient: "from-pink-500 to-rose-600",
        messages: [
            { id: 1, message: "🎁💕 The best gift is having YOU in my life! Wishing you a New Year 2026 filled with love, laughter, and beautiful memories! ❤️✨" },
            { id: 2, message: "💕🎁 You are my greatest treasure! As we enter 2026, I'm grateful for you. Happy New Year with all my love! ❤️🎉" },
            { id: 3, message: "❤️🎁 No gift compares to the joy you bring! May 2026 bless you with everything your heart desires! 💕✨" },
            { id: 4, message: "🎁💕 My New Year wish is for your happiness! May 2026 bring you closer to your dreams. I love you! ❤️🎉" },
            { id: 5, message: "💕❤️ You are loved beyond measure! This New Year 2026, I'm grateful for YOU - the most precious gift of all! 🎁✨" },
        ],
    },

    {
        id: "winter",
        emoji: "✨",
        title: "Sparkle & Shine",
        gradient: "from-blue-500 to-cyan-600",
        messages: [
            { id: 1, message: "✨🎊 May 2026 sparkle with magic, wonder, and endless possibilities! Wishing you a dazzling New Year! 🌟🎉" },
            { id: 2, message: "🌟✨ Let your spirit shine bright as we enter 2026! May this year bring you joy beyond measure! 🎊🥳" },
            { id: 3, message: "🎉✨ Wishing you a New Year as beautiful as a sky full of fireworks! May 2026 be your best year yet! 🌟🎊" },
            { id: 4, message: "✨🎊 In this season of celebration, may warmth fill your heart and magic fill your days! Happy New Year 2026! 🌟🥳" },
            { id: 5, message: "🌟✨ May your 2026 sparkle with success and twinkle with happiness! Here's to an incredible year ahead! 🎊🎉" },
        ],
    },
    {
        id: "party",
        emoji: "🥳",
        title: "Party Time",
        gradient: "from-yellow-500 to-orange-500",
        messages: [
            { id: 1, message: "🥳🎊 Let's celebrate! 2026 is here with endless possibilities! May your year be as fun and exciting as you are! 💫🎉" },
            { id: 2, message: "💫🥳 It's party time! Wishing you a 2026 filled with celebrations, achievements, and moments of pure joy! 🌟🎁" },
            { id: 3, message: "🌟💫 Get ready for an amazing 2026! You deserve all the happiness, success, and celebrations this year can bring! 🥳🎊" },
            { id: 4, message: "🥳🎁 May every moment of 2026 feel like a celebration! You make the world brighter - here's to YOUR year! 💫🌟" },
            { id: 5, message: "💫🌟 Pop the confetti! 2026 is your year to shine, thrive, and celebrate every beautiful moment! 🥳🎊" },
        ],
    },


];

export function getCardById(id: string): GreetingCard | undefined {
    return greetingCards.find((card) => card.id === id);
}

export function getMessageById(cardId: string, messageId: number): string | undefined {
    const card = getCardById(cardId);
    return card?.messages.find((m) => m.id === messageId)?.message;
}
