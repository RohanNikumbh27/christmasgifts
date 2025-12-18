export interface Gift {
    id: number;
    name: string;
    color: string;
    textColor: string;
    icon: string;
    image: string;
    value: string;
    category: string;
}

export const gifts: Gift[] = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        color: "#ef4444",
        textColor: "#ffffff",
        icon: "📱",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1692845702708",
        value: "₹1,34,900",
        category: "Electronics"
    },
    {
        id: 2,
        name: "AirPods Pro 2",
        color: "#ec4899",
        textColor: "#ffffff",
        icon: "🎧",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1660803972361",
        value: "₹24,900",
        category: "Electronics"
    },
    {
        id: 3,
        name: "Apple Watch S9",
        color: "#db2777",
        textColor: "#ffffff",
        icon: "⌚",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MRXK3ref_VW_34FR+watch-case-45-aluminum-midnight-nc-s9_VW_34FR+watch-face-45-aluminum-midnight-s9_VW_34FR?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1694507911484",
        value: "₹44,900",
        category: "Wearables"
    },
    {
        id: 4,
        name: "Gold Necklace",
        color: "#f43f5e",
        textColor: "#ffffff",
        icon: "✨",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
        value: "₹35,000",
        category: "Jewelry"
    },
    {
        id: 5,
        name: "Amazon ₹10,000",
        color: "#be185d",
        textColor: "#ffffff",
        icon: "🎁",
        image: "https://m.media-amazon.com/images/G/31/gc/designs/livepreview/amzn_wedding_background_all_Background._SX300_QL85_.jpg",
        value: "₹10,000",
        category: "Gift Cards"
    },
    {
        id: 6,
        name: "PlayStation 5",
        color: "#dc2626",
        textColor: "#ffffff",
        icon: "🎮",
        image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
        value: "₹49,990",
        category: "Gaming"
    },
    {
        id: 7,
        name: "Diamond Earrings",
        color: "#e11d48",
        textColor: "#ffffff",
        icon: "💎",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
        value: "₹45,000",
        category: "Jewelry"
    },
    {
        id: 8,
        name: "MacBook Air M3",
        color: "#fb7185",
        textColor: "#ffffff",
        icon: "💻",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1708367688034",
        value: "₹1,14,900",
        category: "Electronics"
    },
];

// Extended list of premium gifts for the showcase carousel
export const showcaseGifts: Gift[] = [
    ...gifts,
    {
        id: 9,
        name: "Samsung Galaxy S24",
        color: "#7c3aed",
        textColor: "#ffffff",
        icon: "📱",
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bztqins-thumb-539573053?$400_400_PNG$",
        value: "₹79,999",
        category: "Electronics"
    },
    {
        id: 10,
        name: "Sony WH-1000XM5",
        color: "#2563eb",
        textColor: "#ffffff",
        icon: "🎧",
        image: "https://electronics.sony.com/image/5d02da5df552836db364cec8a755a1fe?fmt=png-alpha&wid=400",
        value: "₹29,990",
        category: "Electronics"
    },
    {
        id: 11,
        name: "Nintendo Switch",
        color: "#dc2626",
        textColor: "#ffffff",
        icon: "🎮",
        image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_400/b_white/f_auto/q_auto/ncom/software/switch/70010000068683/a9e7a5e5c18e2add5a2a41b60a19f91b0b0a91c3aebe8f4852fb9c1a3a56ab2f",
        value: "₹32,999",
        category: "Gaming"
    },
    {
        id: 12,
        name: "Dyson V15 Vacuum",
        color: "#6366f1",
        textColor: "#ffffff",
        icon: "🏠",
        image: "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/447296-01.png?$responsive$&cropPathE=desktop&fit=stretch,1&wid=400",
        value: "₹62,900",
        category: "Home"
    },
    {
        id: 13,
        name: "iPad Pro 12.9\"",
        color: "#0ea5e9",
        textColor: "#ffffff",
        icon: "📱",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-13-select-wifi-spacegray-202405?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1713920820271",
        value: "₹1,12,900",
        category: "Electronics"
    },
    {
        id: 14,
        name: "Bose Speaker",
        color: "#14b8a6",
        textColor: "#ffffff",
        icon: "🔊",
        image: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/bose_portable_home_speaker/product_silo_images/bose_portable_home_speaker_triple_black_EC_hero.png/jcr:content/renditions/cq5dam.web.400.400.png",
        value: "₹34,900",
        category: "Audio"
    },
    {
        id: 15,
        name: "Gold Bracelet",
        color: "#eab308",
        textColor: "#000000",
        icon: "✨",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
        value: "₹28,000",
        category: "Jewelry"
    },
    {
        id: 16,
        name: "Kindle Paperwhite",
        color: "#64748b",
        textColor: "#ffffff",
        icon: "📚",
        image: "https://m.media-amazon.com/images/I/61Ww4abGclL._AC_SL400_.jpg",
        value: "₹14,999",
        category: "Electronics"
    },
    {
        id: 17,
        name: "Canon EOS M50",
        color: "#f97316",
        textColor: "#ffffff",
        icon: "📷",
        image: "https://static.bhphoto.com/images/multiple_images/images500x500/1554204706_IMG_1218254.jpg",
        value: "₹58,995",
        category: "Camera"
    },
    {
        id: 18,
        name: "Fitbit Sense 2",
        color: "#84cc16",
        textColor: "#000000",
        icon: "⌚",
        image: "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/sense-2/images/desktop/sense2-shadow-grey-device-quarter.png",
        value: "₹19,999",
        category: "Wearables"
    },
    {
        id: 19,
        name: "JBL PartyBox",
        color: "#f43f5e",
        textColor: "#ffffff",
        icon: "🔊",
        image: "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw16e5d03d/JBL_PARTYBOX_710_HERO_37454_x1.png?sw=400&sh=400",
        value: "₹45,999",
        category: "Audio"
    },
    {
        id: 20,
        name: "Flipkart ₹15,000",
        color: "#2563eb",
        textColor: "#ffffff",
        icon: "🎁",
        image: "https://rukminim2.flixcart.com/image/400/400/jnc2bgw0/e-gift-voucher/x/h/n/gift-card-flipkart-e-gift-card-original-imafa5gs9gzyfcpg.jpeg",
        value: "₹15,000",
        category: "Gift Cards"
    },
];

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
