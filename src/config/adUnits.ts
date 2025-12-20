// Ad unit configurations from Adsterra
// Create new ad units at: https://publishers.adsterra.com/ad-units
// Each ad placement needs its own unique ad unit

export const AD_UNITS = {
    unit1: {
        id: "c092032294eea7ba8a7e9d8c0db985af",
        scriptUrl: "https://pl28293465.effectivegatecpm.com/c092032294eea7ba8a7e9d8c0db985af/invoke.js"
    },
    // Add more ad units here:
    // unit2: {
    //   id: "YOUR_AD_ID",
    //   scriptUrl: "https://pl28293465.effectivegatecpm.com/YOUR_AD_ID/invoke.js"
    // },
} as const;

// Type for valid unit names (auto-generated from AD_UNITS keys)
export type AdUnitName = keyof typeof AD_UNITS;
