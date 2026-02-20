import { useEffect, useRef } from "react";

/**
 * Scroll-reveal hook using IntersectionObserver.
 * Adds `.revealed` class when element enters viewport.
 * Use with CSS: opacity 0 → 1, translateY 24px → 0.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
    options?: { threshold?: number; rootMargin?: string; once?: boolean }
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } = options ?? {};

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed");
                        if (once) observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin }
        );

        // Observe the element itself AND all children with [data-reveal]
        observer.observe(el);
        el.querySelectorAll("[data-reveal]").forEach((child) => observer.observe(child));

        return () => observer.disconnect();
    }, [options]);

    return ref;
}
