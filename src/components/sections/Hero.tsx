import { useEffect, useRef } from "react";
import { Sparkles, TrendingUp, Zap, Shield } from "lucide-react";
import gsap from "gsap";
import { useLanguage } from "@/i18n/LanguageContext";
import { MarkerUnderline, HandArrow } from "@/components/ui/Handdrawn";

export function Hero() {
  const { t } = useLanguage();

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

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
      className="relative min-h-screen flex items-center overflow-hidden bg-warm-mesh pt-20"
    >
      <div className="container-premium relative py-20 lg:py-32 w-full z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT — CONTENT */}
          <div ref={contentRef} className="max-w-xl text-center lg:text-left relative">

            {/* Hand-drawn Arrow pointing to headline from top left */}
            <div className="absolute -top-12 -left-8 hidden lg:block opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">
              <div className="relative">
                <HandArrow color="#e0248c" className="w-16 h-16 rotate-12" />
                <span className="absolute -top-6 -left-12 font-sans font-bold text-brand-magenta text-xs tracking-widest uppercase rotate-[-10deg]">
                  Your new standard
                </span>
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-brand-magenta/20 bg-brand-magenta/5 px-4 py-1.5 text-xs font-bold text-brand-magenta tracking-wide">
              <Sparkles className="h-3.5 w-3.5" />
              Conversion-focused digital studio
            </div>

            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-sans font-extrabold tracking-tighter text-brand-eggplant leading-[1.05]">
              {t.hero.headline1}
              <br />
              <span className="text-brand-magenta">{t.hero.headline2}</span>
            </h1>

            <div className="mt-8 relative inline-block text-left">
              <p className="font-serif text-xl sm:text-2xl leading-relaxed text-brand-eggplant/80 italic">
                Everything you need to grow, from <strong className="font-sans font-bold not-italic">high-converting landing pages</strong> to <strong className="font-sans font-bold not-italic">custom web apps</strong>.
              </p>
              <MarkerUnderline className="opacity-60 -bottom-2 w-full left-0 hidden sm:block" />
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#contact" className="btn-primary">
                {t.hero.ctaPrimary}
              </a>
              <a href="#about" className="btn-secondary">
                Is UpMarket for me?
              </a>
            </div>

            <div className="mt-10 font-sans text-xs font-bold text-brand-eggplant/40 uppercase tracking-widest">
              {t.hero.note}
            </div>
          </div>

          {/* RIGHT — FLOATING MOCKUPS */}
          <div ref={mediaRef} className="relative hidden lg:block">
            {/* Main nested card representing the product */}
            <div className="card-advanced w-full max-w-lg ml-auto relative z-10 animate-float-slow">
              <div className="card-inner overflow-hidden flex flex-col p-0">
                <div className="flex items-center gap-2 border-b border-brand-eggplant/5 px-5 py-4 bg-brand-sand/30">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                  <div className="ml-4 text-xs font-sans font-bold tracking-widest uppercase text-brand-eggplant/50">
                    Live Client Dashboard
                  </div>
                </div>

                <div className="p-8 bg-white flex-1">
                  <div className="flex items-center justify-between mb-8">
                    <div className="font-sans font-bold text-xl text-brand-eggplant">Revenue Overview</div>
                    <div className="pill !bg-brand-magenta/10 !text-brand-magenta">↑ 42%</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="rounded-2xl bg-brand-sand/50 p-5">
                      <TrendingUp className="h-5 w-5 text-brand-magenta mb-2" />
                      <div className="text-2xl font-extrabold text-brand-eggplant">12,847</div>
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-eggplant/50 mt-1">Visitors</div>
                    </div>
                    <div className="rounded-2xl bg-[#fff5eb] p-5">
                      <Zap className="h-5 w-5 text-brand-magenta mb-2" />
                      <div className="text-2xl font-extrabold text-brand-eggplant">486</div>
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-eggplant/50 mt-1">Conversions</div>
                    </div>
                  </div>

                  {/* Fake chart bars */}
                  <div className="flex items-end gap-2 h-24">
                    {[35, 55, 40, 70, 60, 85, 75, 90, 80, 95, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md"
                        style={{
                          height: `${h}%`,
                          background: i === 10 ? 'var(--brand-magenta)' : 'var(--brand-peach)',
                          opacity: i === 10 ? 1 : 0.6
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating mini card — top right (Pastel Yellow) */}
            <div
              className="absolute -top-8 -right-8 card-advanced z-20 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="card-pastel-yellow p-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-[#ffe566] flex items-center justify-center shadow-sm">
                  <Shield className="h-5 w-5 text-brand-eggplant" />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-brand-eggplant">94/100</div>
                  <div className="text-xs font-bold tracking-widest uppercase text-brand-eggplant/60">PageSpeed</div>
                </div>
              </div>
            </div>

            {/* Floating mini card — bottom left (Pastel Pink) */}
            <div
              className="absolute -bottom-8 -left-12 card-advanced z-20 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="card-pastel-pink p-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-[#ffccd5] flex items-center justify-center shadow-sm">
                  <TrendingUp className="h-5 w-5 text-brand-magenta" />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-brand-eggplant">+42%</div>
                  <div className="text-xs font-bold tracking-widest uppercase text-brand-eggplant/60">Conversions</div>
                </div>
              </div>
            </div>

            {/* Annotation for floating card */}
            <div className="absolute -bottom-16 -left-32 z-30 opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]">
              <span className="font-sans font-bold text-brand-magenta text-xs tracking-widest uppercase rotate-[-15deg] block mb-2">
                Real results
              </span>
              <HandArrow color="#e0248c" className="w-12 h-12 rotate-[120deg] scale-x-[-1]" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}