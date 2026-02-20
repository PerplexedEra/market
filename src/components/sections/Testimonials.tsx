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
          {t.testimonials.items.map((item: { readonly quote: string; readonly name: string; readonly meta: string }, i: number) => {
            const innerColor = i % 3 === 0 ? "card-pastel-yellow" : i % 3 === 1 ? "card-pastel-peach" : "card-pastel-pink";

            return (
              <div key={item.name} data-reveal className="card-advanced group flex flex-col items-stretch h-full">
                <div className={`${innerColor} flex flex-col`}>
                  <Quote className="h-8 w-8 text-brand-eggplant/10 mb-6 group-hover:text-brand-magenta transition-colors duration-300" />

                  <p className="font-serif text-xl leading-relaxed text-brand-eggplant/80 flex-1 italic">
                    "{item.quote}"
                  </p>

                  <div className="mt-8 pt-6 border-t border-brand-eggplant/10">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-brand-eggplant text-brand-eggplant" />
                      ))}
                    </div>
                    <div className="font-sans text-base font-extrabold text-brand-eggplant">{item.name}</div>
                    <div className="font-sans text-xs font-bold uppercase tracking-widest text-brand-eggplant/50 mt-1">{item.meta}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}