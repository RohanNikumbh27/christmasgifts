export interface Gift {
    id: number;
    name: string;
    color: string;
    textColor: string;
    icon: string;
    image: string;
    value: string;
    numericValue: number;
    category: string;
}

// Complete gift catalog sorted by price (low to high)
// 5 gifts per price range, suitable for all ages and genders

export const allGifts: Gift[] = [
    // ==================== ₹500 - ₹1,000 (First Spin) ====================
    {
        id: 1,
        name: "New Year Decorations",
        color: "#ef4444",
        textColor: "#ffffff",
        icon: "🎉",
        image: "/gifts/new_year_decorations.png",
        value: "₹599",
        numericValue: 599,
        category: "Decor"
    },
    {
        id: 2,
        name: "Starbucks Mug",
        color: "#ec4899",
        textColor: "#ffffff",
        icon: "☕",
        image: "/gifts/starbucks_mug.png",
        value: "₹699",
        numericValue: 699,
        category: "Home"
    },
    {
        id: 3,
        name: "Cozy Socks Set",
        color: "#db2777",
        textColor: "#ffffff",
        icon: "🧦",
        image: "/gifts/cozy_socks.png",
        value: "₹799",
        numericValue: 799,
        category: "Apparel"
    },
    {
        id: 4,
        name: "Premium Planner 2026",
        color: "#f43f5e",
        textColor: "#ffffff",
        icon: "📓",
        image: "/gifts/planner_notebook.png",
        value: "₹549",
        numericValue: 549,
        category: "Stationery"
    },
    {
        id: 5,
        name: "Ferrero Rocher 24pc",
        color: "#be185d",
        textColor: "#ffffff",
        icon: "🍫",
        image: "/gifts/ferrero_rocher.png",
        value: "₹999",
        numericValue: 999,
        category: "Food"
    },

    // ==================== ₹1,000 - ₹3,000 ====================
    {
        id: 6,
        name: "Leather Wallet",
        color: "#dc2626",
        textColor: "#ffffff",
        icon: "👛",
        image: "/gifts/leather_wallet.png",
        value: "₹1,299",
        numericValue: 1299,
        category: "Accessories"
    },
    {
        id: 7,
        name: "Premium Perfume Set",
        color: "#e11d48",
        textColor: "#ffffff",
        icon: "🧴",
        image: "/gifts/perfume_set.png",
        value: "₹1,599",
        numericValue: 1599,
        category: "Beauty"
    },
    {
        id: 8,
        name: "Wireless Earbuds",
        color: "#fb7185",
        textColor: "#ffffff",
        icon: "🎧",
        image: "/gifts/boat_earbuds.png",
        value: "₹1,999",
        numericValue: 1999,
        category: "Electronics"
    },
    {
        id: 9,
        name: "Giant Teddy Bear",
        color: "#f472b6",
        textColor: "#ffffff",
        icon: "🧸",
        image: "/gifts/teddy_bear.png",
        value: "₹2,499",
        numericValue: 2499,
        category: "Toys"
    },
    {
        id: 10,
        name: "UNO Card Game",
        color: "#a855f7",
        textColor: "#ffffff",
        icon: "🎴",
        image: "/gifts/uno_cards.png",
        value: "₹599",
        numericValue: 599,
        category: "Games"
    },

    // ==================== ₹3,000 - ₹5,000 ====================
    {
        id: 11,
        name: "Power Bank 20000mAh",
        color: "#7c3aed",
        textColor: "#ffffff",
        icon: "🔋",
        image: "/gifts/power_bank.png",
        value: "₹3,499",
        numericValue: 3499,
        category: "Electronics"
    },
    {
        id: 12,
        name: "Smart LED Bulb",
        color: "#2563eb",
        textColor: "#ffffff",
        icon: "💡",
        image: "/gifts/smart_bulb.png",
        value: "₹3,999",
        numericValue: 3999,
        category: "Smart Home"
    },
    {
        id: 13,
        name: "Laptop Backpack",
        color: "#0ea5e9",
        textColor: "#ffffff",
        icon: "🎒",
        image: "/gifts/backpack.png",
        value: "₹4,199",
        numericValue: 4199,
        category: "Accessories"
    },
    {
        id: 14,
        name: "Titan Analog Watch",
        color: "#14b8a6",
        textColor: "#ffffff",
        icon: "⌚",
        image: "https://staticimg.titan.co.in/Titan/Catalog/1802SL02_1.jpg?impolicy=pqmed",
        value: "₹4,495",
        numericValue: 4495,
        category: "Accessories"
    },
    {
        id: 15,
        name: "JBL Flip Speaker",
        color: "#10b981",
        textColor: "#ffffff",
        icon: "🔊",
        image: "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw16e5d03d/JBL_PARTYBOX_710_HERO_37454_x1.png?sw=400&sh=400",
        value: "₹4,999",
        numericValue: 4999,
        category: "Audio"
    },

    // ==================== ₹5,000 - ₹10,000 ====================
    {
        id: 16,
        name: "Xiaomi Mi Band 8",
        color: "#84cc16",
        textColor: "#000000",
        icon: "💪",
        image: "https://m.media-amazon.com/images/I/41mWpy1LQFL._SL1500_.jpg",
        value: "₹3,999",
        numericValue: 3999,
        category: "Wearables"
    },
    {
        id: 17,
        name: "Xbox Wireless Controller",
        color: "#eab308",
        textColor: "#000000",
        icon: "🎮",
        image: "https://m.media-amazon.com/images/I/61CBaIEWnNL._SL1500_.jpg",
        value: "₹5,990",
        numericValue: 5990,
        category: "Gaming"
    },
    {
        id: 18,
        name: "Ray-Ban Aviator",
        color: "#f97316",
        textColor: "#ffffff",
        icon: "🕶️",
        image: "https://m.media-amazon.com/images/I/41EVHFSE+uL._SL1000_.jpg",
        value: "₹6,490",
        numericValue: 6490,
        category: "Accessories"
    },
    {
        id: 19,
        name: "Sony WH-CH520",
        color: "#64748b",
        textColor: "#ffffff",
        icon: "🎧",
        image: "https://m.media-amazon.com/images/I/61XXRFfo5WL._SL1500_.jpg",
        value: "₹4,990",
        numericValue: 4990,
        category: "Audio"
    },
    {
        id: 20,
        name: "Nike Revolution 6",
        color: "#f43f5e",
        textColor: "#ffffff",
        icon: "👟",
        image: "https://m.media-amazon.com/images/I/71BOoUq-z7L._SL1500_.jpg",
        value: "₹5,695",
        numericValue: 5695,
        category: "Footwear"
    },

    // ==================== ₹10,000 - ₹20,000 ====================
    {
        id: 21,
        name: "Amazon Voucher",
        color: "#be185d",
        textColor: "#ffffff",
        icon: "🎁",
        image: "https://m.media-amazon.com/images/G/31/gc/designs/livepreview/amzn_wedding_background_all_Background._SX300_QL85_.jpg",
        value: "₹10,000",
        numericValue: 10000,
        category: "Voucher"
    },
    {
        id: 22,
        name: "Kindle Paperwhite",
        color: "#64748b",
        textColor: "#ffffff",
        icon: "📚",
        image: "https://m.media-amazon.com/images/I/61Ww4abGclL._AC_SL400_.jpg",
        value: "₹14,999",
        numericValue: 14999,
        category: "Electronics"
    },
    {
        id: 23,
        name: "Flipkart Voucher",
        color: "#2563eb",
        textColor: "#ffffff",
        icon: "🎁",
        image: "https://rukminim2.flixcart.com/image/400/400/jnc2bgw0/e-gift-voucher/x/h/n/gift-card-flipkart-e-gift-card-original-imafa5gs9gzyfcpg.jpeg",
        value: "₹15,000",
        numericValue: 15000,
        category: "Voucher"
    },
    {
        id: 24,
        name: "Smart Watch",
        color: "#7c3aed",
        textColor: "#ffffff",
        icon: "⌚",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
        value: "₹18,999",
        numericValue: 18999,
        category: "Wearables"
    },
    {
        id: 25,
        name: "Instant Camera",
        color: "#f97316",
        textColor: "#ffffff",
        icon: "📷",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
        value: "₹19,999",
        numericValue: 19999,
        category: "Camera"
    },

    // ==================== ₹20,000 - ₹50,000 ====================
    {
        id: 26,
        name: "AirPods Pro 2",
        color: "#ec4899",
        textColor: "#ffffff",
        icon: "🎧",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1660803972361",
        value: "₹24,900",
        numericValue: 24900,
        category: "Electronics"
    },
    {
        id: 27,
        name: "Gold Bracelet",
        color: "#eab308",
        textColor: "#000000",
        icon: "✨",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
        value: "₹28,000",
        numericValue: 28000,
        category: "Jewelry"
    },
    {
        id: 28,
        name: "Sony Headphones",
        color: "#2563eb",
        textColor: "#ffffff",
        icon: "🎧",
        image: "https://electronics.sony.com/image/5d02da5df552836db364cec8a755a1fe?fmt=png-alpha&wid=400",
        value: "₹29,990",
        numericValue: 29990,
        category: "Electronics"
    },
    {
        id: 29,
        name: "Nintendo Switch",
        color: "#dc2626",
        textColor: "#ffffff",
        icon: "🎮",
        image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_400/b_white/f_auto/q_auto/ncom/software/switch/70010000068683/a9e7a5e5c18e2add5a2a41b60a19f91b0b0a91c3aebe8f4852fb9c1a3a56ab2f",
        value: "₹32,999",
        numericValue: 32999,
        category: "Gaming"
    },
    {
        id: 30,
        name: "Gold Necklace",
        color: "#f43f5e",
        textColor: "#ffffff",
        icon: "✨",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
        value: "₹35,000",
        numericValue: 35000,
        category: "Jewelry"
    },
    {
        id: 31,
        name: "Apple Watch S9",
        color: "#db2777",
        textColor: "#ffffff",
        icon: "⌚",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MRXK3ref_VW_34FR+watch-case-45-aluminum-midnight-nc-s9_VW_34FR+watch-face-45-aluminum-midnight-s9_VW_34FR?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1694507911484",
        value: "₹44,900",
        numericValue: 44900,
        category: "Wearables"
    },
    {
        id: 32,
        name: "Diamond Earrings",
        color: "#e11d48",
        textColor: "#ffffff",
        icon: "💎",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
        value: "₹45,000",
        numericValue: 45000,
        category: "Jewelry"
    },
    {
        id: 33,
        name: "PlayStation 5",
        color: "#dc2626",
        textColor: "#ffffff",
        icon: "🎮",
        image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
        value: "₹49,990",
        numericValue: 49990,
        category: "Gaming"
    },

    // ==================== ₹50,000+ (Premium - 20+ Spins) ====================
    {
        id: 34,
        name: "Canon EOS M50",
        color: "#f97316",
        textColor: "#ffffff",
        icon: "📷",
        image: "https://static.bhphoto.com/images/multiple_images/images500x500/1554204706_IMG_1218254.jpg",
        value: "₹58,995",
        numericValue: 58995,
        category: "Camera"
    },
    {
        id: 35,
        name: "Dyson V15 Vacuum",
        color: "#6366f1",
        textColor: "#ffffff",
        icon: "🏠",
        image: "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/447296-01.png?$responsive$&cropPathE=desktop&fit=stretch,1&wid=400",
        value: "₹62,900",
        numericValue: 62900,
        category: "Home"
    },
    {
        id: 36,
        name: "Samsung Galaxy S24",
        color: "#7c3aed",
        textColor: "#ffffff",
        icon: "📱",
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bztqins-thumb-539573053?$400_400_PNG$",
        value: "₹79,999",
        numericValue: 79999,
        category: "Electronics"
    },
    {
        id: 37,
        name: "iPad Pro 12.9\"",
        color: "#0ea5e9",
        textColor: "#ffffff",
        icon: "📱",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-13-select-wifi-spacegray-202405?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1713920820271",
        value: "₹1,12,900",
        numericValue: 112900,
        category: "Electronics"
    },
    {
        id: 38,
        name: "MacBook Air M3",
        color: "#fb7185",
        textColor: "#ffffff",
        icon: "💻",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1708367688034",
        value: "₹1,14,900",
        numericValue: 114900,
        category: "Electronics"
    },
    {
        id: 39,
        name: "iPhone 15 Pro",
        color: "#ef4444",
        textColor: "#ffffff",
        icon: "📱",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1692845702708",
        value: "₹1,34,900",
        numericValue: 134900,
        category: "Electronics"
    },
    {
        id: 40,
        name: "Diamond Pendant",
        color: "#a855f7",
        textColor: "#ffffff",
        icon: "💎",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
        value: "₹1,50,000",
        numericValue: 150000,
        category: "Jewelry"
    }
];

// Gifts displayed on the wheel (8 segments for visual purposes)
// These use the ORIGINAL colors from the wheel design - all red/pink shades
export const gifts: Gift[] = [
    {
        id: 101,
        name: "iPhone 15 Pro",
        color: "#ef4444",
        textColor: "#ffffff",
        icon: "📱",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1692845702708",
        value: "₹1,34,900",
        numericValue: 134900,
        category: "Electronics"
    },
    {
        id: 102,
        name: "AirPods Pro 2",
        color: "#ec4899",
        textColor: "#ffffff",
        icon: "🎧",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1660803972361",
        value: "₹24,900",
        numericValue: 24900,
        category: "Electronics"
    },
    {
        id: 103,
        name: "Apple Watch S9",
        color: "#db2777",
        textColor: "#ffffff",
        icon: "⌚",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MRXK3ref_VW_34FR+watch-case-45-aluminum-midnight-nc-s9_VW_34FR+watch-face-45-aluminum-midnight-s9_VW_34FR?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1694507911484",
        value: "₹44,900",
        numericValue: 44900,
        category: "Wearables"
    },
    {
        id: 104,
        name: "Gold Necklace",
        color: "#f43f5e",
        textColor: "#ffffff",
        icon: "✨",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
        value: "₹35,000",
        numericValue: 35000,
        category: "Jewelry"
    },
    {
        id: 105,
        name: "Amazon Gift Card",
        color: "#be185d",
        textColor: "#ffffff",
        icon: "🎁",
        image: "https://m.media-amazon.com/images/G/31/gc/designs/livepreview/amzn_wedding_background_all_Background._SX300_QL85_.jpg",
        value: "₹10,000",
        numericValue: 10000,
        category: "Gift Cards"
    },
    {
        id: 106,
        name: "PlayStation 5",
        color: "#dc2626",
        textColor: "#ffffff",
        icon: "🎮",
        image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
        value: "₹49,990",
        numericValue: 49990,
        category: "Gaming"
    },
    {
        id: 107,
        name: "Diamond Earrings",
        color: "#e11d48",
        textColor: "#ffffff",
        icon: "💎",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
        value: "₹45,000",
        numericValue: 45000,
        category: "Jewelry"
    },
    {
        id: 108,
        name: "MacBook Air M3",
        color: "#fb7185",
        textColor: "#ffffff",
        icon: "💻",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1708367688034",
        value: "₹1,14,900",
        numericValue: 114900,
        category: "Electronics"
    },
];

// Extended list for showcase carousel
export const showcaseGifts: Gift[] = allGifts;

// Get gifts within a price range
export const getGiftsByPriceRange = (min: number, max: number): Gift[] => {
    return allGifts.filter(g => g.numericValue >= min && g.numericValue <= max);
};

// Get a random gift for a specific spin count
export const getGiftForSpinCount = (spinCount: number): Gift => {
    let targetMin: number;
    let targetMax: number;

    if (spinCount === 1) {
        // First spin: ₹500 - ₹1,000
        targetMin = 500;
        targetMax = 1000;
    } else if (spinCount >= 35) {
        // 35-50 spins: Ultra Premium gifts ₹100,000+
        targetMin = 100000;
        targetMax = 200000;
    } else if (spinCount >= 20) {
        // 20-34 spins: Premium gifts ₹50,000+
        targetMin = 50000;
        targetMax = 100000;
    } else {
        // Spins 2-19: approximately spinCount * 1000 (±30% variance)
        const targetValue = spinCount * 1000;
        targetMin = Math.floor(targetValue * 0.7);
        targetMax = Math.ceil(targetValue * 1.3);
    }

    const eligibleGifts = getGiftsByPriceRange(targetMin, targetMax);

    if (eligibleGifts.length === 0) {
        // Fallback: find closest gift to target value
        const targetValue = spinCount * 1000;
        const sorted = [...allGifts].sort((a, b) =>
            Math.abs(a.numericValue - targetValue) - Math.abs(b.numericValue - targetValue)
        );
        return sorted[0];
    }

    // Return a random gift from eligible range
    return eligibleGifts[Math.floor(Math.random() * eligibleGifts.length)];
};

export const getRandomGift = (): Gift => {
    const randomIndex = Math.floor(Math.random() * gifts.length);
    return gifts[randomIndex];
};

export const getGiftByIndex = (index: number): Gift => {
    return gifts[index % gifts.length];
};

export const getRandomShowcaseGifts = (count: number): Gift[] => {
    const shuffled = [...showcaseGifts].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};
