import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Testimonials() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-white relative">
      <div className="container-premium relative">
        <div className="text-center max-w-2xl mx-auto" data-reveal>
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <h2 className="headline mt-4 text-4xl sm:text-5xl lg:text-[4rem] font-extrabold font-sans">
            {t.testimonials.headline}
          </h2>
          <p className="subhead mt-6 mx-auto font-serif italic text-xl">{t.testimonials.subhead}</p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3 items-stretch">
          {t.testimonials.items.map((item: { readonly quote: string; readonly name: string; readonly meta: string }) => {
            return (
              <div key={item.name} data-reveal className="group flex flex-col items-stretch h-full rounded-[2rem] bg-brand-sand/30 p-8 sm:p-10 border border-brand-slate/5 transition-all duration-300 hover:shadow-premium hover:-translate-y-2 hover:bg-white">
                <Quote className="h-8 w-8 text-brand-gold/30 mb-6 group-hover:text-brand-gold transition-colors duration-300" />

                <p className="font-serif text-xl leading-relaxed text-brand-slate/80 flex-1 italic">
                  "{item.quote}"
                </p>

                <div className="mt-8 pt-6 border-t border-brand-slate/10">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, starIdx) => (
                      <Star key={starIdx} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <div className="font-sans text-base font-extrabold text-brand-slate">{item.name}</div>
                  <div className="font-sans text-xs font-bold uppercase tracking-widest text-brand-slate/50 mt-1">{item.meta}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}