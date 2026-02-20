import { useState, useRef, useEffect } from "react";
import type { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import { MoveHorizontal, AlertTriangle, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
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
        <section id="before-after" ref={sectionRef} className="section-cream relative">
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
                    className="relative max-w-5xl mx-auto card-outseta p-3 sm:p-4"
                    data-reveal="scale"
                >
                    <div
                        ref={containerRef}
                        className="group relative h-[400px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-[1.25rem] bg-white cursor-ew-resize select-none"
                        onMouseLeave={() => { setIsDragging(false); }}
                        onMouseMove={handleMouseMove}
                        onTouchMove={handleTouchMove}
                        onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
                        onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
                    >
                        {/* AFTER — Premium */}
                        <div className="absolute inset-0 w-full h-full bg-brand-cream">
                            {/* Animated background element for 'After' */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.08),transparent_50%)]" />

                            <div className="h-full flex flex-col p-8 sm:p-12 lg:p-16">
                                <nav className="flex justify-between items-center mb-12 opacity-80">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-brand-navy flex items-center justify-center">
                                            <div className="w-4 h-4 rounded-sm bg-brand-gold" />
                                        </div>
                                        <span className="font-sans font-extrabold text-xl tracking-tighter text-brand-navy">EliteStudio.</span>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <div className="h-2 w-12 rounded-full bg-brand-sand" />
                                        <div className="h-2 w-8 rounded-full bg-brand-sand" />
                                        <div className="h-8 w-24 rounded-full bg-brand-gold shadow-btn" />
                                    </div>
                                </nav>

                                <div className="max-w-xl relative">
                                    <div className="inline-flex items-center gap-2 pill mb-6">
                                        <Sparkles className="w-3 h-3 text-brand-blue" /> Premium Conversion
                                    </div>
                                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tighter text-brand-navy leading-[1.1] mb-6">
                                        High-end builds for <span className="text-brand-blue">serious brands.</span>
                                    </h3>
                                    <p className="text-lg font-serif italic text-brand-navy/60 mb-10 leading-relaxed">
                                        Minimalist design. Maximum performance. Engineered to turn interest into revenue.
                                    </p>

                                    <div className="flex items-center gap-8">
                                        <div className="h-14 w-40 rounded-full bg-brand-gold shadow-btn flex items-center justify-center text-white font-bold text-sm">Start Project</div>
                                        <div className="flex items-center gap-2 font-bold text-brand-navy/40 text-sm">
                                            View Portfolio <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Success Badge */}
                                    <div className="absolute -right-24 top-10 card-outseta p-5 flex items-center gap-4 rotate-3 bg-white scale-110">
                                        <div className="h-12 w-12 bg-brand-sky/50 rounded-full flex items-center justify-center text-brand-blue">
                                            <TrendingUp className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase font-bold text-brand-navy/40 tracking-widest">Enquiries</div>
                                            <div className="text-2xl font-extrabold text-brand-navy">+314%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BEFORE — Generic / Bad */}
                        <div
                            className="absolute inset-y-0 left-0 w-full overflow-hidden bg-white border-r border-brand-sand"
                            style={{ width: `${position}%` }}
                        >
                            <div className="absolute inset-0 w-full h-full min-w-[300px] flex flex-col bg-[#e5e7eb] p-8 sm:p-12 lg:p-16 font-serif">
                                <nav className="flex justify-between items-center mb-12 border-b border-gray-300 pb-4">
                                    <span className="font-bold text-2xl text-blue-800 tracking-normal uppercase">Business Template #42</span>
                                    <div className="flex gap-6 items-center">
                                        <span className="text-sm font-medium text-gray-600 underline">Services</span>
                                        <span className="text-sm font-medium text-gray-600 underline">About Us</span>
                                        <div className="px-4 py-2 bg-[#ff0000] text-white text-xs font-bold">CONTACT NOW!!</div>
                                    </div>
                                </nav>

                                <div className="max-w-xl mt-10">
                                    <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                        We are the best business solutions company in the area
                                    </h3>
                                    <p className="text-base text-gray-600 mb-8 leading-relaxed font-sans">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </p>
                                    <div className="px-8 py-3 bg-[#0000ff] text-white w-fit text-sm font-bold shadow-lg">
                                        LEARN MORE
                                    </div>

                                    <div className="mt-12 bg-white p-6 border-4 border-red-500 flex items-center gap-6 shadow-xl">
                                        <AlertTriangle className="w-10 h-10 text-red-600 animate-pulse" />
                                        <div>
                                            <div className="text-lg font-bold text-red-700">CRITICAL ERROR: High Bounce Rate</div>
                                            <div className="text-sm text-gray-500 font-sans">Users are leaving your site because it looks dated.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SLIDER */}
                        <div
                            className="absolute top-0 bottom-0 w-0.5 bg-brand-sand group-hover:bg-brand-blue transition-colors z-20 cursor-col-resize"
                            style={{ left: `${position}%` }}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-brand-blue border-4 border-white shadow-outseta-hover flex items-center justify-center transition-transform group-hover:scale-110 active:scale-95 z-30">
                                <MoveHorizontal className="h-6 w-6 text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 pill bg-white border border-brand-sand shadow-outseta z-30">
                        Slide to Compare
                    </div>
                </div>
            </div>
        </section>
    );
}
