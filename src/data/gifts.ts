export interface Gift {
    id: number;
    name: string;
    color: string;
    textColor: string;
    icon: string;
}

export const gifts: Gift[] = [
    { id: 1, name: "iPhone 15", color: "#ef4444", textColor: "#ffffff", icon: "📱" },
    { id: 2, name: "AirPods Pro", color: "#ec4899", textColor: "#ffffff", icon: "🎧" },
    { id: 3, name: "Smart Watch", color: "#db2777", textColor: "#ffffff", icon: "⌚" },
    { id: 4, name: "Gold Chain", color: "#f43f5e", textColor: "#ffffff", icon: "💛" },
    { id: 5, name: "Gift Card ₹5000", color: "#be185d", textColor: "#ffffff", icon: "🎁" },
    { id: 6, name: "PlayStation 5", color: "#dc2626", textColor: "#ffffff", icon: "🎮" },
    { id: 7, name: "Diamond Ring", color: "#e11d48", textColor: "#ffffff", icon: "💎" },
    { id: 8, name: "MacBook Air", color: "#fb7185", textColor: "#ffffff", icon: "💻" },
];

export const getRandomGift = (): Gift => {
    const randomIndex = Math.floor(Math.random() * gifts.length);
    return gifts[randomIndex];
};

export const getGiftByIndex = (index: number): Gift => {
    return gifts[index % gifts.length];
};
