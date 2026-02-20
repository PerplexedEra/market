import { useEffect, useRef } from "react";
import * as THREE from "three";

type VantaEffect = { destroy: () => void };

export default function VantaGlobe() {
    const elRef = useRef<HTMLDivElement | null>(null);
    const vantaRef = useRef<VantaEffect | null>(null);

    useEffect(() => {
        let cancelled = false;

        const init = async () => {
            if (!elRef.current) return;

            const reduceMotion =
                window.matchMedia &&
                window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (reduceMotion) return;

            const GLOBE = (await import("vanta/dist/vanta.globe.min")).default;

            if (cancelled || !elRef.current) return;

            vantaRef.current = GLOBE({
                el: elRef.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,

                // Colors — navy background, gold lines, white secondary
                backgroundColor: 0x0B1D3A,
                color: 0xD4A017,
                color2: 0xffffff,

                size: 1,
                spacing: 15,
                points: 10,
                showDots: true,
                minHeight: 200,
                minWidth: 200,
                scale: 1,
                scaleMobile: 0.7,
                maxDistance: 20,
                backgroundAlpha: 1,
            }) as VantaEffect;
        };

        init();

        return () => {
            cancelled = true;
            vantaRef.current?.destroy();
            vantaRef.current = null;
        };
    }, []);

    return (
        <div
            ref={elRef}
            className="absolute inset-0 z-0"
            style={{ width: "100%", height: "100%" }}
            aria-hidden="true"
        />
    );
}
