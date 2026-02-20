import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function CTA() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="cta" ref={sectionRef} className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#050510] to-[#00d4ff]/15" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[500px] w-[600px] rounded-full bg-purple-600/15 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[500px] rounded-full bg-[#00d4ff]/10 blur-[120px]" />
      </div>
      <div className="grid-overlay" />

      <div className="container-premium relative">
        <div className="glass-card-static overflow-hidden" data-reveal="scale">
          <div className="relative p-10 sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-[#00d4ff]/5" />

            <div className="relative max-w-2xl">
              <p className="eyebrow">{t.cta.eyebrow}</p>
              <h2 className="headline mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                {t.cta.headline}
              </h2>
              <p className="subhead mt-4">{t.cta.subhead}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                {t.cta.points.map((p: string) => (
                  <span key={p} className="inline-flex items-center gap-2 rounded-full border border-[#06d6a0]/20 bg-[#06d6a0]/8 px-3.5 py-1.5 text-xs font-medium text-[#06d6a0]">
                    <Check className="h-3.5 w-3.5" />
                    {p}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="btn-primary-premium">
                  {t.cta.primary} <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#portfolio" className="btn-secondary-premium">
                  {t.cta.secondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}