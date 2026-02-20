import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="section-dark relative">
      <div className="gradient-mesh" />
      <div className="grid-overlay" />

      <div className="container-premium relative">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <h2 className="headline mt-2 text-3xl font-bold sm:text-4xl">
            {t.testimonials.headline}
          </h2>
          <p className="subhead mt-3">{t.testimonials.subhead}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {t.testimonials.items.map((it: { quote: string; name: string; meta: string }) => (
            <div key={it.name} className="glass-card p-8 group">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-purple-400 text-purple-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-white/60 italic">"{it.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white font-semibold text-sm">
                  {it.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{it.name}</div>
                  <div className="text-xs text-white/40">{it.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}