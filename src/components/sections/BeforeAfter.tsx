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
        <section ref={sectionRef} className="section-warm relative">

            <div className="container-premium relative">
                <div className="text-center max-w-2xl mx-auto" data-reveal>
                    <p className="eyebrow">{t.beforeAfter.eyebrow}</p>
                    <h2 className="headline mt-4 text-4xl sm:text-5xl lg:text-[4rem] font-extrabold font-sans">
                        {t.beforeAfter.headline}
                    </h2>
                    <p className="subhead mt-6 mx-auto font-serif italic">{t.beforeAfter.subhead}</p>
                </div>

                <div className="mt-20 card-advanced max-w-5xl mx-auto" data-reveal="scale">
                    <div className="card-inner p-0 overflow-hidden relative">

                        <div
                            ref={containerRef}
                            className="ba-container relative cursor-[ew-resize] select-none aspect-[16/10] bg-white rounded-[1.5rem] overflow-hidden"
                            onPointerDown={onPointerDown}
                            onPointerMove={onPointerMove}
                            onPointerUp={onPointerUp}
                        >
                            {/* BEFORE (ugly generic site) */}
                            <div className="absolute inset-0 bg-cover bg-center" style={{ zIndex: 1 }}>
                                <div className="w-full h-full bg-gray-100 flex flex-col">
                                    {/* Fake generic header */}
                                    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
                                        <div className="text-gray-800 font-bold text-sm tracking-tight text-xl">Bizness.</div>
                                        <div className="flex gap-6 text-sm font-medium text-gray-500">
                                            <span>Home</span><span>About</span><span>Services</span><span>Contact</span>
                                        </div>
                                    </div>
                                    {/* Awful hero */}
                                    <div className="flex-1 bg-gradient-to-b from-blue-600 to-blue-800 flex flex-col items-center justify-center p-8 text-center text-white">
                                        <h1 className="text-3xl font-extrabold sm:text-5xl mb-4 leading-tight">Welcome to Our<br />Company Website</h1>
                                        <p className="text-blue-100 mt-2 max-w-lg text-lg mb-8">We provide the best corporate synergy solutions for your business needs.</p>
                                        <div className="px-8 py-4 bg-orange-500 rounded font-bold text-sm shadow cursor-pointer uppercase tracking-widest hover:bg-orange-600">Free Consultation</div>
                                    </div>
                                    {/* Ugly cards */}
                                    <div className="grid grid-cols-3 gap-6 p-8 bg-gray-100">
                                        {["Strategy", "Synergy", "Innovation"].map(s => (
                                            <div key={s} className="bg-white border border-gray-200 shadow rounded p-6 text-center">
                                                <div className="h-10 w-10 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">★</div>
                                                <div className="text-gray-800 font-bold text-lg">{s}</div>
                                                <div className="text-gray-500 text-xs mt-2 leading-relaxed">Leverage agile frameworks to provide a robust synopsis.</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* AFTER (UpMarket premium Outseta style) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ zIndex: 2, clipPath: `inset(0 ${100 - position}% 0 0)` }}
                            >
                                <div className="w-full h-full flex flex-col bg-[#fff8f0]">
                                    {/* Premium nav */}
                                    <div className="bg-white/80 backdrop-blur-xl border-b border-[#1b0d2a]/5 px-8 py-5 flex items-center justify-between">
                                        <div className="text-[#1b0d2a] font-extrabold text-xl tracking-tighter">UpMarket.</div>
                                        <div className="flex gap-8 text-sm font-bold text-[#1b0d2a]/60">
                                            <span>Services</span><span>Case Studies</span><span>About</span>
                                            <span className="px-5 py-2.5 rounded-full bg-[#e0248c] text-white text-xs font-bold shadow-lg shadow-[#e0248c]/30">Book a Call</span>
                                        </div>
                                    </div>
                                    {/* Premium hero */}
                                    <div className="flex-1 bg-warm-mesh flex flex-col items-start justify-center p-8 sm:p-14">
                                        <div className="text-[#e0248c] text-xs font-bold tracking-[0.2em] uppercase mb-4">Conversion-focused studio</div>
                                        <h1 className="text-[#1b0d2a] text-4xl font-extrabold mt-2 sm:text-6xl tracking-tighter leading-[1.05] max-w-2xl">
                                            Websites that <span className="text-[#e0248c]">close.</span><br />Apps that scale.
                                        </h1>
                                        <p className="text-[#1b0d2a]/70 font-serif italic text-xl mt-6 max-w-xl leading-relaxed">Everything you need to grow, from high-converting landing pages to custom web apps.</p>
                                        <div className="mt-10 px-8 py-4 bg-[#1b0d2a] text-white rounded-full text-sm font-bold shadow-xl hover:-translate-y-1 transition-transform">
                                            Book a Strategy Call
                                        </div>
                                    </div>
                                    {/* Premium cards */}
                                    <div className="grid grid-cols-3 gap-6 p-8 bg-white border-t border-[#1b0d2a]/5">
                                        {[
                                            { v: "+42%", l: "Enquiries", c: "bg-[#fffdf0]" },
                                            { v: "-31%", l: "Bounce rate", c: "bg-[#fff0f5]" },
                                            { v: "94/100", l: "PageSpeed", c: "bg-[#fff5eb]" }
                                        ].map((s, i) => (
                                            <div key={i} className={`rounded-3xl p-6 ${s.c} shadow-sm border border-[#1b0d2a]/5`}>
                                                <div className="text-[#1b0d2a] text-3xl font-extrabold tracking-tight">{s.v}</div>
                                                <div className="text-[#1b0d2a]/50 font-sans font-bold text-[10px] uppercase tracking-widest mt-2">{s.l}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Slider handle */}
                            <div
                                className="absolute top-0 bottom-0 w-1 bg-[#1b0d2a] z-10 cursor-[ew-resize]"
                                style={{ left: `${position}%`, transform: "translateX(-50%)" }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1b0d2a] shadow-xl flex items-center justify-center text-white font-bold text-sm tracking-widest border-4 border-white transition-transform hover:scale-110">
                                    ⟨⟩
                                </div>
                            </div>

                            {/* Labels */}
                            <div className="absolute bottom-6 left-6 z-20 text-xs font-bold tracking-widest uppercase text-white bg-blue-900/80 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                                {t.beforeAfter.before}
                            </div>
                            <div className="absolute bottom-6 right-6 z-20 text-xs font-bold tracking-widest uppercase text-white bg-[#e0248c] shadow-lg shadow-[#e0248c]/30 px-4 py-2 rounded-full">
                                {t.beforeAfter.after}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
