import { useEffect, useRef, useState } from "react";

/**
 * Animated count-up that triggers when element is visible.
 * Handles numbers like "+150%", "5+", "7–14 days", "< 24h".
 * Extracts the numeric part and animates it upward.
 */
export function useCountUp(
    target: string,
    duration = 1800
): { ref: React.RefObject<HTMLDivElement | null>; display: string } {
    const ref = useRef<HTMLDivElement>(null);
    const [display, setDisplay] = useState(target);
    const hasRun = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasRun.current) {
                        hasRun.current = true;

                        // Extract the first number from the string
                        const match = target.match(/(\d+)/);
                        if (!match) {
                            setDisplay(target);
                            return;
                        }

                        const numericTarget = parseInt(match[1], 10);
                        const prefix = target.slice(0, match.index);
                        const suffix = target.slice((match.index ?? 0) + match[1].length);

                        const startTime = performance.now();

                        function animate(now: number) {
                            const elapsed = now - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            // Ease out cubic
                            const eased = 1 - Math.pow(1 - progress, 3);
                            const current = Math.round(numericTarget * eased);
                            setDisplay(`${prefix}${current}${suffix}`);
                            if (progress < 1) requestAnimationFrame(animate);
                        }

                        requestAnimationFrame(animate);
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);

    return { ref, display };
}
