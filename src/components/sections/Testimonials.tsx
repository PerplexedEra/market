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
          <p className="subhead mt-6 mx-auto">{t.testimonials.subhead}</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 items-stretch">
          {t.testimonials.items.map((item: { readonly quote: string; readonly name: string; readonly meta: string }) => (
            <div key={item.name} data-reveal className="card-outseta p-8 sm:p-10 flex flex-col h-full">
              <Quote className="h-8 w-8 text-brand-blue/20 mb-6" />

              <p className="font-serif text-lg leading-relaxed text-brand-navy/70 flex-1 italic">
                "{item.quote}"
              </p>

              <div className="mt-8 pt-6 border-t border-brand-sand">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Star key={starIdx} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <div className="font-sans text-base font-extrabold text-brand-navy">{item.name}</div>
                <div className="font-sans text-xs font-bold uppercase tracking-widest text-brand-navy/40 mt-1">{item.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}