import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section id="cta" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Intense gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-[#0a0a1a] to-cyan-900/30" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[500px] w-[600px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[500px] rounded-full bg-cyan-500/15 blur-[100px]" />
      </div>
      <div className="grid-overlay" />

      <div className="container-premium relative">
        <div className="glass-card-static overflow-hidden">
          <div className="relative p-8 sm:p-12">
            {/* Inner glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />

            <div className="relative max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-400/80">{t.cta.eyebrow}</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t.cta.headline}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{t.cta.subhead}</p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                {t.cta.points.map((p: string) => (
                  <span key={p} className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-purple-300">
                    <Check className="h-3.5 w-3.5" />
                    {p}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a href="#contact" className="btn-primary-premium inline-flex items-center gap-2">
                  {t.cta.primary} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}