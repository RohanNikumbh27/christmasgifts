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
        id: "santa",
        emoji: "🎅",
        title: "Santa's Wishes",
        gradient: "from-red-500 to-pink-600",
        messages: [
            { id: 1, message: "🎅🎁 Ho Ho Ho! Santa wanted me to deliver this special message: You've been AMAZING this year and deserve all the happiness in the world! Merry Christmas! 🦌✨" },
            { id: 2, message: "🦌🎅 Santa checked his list twice and guess what? You're on the NICE list! May all your Christmas wishes come true this magical season! 🎁⭐" },
            { id: 3, message: "🎅✨ Straight from the North Pole with love! Santa's sending you sleigh-loads of joy, mountains of happiness, and a Christmas filled with magical moments! 🎁🦌" },
            { id: 4, message: "⭐🎅 Believe in the magic of Santa and let your Christmas dreams come true! You deserve all the wonderful gifts life has to offer! Ho Ho Ho! 🎁✨" },
            { id: 5, message: "🎁🎅 Santa's got a special delivery just for you - a Christmas filled with love, laughter, and all the magic your heart can hold! Merry Christmas! 🦌⭐" },
        ],
    },
    {
        id: "star",
        emoji: "🌟",
        title: "Star of Bethlehem",
        gradient: "from-purple-500 to-indigo-600",
        messages: [
            { id: 1, message: "🌟🙏 May the light of Christmas guide your path, fill your heart with peace, and surround you with blessings! Wishing you a truly blessed holiday season! ✨💜" },
            { id: 2, message: "💜🌟 Like the star that guided the wise men, may hope and love guide you always! Wishing you a Christmas filled with divine blessings! ✨🙏" },
            { id: 3, message: "🙏✨ May blessings rain down upon you this holy Christmas! May peace fill your heart and love surround your home! 🌟💜" },
            { id: 4, message: "🌟💜 May peace and grace shine upon you this holy Christmas! Under the Christmas star, may all your prayers be answered! ✨🙏" },
            { id: 5, message: "✨🌟 The true magic of Christmas lies in love, hope, and faith! May you experience all three in abundance this blessed season! 💜🙏" },
        ],
    },
    {
        id: "gift",
        emoji: "🎁",
        title: "Gift of Love",
        gradient: "from-pink-500 to-rose-600",
        messages: [
            { id: 1, message: "🎁💕 The best gift isn't wrapped in paper - it's having YOU in my life! You are my greatest blessing. Merry Christmas with all my love! ❤️✨" },
            { id: 2, message: "💕🎁 You are the greatest gift life has given me! Wrapped in love, I send you my warmest Christmas wishes and biggest hugs! ❤️🎄" },
            { id: 3, message: "❤️🎁 No gift under any tree could ever compare to the joy you bring to my life! Wishing you a Christmas as wonderful as you are! 💕✨" },
            { id: 4, message: "🎁💕 My gift to you is my love, today and always! You make every day feel like Christmas. Wishing you the most magical holiday! ❤️🎄" },
            { id: 5, message: "💕❤️ You are loved more than words can say! This Christmas, I'm grateful for YOU - the most precious gift of all! 🎁✨" },
        ],
    },
    {
        id: "classic",
        emoji: "🎄",
        title: "Classic Christmas",
        gradient: "from-green-600 to-emerald-700",
        messages: [
            { id: 1, message: "🎄✨ Wishing you a Merry Christmas filled with endless joy, love, and laughter! May your home be filled with warmth and your heart with happiness. Have a magical holiday season! 🎁🌟" },
            { id: 2, message: "🌟🎄 May the spirit of Christmas bring you peace, the warmth of the season fill your heart, and the love of family surround you always. Merry Christmas and Happy New Year! ✨🎅" },
            { id: 3, message: "🎁✨ Sending you the warmest wishes for a wonderful Christmas! May every moment be touched with magic and every day be filled with love and joy! 🎄🌟" },
            { id: 4, message: "🌟🎄 May the magic of Christmas fill every corner of your heart and home with happiness! Wishing you a season full of miracles, love, and beautiful memories! ✨🎁" },
            { id: 5, message: "🎄🎁 This Christmas, may all your dreams come true and your heart overflow with joy! Wishing you a holiday season as beautiful and special as you are! ✨🌟" },
        ],
    },
    
    {
        id: "winter",
        emoji: "❄️",
        title: "Winter Wonderland",
        gradient: "from-blue-500 to-cyan-600",
        messages: [
            { id: 1, message: "❄️✨ May your Christmas be as magical as a winter wonderland, where snowflakes dance and dreams come true! Wishing you a season of pure enchantment! 🌨️⛄" },
            { id: 2, message: "🌨️❄️ Let the snowflakes remind you of life's beautiful little moments! May your Christmas sparkle like frost on a winter morning! ⛄✨" },
            { id: 3, message: "⛄❄️ Wishing you a Christmas as pure and beautiful as freshly fallen snow! May warmth fill your heart despite the winter chill! 🌨️✨" },
            { id: 4, message: "❄️⛄ In this winter wonderland, may you find warmth in the arms of loved ones and magic in every snowflake! Have a cozy, beautiful Christmas! 🌨️✨" },
            { id: 5, message: "✨❄️ May your holidays sparkle like ice crystals in the sun! Wishing you a Christmas filled with snowy adventures and warm cuddles! 🌨️⛄" },
        ],
    },
    {
        id: "sparkle",
        emoji: "✨",
        title: "Sparkle & Shine",
        gradient: "from-yellow-500 to-orange-500",
        messages: [
            { id: 1, message: "✨🌟 May your Christmas sparkle with joy and shine with love! You light up the world just by being you - keep shining bright this holiday season! 💫🎄" },
            { id: 2, message: "💫✨ Wishing you a season that glitters with happiness and twinkles with wonder! May every moment of your Christmas be absolutely magical! 🌟🎁" },
            { id: 3, message: "🌟💫 Let your spirit shine bright like Christmas lights! You deserve a holiday season filled with dazzling joy and sparkling memories! ✨🎄" },
            { id: 4, message: "✨🎁 May every moment of your Christmas be touched with sparkle and wrapped in golden happiness! You make the world brighter! 💫🌟" },
            { id: 5, message: "💫🌟 Shine bright this Christmas - you deserve all the magic, glitter, and wonderful surprises the season has to offer! ✨🎄" },
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
