'use client';

import { useEffect, useRef } from 'react';
import { AD_UNITS, AdUnitName } from '@/config/adUnits';


export default function NativeAd({ unitName = "unit1" }: { unitName?: AdUnitName }) {
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
    <div className="flex flex-col items-center justify-center my-8 animate-fade-in">
      <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2 font-medium opacity-70">
        Advertisement
      </span>
      <div className="relative rounded-2xl overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)] shadow-sm hover:shadow-md transition-all duration-300 p-1">
        <div
          ref={containerRef}
          id={`container-${adUnit.id}`}
          className="min-h-[250px] min-w-[300px] flex items-center justify-center bg-[var(--card-bg)] !rounded-xl"
        >
        </div>
      </div>
    </div>
  );
}