// Ad unit configurations
// This file is prepared for EthicalAds integration
// Configure your ad placements here

export const AD_UNITS = {
    unit1: {
        id: "placeholder",
        // Add your EthicalAds configuration here
    },
    // Add more ad units here:
    // unit2: {
    //   id: "your-ad-id",
    // },
} as const;

// Type for valid unit names (auto-generated from AD_UNITS keys)
export type AdUnitName = keyof typeof AD_UNITS;
