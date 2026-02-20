import { useState, useRef, useEffect } from "react";
import type { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import { MoveHorizontal, AlertTriangle, TrendingUp, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function BeforeAfter() {
    const { t } = useLanguage();
    const [position, setPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useScrollReveal<HTMLElement>();

    const handleMove = (clientX: number) => {
        if (containerRef.current) {
            const { left, width } = containerRef.current.getBoundingClientRect();
            const x = clientX - left;
            const newPos = Math.max(0, Math.min(100, (x / width) * 100));
            setPosition(newPos);
        }
    };

    const handleMouseMove = (e: ReactMouseEvent) => {
        if (isDragging) handleMove(e.clientX);
    };

    const handleTouchMove = (e: ReactTouchEvent) => {
        if (isDragging) handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        const handleMouseUp = () => setIsDragging(false);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchend", handleMouseUp);
        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchend", handleMouseUp);
        };
    }, []);

    return (
        <section id="before-after" ref={sectionRef} className="section-warm relative">
            <div className="container-premium relative">
                <div className="text-center max-w-3xl mx-auto mb-16" data-reveal>
                    <p className="eyebrow">{t.beforeAfter.eyebrow}</p>
                    <h2 className="headline mt-4 text-4xl sm:text-5xl lg:text-[4rem] font-extrabold font-sans">
                        {t.beforeAfter.headline}
                    </h2>
                    <p className="subhead mt-6 mx-auto">
                        {t.beforeAfter.subhead}
                    </p>
                </div>

                <div
                    className="relative max-w-5xl mx-auto rounded-[2rem] p-3 sm:p-4 bg-brand-sand/50 shadow-premium border border-white/50 backdrop-blur-xl"
                    data-reveal="scale"
                >
                    <div
                        ref={containerRef}
                        className="group relative h-[400px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-[1.5rem] bg-white cursor-ew-resize select-none"
                        onMouseLeave={() => { setIsDragging(false); }}
                        onMouseMove={handleMouseMove}
                        onTouchMove={handleTouchMove}
                        onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
                        onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
                    >
                        {/* AFTER: The Premium Outseta Design */}
                        <div className="absolute inset-0 w-full h-full bg-brand-cream border border-brand-slate/5">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,183,3,0.05),transparent_50%)]" />

                            <div className="h-full flex flex-col p-8 sm:p-12 lg:p-16">
                                <nav className="flex justify-between items-center mb-12 opacity-80">
                                    <span className="font-sans font-extrabold text-xl tracking-tighter text-brand-slate">Brand™</span>
                                    <div className="flex gap-4 items-center">
                                        <div className="h-8 w-24 rounded-full bg-brand-sand/50" />
                                        <div className="h-8 w-24 rounded-full bg-brand-gold" />
                                    </div>
                                </nav>

                                <div className="max-w-xl relative">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/10 px-3 py-1 text-xs font-bold text-brand-slate mb-6">
                                        <Sparkles className="w-3 h-3 text-brand-gold" /> Premium Upgrade
                                    </div>
                                    <h3 className="text-4xl sm:text-5xl font-sans font-extrabold tracking-tighter text-brand-slate leading-tight mb-4">
                                        The Modern Standard for SaaS.
                                    </h3>
                                    <p className="text-lg font-serif italic text-brand-slate/70 mb-8">
                                        Beautiful typography, refined components, and seamless motion.
                                    </p>
                                    <div className="flex gap-4">
                                        <div className="h-12 w-32 rounded-full bg-brand-gold shadow-btn" />
                                        <div className="h-12 w-32 rounded-full border-2 border-brand-slate/10" />
                                    </div>

                                    <div className="absolute -right-20 top-20 bg-white p-4 rounded-2xl shadow-premium border border-brand-slate/5 flex items-center gap-4 rotate-3">
                                        <div className="h-10 w-10 bg-brand-sand rounded-full flex items-center justify-center text-brand-gold">
                                            <TrendingUp className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase font-bold text-brand-slate/40 tracking-wider">Conversion rate</div>
                                            <div className="text-xl font-extrabold text-brand-slate">+314%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BEFORE: Generic Bad Template */}
                        <div
                            className="absolute inset-y-0 left-0 w-full overflow-hidden bg-white border-r border-brand-slate/10"
                            style={{ width: `${position}%` }}
                        >
                            <div className="absolute inset-0 w-full h-full min-w-[300px] flex flex-col bg-gray-50 p-8 sm:p-12 lg:p-16 border border-gray-200 saturate-50">
                                <nav className="flex justify-between items-center mb-12">
                                    <span className="font-serif text-xl tracking-widest text-[#0F172A]">COMPANY</span>
                                    <div className="flex gap-6 items-center">
                                        <span className="text-sm font-medium text-gray-400">Home</span>
                                        <span className="text-sm font-medium text-gray-400">About</span>
                                        <div className="px-4 py-2 rounded bg-[#0F172A] text-white text-sm font-medium">Contact</div>
                                    </div>
                                </nav>

                                <div className="max-w-xl mt-10">
                                    <h3 className="text-3xl font-sans font-bold text-[#0F172A] mb-4">
                                        We provide business solutions
                                    </h3>
                                    <p className="text-base text-gray-500 mb-8 leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <div className="px-6 py-3 bg-blue-600 text-white w-fit text-sm font-medium">
                                        Learn More
                                    </div>

                                    <div className="mt-12 bg-white p-4 border border-gray-200 flex items-center gap-4">
                                        <AlertTriangle className="w-8 h-8 text-red-500" />
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">High Bounce Rate</div>
                                            <div className="text-xs text-gray-500">Users leave within 3 seconds</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SLIDER HANDLE */}
                        <div
                            className="absolute top-0 bottom-0 w-1 cursor-col-resize group-hover:bg-brand-gold bg-brand-slate/20 transition-colors z-20"
                            style={{ left: `${position}%` }}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-brand-gold border-4 border-white shadow-premium flex items-center justify-center transition-transform group-hover:scale-110 active:scale-95 z-30">
                                <MoveHorizontal className="h-6 w-6 text-brand-slate" />
                            </div>
                        </div>
                    </div>

                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-sans font-bold text-[10px] sm:text-xs uppercase tracking-widest bg-white text-brand-slate border border-brand-slate/10 px-6 py-2 rounded-full shadow-sm z-30">
                        Slide to Compare
                    </div>
                </div>
            </div>
        </section>
    );
}
