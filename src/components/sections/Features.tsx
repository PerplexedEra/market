import { BarChart3, Globe2, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ICONS = [Zap, Globe2, BarChart3, ShieldCheck];

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="section-dark relative">
      <div className="gradient-mesh" />
      <div className="grid-overlay" />
      <div className="section-divider" />

      <div className="container-premium relative">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.features.eyebrow}</p>
          <h2 className="headline mt-2 text-3xl font-bold sm:text-4xl">
            {t.features.headline}
          </h2>
          <p className="subhead mt-3">{t.features.subhead}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((it: { title: string; description: string }, idx: number) => {
            const Icon = ICONS[idx] ?? Zap;
            return (
              <div key={it.title} className="glass-card glow-card p-6 group">
                <div className="icon-badge-sm text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white group-hover:text-purple-300 transition-colors">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/40">{it.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}