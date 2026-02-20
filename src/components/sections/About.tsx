import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-light relative">
      <div className="gradient-mesh" />
      <div className="grid-overlay" />

      <div className="container-premium relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 className="headline mt-2 text-3xl font-bold sm:text-4xl">
              {t.about.headline}
            </h2>
            <p className="subhead mt-3">{t.about.subhead}</p>

            <div className="mt-8 space-y-3">
              {t.about.bullets.map((p: string) => (
                <div key={p} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-400">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-sm text-white/60">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass-card-static p-6">
              <div className="text-sm font-semibold text-purple-300">UpMarket Digital</div>
              <p className="mt-2 text-sm text-white/40 leading-relaxed">
                Premium UI, fast builds, and a clean system that helps your brand look
                credible — not cluttered.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card-static p-5">
                <div className="text-xs font-medium text-white/40">Delivery</div>
                <div className="mt-1 text-sm font-semibold text-white">Fast & reliable</div>
              </div>
              <div className="glass-card-static p-5">
                <div className="text-xs font-medium text-white/40">Quality</div>
                <div className="mt-1 text-sm font-semibold text-white">Premium finish</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}