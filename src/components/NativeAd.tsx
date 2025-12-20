'use client';

import { useEffect, useRef } from 'react';
import { AD_UNITS, AdUnitName } from '@/config/adUnits';

interface NativeAdProps {
  /** The unit name from AD_UNITS config (e.g., "unit1", "unit2") */
  unitName: AdUnitName;
}

export default function NativeAd({ unitName }: NativeAdProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  const adUnit = AD_UNITS[unitName];

  useEffect(() => {
    if (scriptLoaded.current || !containerRef.current || !adUnit) return;

    const script = document.createElement('script');
    script.src = adUnit.scriptUrl;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');

    // Append script after the container so Adsterra can find it
    containerRef.current.parentElement?.appendChild(script);
    scriptLoaded.current = true;

    return () => {
      if (script.parentElement) {
        script.parentElement.removeChild(script);
      }
    };
  }, [adUnit]);

  if (!adUnit) {
    console.warn(`NativeAd: Unit "${unitName}" not found in AD_UNITS config`);
    return null;
  }

  return (
    <div className="flex justify-center my-8">
      <div ref={containerRef} id={`container-${adUnit.id}`}></div>
    </div>
  );
}