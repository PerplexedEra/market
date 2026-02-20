import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Testimonials() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-light relative">
      <div className="gradient-mesh" />
      <div className="grid-overlay" />

      <div className="container-premium relative">
        <div className="text-center max-w-2xl mx-auto" data-reveal>
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <h2 className="headline mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t.testimonials.headline}
          </h2>
          <p className="subhead mt-4 mx-auto">{t.testimonials.subhead}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.testimonials.items.map((item: { readonly quote: string; readonly name: string; readonly meta: string }) => (
            <div key={item.name} data-reveal className="glass-card p-7 flex flex-col">
              <Quote className="h-6 w-6 text-[#00d4ff]/30 mb-4" />

              <p className="text-sm leading-relaxed text-white/60 flex-1 italic">
                "{item.quote}"
              </p>

              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#00d4ff] text-[#00d4ff]" />
                  ))}
                </div>
                <div className="text-sm font-semibold text-white">{item.name}</div>
                <div className="text-xs text-white/35">{item.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}