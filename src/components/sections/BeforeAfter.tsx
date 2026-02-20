import { useCallback, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Draggable Before/After comparison slider.
 * Shows "generic template" vs "UpMarket premium" — pure CSS + JS.
 */
export function BeforeAfter() {
    const { t } = useLanguage();
    const sectionRef = useScrollReveal<HTMLElement>();
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState(50);
    const dragging = useRef(false);

    const updatePosition = useCallback((clientX: number) => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        setPosition((x / rect.width) * 100);
    }, []);

    const onPointerDown = useCallback((e: React.PointerEvent) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        updatePosition(e.clientX);
    }, [updatePosition]);

    const onPointerMove = useCallback((e: React.PointerEvent) => {
        if (!dragging.current) return;
        updatePosition(e.clientX);
    }, [updatePosition]);

    const onPointerUp = useCallback(() => {
        dragging.current = false;
    }, []);

    return (
        <section ref={sectionRef} className="section-dark relative">
            <div className="gradient-mesh" />
            <div className="grid-overlay" />

            <div className="container-premium relative">
                <div className="text-center max-w-2xl mx-auto" data-reveal>
                    <p className="eyebrow">{t.beforeAfter.eyebrow}</p>
                    <h2 className="headline mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                        {t.beforeAfter.headline}
                    </h2>
                    <p className="subhead mt-4 mx-auto">{t.beforeAfter.subhead}</p>
                </div>

                <div className="mt-14" data-reveal="scale">
                    <div
                        ref={containerRef}
                        className="ba-container mx-auto max-w-4xl"
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={onPointerUp}
                    >
                        {/* BEFORE (ugly generic site) */}
                        <div className="ba-layer" style={{ zIndex: 1 }}>
                            <div className="w-full h-full bg-gray-100 flex flex-col">
                                {/* Fake generic header */}
                                <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
                                    <div className="text-gray-800 font-bold text-sm">GenericSite.com</div>
                                    <div className="flex gap-4 text-xs text-gray-400">
                                        <span>Home</span><span>About</span><span>Services</span><span>Contact</span>
                                    </div>
                                </div>
                                {/* Awful hero */}
                                <div className="flex-1 bg-gradient-to-b from-blue-500 to-blue-700 flex flex-col items-center justify-center p-6 text-center">
                                    <div className="text-white text-xl font-bold sm:text-2xl">Welcome to Our Company!</div>
                                    <div className="text-white/70 text-sm mt-2 max-w-md">We provide the best services for your business needs. Contact us today!</div>
                                    <div className="mt-4 px-5 py-2 bg-red-500 text-white rounded text-xs font-bold">CLICK HERE!!!</div>
                                </div>
                                {/* Ugly cards */}
                                <div className="grid grid-cols-3 gap-2 p-4 bg-white">
                                    {["Service 1", "Service 2", "Service 3"].map(s => (
                                        <div key={s} className="bg-gray-50 border border-gray-200 rounded p-3 text-center">
                                            <div className="text-gray-700 text-xs font-bold">{s}</div>
                                            <div className="text-gray-400 text-[9px] mt-1">Lorem ipsum dolor sit amet</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* AFTER (UpMarket premium) */}
                        <div
                            className="ba-layer"
                            style={{ zIndex: 2, clipPath: `inset(0 ${100 - position}% 0 0)` }}
                        >
                            <div className="w-full h-full bg-[#050510] flex flex-col">
                                {/* Premium nav */}
                                <div className="bg-[#050510]/90 backdrop-blur-md border-b border-white/[0.06] px-6 py-3 flex items-center justify-between">
                                    <div className="text-white font-bold text-sm">UpMarket<span className="text-[#00d4ff]">.</span></div>
                                    <div className="flex gap-4 text-xs text-white/40">
                                        <span>Services</span><span>Case Studies</span><span>About</span>
                                        <span className="px-3 py-0.5 rounded-md bg-gradient-to-r from-purple-500 to-[#00d4ff] text-white text-[10px] font-semibold">Book a Call</span>
                                    </div>
                                </div>
                                {/* Premium hero */}
                                <div className="flex-1 bg-gradient-to-br from-[#050510] via-purple-900/20 to-[#050510] flex flex-col items-start justify-center p-6 sm:p-10">
                                    <div className="text-[#00d4ff] text-[9px] font-semibold tracking-[0.2em] uppercase">Conversion-focused studio</div>
                                    <div className="text-white text-xl font-bold mt-2 sm:text-2xl" style={{ letterSpacing: "-0.03em" }}>
                                        Websites that <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#00d4ff]">close.</span>
                                    </div>
                                    <div className="text-white/40 text-xs mt-2 max-w-sm leading-relaxed">Conversion-focused digital infrastructure for serious brands.</div>
                                    <div className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-[#00d4ff] text-white rounded-lg text-[10px] font-semibold shadow-lg shadow-[#00d4ff]/20">
                                        Book a Strategy Call →
                                    </div>
                                </div>
                                {/* Premium cards */}
                                <div className="grid grid-cols-3 gap-2 p-4">
                                    {["+42%", "-31%", "94/100"].map((v, i) => (
                                        <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-3">
                                            <div className="text-[#00d4ff] text-sm font-bold">{v}</div>
                                            <div className="text-white/30 text-[9px] mt-0.5">{["Enquiries", "Bounce rate", "PageSpeed"][i]}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Slider handle */}
                        <div
                            className="ba-handle"
                            style={{ left: `${position}%`, transform: "translateX(-50%)" }}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#00d4ff] shadow-lg shadow-[#00d4ff]/40 flex items-center justify-center text-white font-bold text-xs">
                                ⟨⟩
                            </div>
                        </div>

                        {/* Labels */}
                        <div className="absolute bottom-4 left-4 z-20 text-xs font-semibold text-red-400/70 bg-black/50 backdrop-blur px-2 py-1 rounded">
                            {t.beforeAfter.before}
                        </div>
                        <div className="absolute bottom-4 right-4 z-20 text-xs font-semibold text-[#00d4ff] bg-black/50 backdrop-blur px-2 py-1 rounded">
                            {t.beforeAfter.after}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
