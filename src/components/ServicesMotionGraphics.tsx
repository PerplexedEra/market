import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { Code2, Search, Share2, Smartphone, Users } from "lucide-react";

type Item = {
  Icon: React.ComponentType<{ className?: string }>;
  className: string;
  intensity?: "low" | "med";
};

const ITEMS: Item[] = [
  { Icon: Code2, className: "top-[12%] left-[10%] text-cyan-600/25", intensity: "med" },
  { Icon: Search, className: "top-[18%] left-[72%] text-indigo-600/22", intensity: "med" },
  { Icon: Share2, className: "top-[62%] left-[12%] text-orange-500/20", intensity: "low" },
  { Icon: Smartphone, className: "top-[54%] left-[56%] text-emerald-600/20", intensity: "low" },
  { Icon: Users, className: "top-[78%] left-[78%] text-pink-500/18", intensity: "low" },
];

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    (navigator?.maxTouchPoints ?? 0) > 0 ||
    window.matchMedia?.("(pointer: coarse)")?.matches
  );
}

export default function ServicesMotionGraphics() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);

  const touch = useMemo(() => isTouchDevice(), []);

  useEffect(() => {
    if (!wrapRef.current) return;

    const ctx = gsap.context(() => {
      const reduce = touch; // treat mobile/touch as “reduced motion / tighter”

      nodesRef.current.forEach((node, index) => {
        if (!node) return;

        const item = ITEMS[index];
        const low = item?.intensity === "low";

        // Mobile: fewer elements visible (hide low intensity icons)
        if (reduce && low) {
          gsap.set(node, { opacity: 0 });
          return;
        }

        // Mobile: smaller movement + slower
        const xRange = reduce ? 28 : 70;
        const yRange = reduce ? 18 : 45;

        // Mobile: smaller icons + softer presence
        gsap.set(node, {
          x: 0,
          y: 0,
          rotate: gsap.utils.random(-5, 5),
          scale: reduce ? gsap.utils.random(0.85, 0.98) : gsap.utils.random(0.95, 1.1),
          opacity: reduce ? 0.55 : 1,
        });

        gsap.to(node, {
          x: () => gsap.utils.random(-xRange, xRange),
          y: () => gsap.utils.random(-yRange, yRange),
          rotate: () => gsap.utils.random(-8, 8),
          scale: () =>
            reduce ? gsap.utils.random(0.85, 0.98) : gsap.utils.random(0.95, 1.12),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: reduce ? gsap.utils.random(7, 10) : gsap.utils.random(5, 8),
          delay: index * (reduce ? 0.15 : 0.25),
        });
      });
    }, wrapRef);

    return () => ctx.revert();
  }, [touch]);

  return (
    <div ref={wrapRef} className="relative h-full w-full">
      {/* glow wash */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-200/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-sky-200/10 blur-3xl" />
      </div>

      {ITEMS.map(({ Icon, className }, i) => (
        <div
          key={i}
          ref={(el) => {
            nodesRef.current[i] = el;
          }}
          className={`absolute ${className}`}
          aria-hidden="true"
        >
          {/* Mobile: smaller icon, desktop: bigger */}
          <Icon className="h-8 w-8 md:h-10 md:w-10" />
        </div>
      ))}
    </div>
  );
}
