import { ArrowRight, Monitor, Smartphone, TrendingUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ICONS = [Monitor, Smartphone, TrendingUp];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-light relative">
      <div className="gradient-mesh-intense" />
      <div className="grid-overlay" />

      <div className="container-premium relative">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2 className="headline mt-2 text-3xl font-bold sm:text-4xl">
              {t.services.headline}
            </h2>
            <p className="subhead mt-3">{t.services.subhead}</p>
          </div>

          <a href="#contact" className="btn-primary-premium w-fit shrink-0">
            {t.services.cta} <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {t.services.cards.map((s: { readonly title: string; readonly description: string; readonly points: readonly string[] }, idx: number) => {
            const Icon = ICONS[idx] ?? Monitor;
            return (
              <div key={s.title} className="glass-card glow-card p-6 group">
                <div className="icon-badge-sm text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/40">{s.description}</p>

                <ul className="mt-5 space-y-2 text-sm text-white/50">
                  {s.points.map((p: string) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}