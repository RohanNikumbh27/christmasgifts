'use client';

import { useEffect, useRef } from 'react';
import { AD_UNITS, AdUnitName } from '@/config/adUnits';

interface NativeAdProps {
  /** The unit name from AD_UNITS config (e.g., "unit1", "unit2") */
  unitName: AdUnitName;
  /** Optional className for styling */
  className?: string;
}

export default function NativeAd({ unitName, className = '' }: NativeAdProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const adLoaded = useRef(false);

  const adUnit = AD_UNITS[unitName];

  useEffect(() => {
    if (adLoaded.current || !containerRef.current || !adUnit) return;

    // TODO: Add EthicalAds initialization here
    // Reference: https://www.ethicalads.io/publishers/

    adLoaded.current = true;

    return () => {
      // Cleanup if needed
    };
  }, [adUnit]);

  if (!adUnit) {
    console.warn(`NativeAd: Unit "${unitName}" not found in AD_UNITS config`);
    return null;
  }

  return (
    <div className={`flex justify-center my-8 ${className}`}>
      {/* Ad placeholder - replace with EthicalAds component */}
      <div
        ref={containerRef}
        id={`ad-container-${adUnit.id}`}
        className="ad-container min-h-[100px] w-full max-w-[728px] flex items-center justify-center"
      >
        <span className="text-[var(--text-muted)] text-sm">Ad Space</span>
      </div>
    </div>
  );
}