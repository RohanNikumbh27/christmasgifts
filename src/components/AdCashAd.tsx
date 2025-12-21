'use client';

import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        aclib?: {
            runBanner: (options: { zoneId: string }) => void;
        };
    }
}

interface AdCashAdProps {
    /** The zone ID from AdCash dashboard */
    zoneId: string;
    /** Optional className for additional styling */
    className?: string;
}

/**
 * A reusable AdCash banner ad component.
 * 
 * Usage:
 * ```tsx
 * <AdCashAd zoneId="10735922" />
 * ```
 * 
 * Make sure the AdCash library script is included in your layout.tsx head.
 */
export default function AdCashAd({ zoneId, className = '' }: AdCashAdProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const adInitialized = useRef(false);

    useEffect(() => {
        // Prevent re-initialization
        if (adInitialized.current) return;

        const initAd = () => {
            if (window.aclib && containerRef.current) {
                try {
                    window.aclib.runBanner({
                        zoneId: zoneId,
                    });
                    adInitialized.current = true;
                } catch (error) {
                    console.error('AdCash banner initialization failed:', error);
                }
            }
        };

        // Check if aclib is already loaded
        if (window.aclib) {
            initAd();
        } else {
            // Wait for the script to load
            const checkInterval = setInterval(() => {
                if (window.aclib) {
                    clearInterval(checkInterval);
                    initAd();
                }
            }, 100);

            // Cleanup interval after 10 seconds if aclib never loads
            const timeout = setTimeout(() => {
                clearInterval(checkInterval);
            }, 10000);

            return () => {
                clearInterval(checkInterval);
                clearTimeout(timeout);
            };
        }
    }, [zoneId]);

    return (
        <div className={`adcash-ad-container flex justify-center ${className}`}>
            <div
                ref={containerRef}
                id={`adcash-banner-${zoneId}`}
                className="adcash-banner"
                style={{ minWidth: '300px', minHeight: '100px' }}
            >
                {/* AdCash banner will be rendered here */}
            </div>
        </div>
    );
}
