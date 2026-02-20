import { useEffect, useRef, useCallback } from "react";
import { ArrowRight, Sparkles, TrendingUp, Zap, Shield } from "lucide-react";
import gsap from "gsap";
import { useLanguage } from "@/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  /* Mouse-reactive spotlight */
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!spotlightRef.current || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.left = `${x}px`;
    spotlightRef.current.style.top = `${y}px`;
    spotlightRef.current.style.opacity = "1";
  }, []);

  const onMouseLeave = useCallback(() => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" }
      );

      gsap.fromTo(
        mediaRef.current,
        { opacity: 0, y: 50, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, delay: 0.4, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Mouse spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute -z-5"
        style={{
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.07) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          opacity: 0,
          transition: "opacity 0.4s",
        }}
      />

      {/* Background layers */}
      <div className="gradient-mesh-intense" />
      <div className="grid-overlay" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-purple-600/8 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-[#00d4ff]/5 blur-[120px]" />
        <div className="absolute top-0 left-0 h-[300px] w-[400px] rounded-full bg-pink-500/3 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-32 lg:py-40 w-full">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT — CONTENT */}
          <div ref={contentRef} className="max-w-xl text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 px-4 py-1.5 text-xs font-medium text-[#00d4ff] backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Conversion-focused digital studio
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
              <span className="text-white">{t.hero.headline1}</span>
              <br />
              <span className="text-gradient">{t.hero.headline2}</span>
            </h1>

            <p className="mt-7 text-base leading-relaxed text-white/45 sm:text-lg max-w-lg">
              {t.hero.subhead}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#contact" className="btn-primary-premium">
                {t.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#portfolio" className="btn-secondary-premium">
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="mt-8 text-sm text-white/25">{t.hero.note}</div>
          </div>

          {/* RIGHT — FLOATING MOCKUPS */}
          <div ref={mediaRef} className="relative hidden lg:block">
            {/* Glow */}
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-purple-600/15 via-[#00d4ff]/8 to-transparent blur-3xl" />

            {/* Main browser mockup */}
            <div className="relative rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-xl shadow-2xl overflow-hidden animate-float-slow">
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="text-xs font-medium text-white/30">{t.hero.previewTitle}</div>
              </div>
              <div className="p-4">
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/20 via-[#050510] to-[#00d4ff]/10 p-6">
                  {/* Fake dashboard content */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-white/70">Revenue Overview</div>
                    <div className="text-xs text-[#06d6a0]">↑ 42% this month</div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Visitors", value: "12,847", icon: TrendingUp },
                      { label: "Conversions", value: "486", icon: Zap },
                      { label: "PageSpeed", value: "94", icon: Shield },
                    ].map((s) => (
                      <div key={s.label} className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-3">
                        <s.icon className="h-3.5 w-3.5 text-[#00d4ff] mb-1.5" />
                        <div className="text-lg font-bold text-white">{s.value}</div>
                        <div className="text-[10px] text-white/35">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  {/* Fake chart bars */}
                  <div className="flex items-end gap-1.5 h-16">
                    {[35, 55, 40, 70, 60, 85, 75, 90, 80, 95, 88, 92].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t"
                        style={{
                          height: `${h}%`,
                          background: `linear-gradient(to top, rgba(0, 212, 255, ${0.3 + i * 0.05}), rgba(139, 92, 246, ${0.2 + i * 0.03}))`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating mini card — top right */}
            <div
              className="absolute -top-6 -right-4 rounded-xl border border-white/8 bg-white/[0.04] backdrop-blur-xl p-3 shadow-xl animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#06d6a0] to-[#00d4ff] flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">+42%</div>
                  <div className="text-[10px] text-white/40">Conversions</div>
                </div>
              </div>
            </div>

            {/* Floating mini card — bottom left */}
            <div
              className="absolute -bottom-4 -left-6 rounded-xl border border-white/8 bg-white/[0.04] backdrop-blur-xl p-3 shadow-xl animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">94/100</div>
                  <div className="text-[10px] text-white/40">PageSpeed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}