import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function CTA() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="cta" ref={sectionRef} className="relative overflow-hidden py-32 sm:py-40 bg-brand-slate">

      {/* Background radial soft light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-brand-gold blur-[140px] opacity-10 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-white blur-[140px] opacity-5 mix-blend-screen" />
      </div>

      <div className="container-premium relative z-10">
        <div className="max-w-3xl mx-auto text-center" data-reveal="scale">

          <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
            {t.cta.eyebrow}
          </p>

          <h2 className="mt-6 text-5xl sm:text-6xl lg:text-[5.5rem] font-sans font-extrabold text-white tracking-tighter leading-[1] drop-shadow-sm">
            {t.cta.headline}
          </h2>

          <p className="mt-8 font-serif italic text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            {t.cta.subhead}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {t.cta.points.map((p: string) => (
              <span key={p} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 font-sans text-sm font-bold text-white shadow-sm backdrop-blur-md">
                <Check className="h-4 w-4 text-brand-gold" />
                {p}
              </span>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-10 py-5 font-sans text-lg font-bold text-brand-slate shadow-premium transition-all duration-300 hover:scale-105 hover:shadow-btn w-full sm:w-auto">
              {t.cta.primary} <ArrowRight className="h-5 w-5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}