import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useLanguage } from "@/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );

      gsap.fromTo(
        mediaRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="gradient-mesh-intense" />
      <div className="grid-overlay" />

      {/* Additional blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-cyan-500/8 blur-[100px]" />
        <div className="absolute top-0 left-0 h-[300px] w-[400px] rounded-full bg-pink-500/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-28 lg:py-32 w-full">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div ref={contentRef} className="max-w-xl text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-purple-300 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Premium digital studio
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl">
              <span className="text-white">{t.hero.headline1} </span>
              <span className="text-gradient">{t.hero.headline2}</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-white/50 sm:text-lg max-w-lg">
              {t.hero.subhead}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#contact" className="btn-primary-premium">
                {t.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#portfolio" className="btn-secondary-premium">
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="mt-6 text-sm text-white/30">{t.hero.note}</div>
          </div>

          {/* RIGHT MEDIA CARD */}
          <div ref={mediaRef} className="relative">
            {/* Glow behind card */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-600/20 via-cyan-500/10 to-pink-500/10 blur-2xl" />

            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="text-xs font-medium text-white/40">{t.hero.previewTitle}</div>
              </div>

              <div className="p-3">
                <div className="relative rounded-xl overflow-hidden bg-white/5">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/5" />
                  <img
                    src="/dashboard-hero.jpg"
                    alt="UpMarket preview"
                    className="w-full rounded-xl object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm lg:justify-start">
              {t.hero.chips.map((b: string) => (
                <span
                  key={b}
                  className="rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1 text-white/50 text-xs"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}