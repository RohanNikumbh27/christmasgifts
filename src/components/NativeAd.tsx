'use client';

import { useEffect, useRef } from 'react';

export default function NativeAd() {
  const bannerLoaded = useRef(false);

  useEffect(() => {
    if (bannerLoaded.current) return;

    const script = document.createElement('script');
    script.src = "https://pl28293465.effectivegatecpm.com/c092032294eea7ba8a7e9d8c0db985af/invoke.js";
    script.async = true;
    script.setAttribute('data-cfasync', 'false');

    document.body.appendChild(script);
    bannerLoaded.current = true;

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex justify-center my-8">
      <div id="container-c092032294eea7ba8a7e9d8c0db985af"></div>
    </div>
  );
}