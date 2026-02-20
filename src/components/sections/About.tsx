import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={sectionRef} className="section-warm relative border-y border-brand-slate/5">
      <div className="container-premium relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div data-reveal="left">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 className="headline mt-4 text-4xl sm:text-5xl lg:text-[4rem] font-extrabold font-sans">
              {t.about.headline}
            </h2>
            <p className="subhead mt-6 font-serif italic text-xl">
              {t.about.subhead}
            </p>

            {/* Added image to About section to make it richer */}
            <div className="mt-12 w-full h-64 rounded-3xl overflow-hidden shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6" data-reveal="right">
            {t.about.bullets.map((b: string) => (
              <div key={b} className="group overflow-hidden rounded-3xl bg-white shadow-sm border border-brand-slate/5 hover:shadow-premium transition-all duration-300">
                <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold transition-transform duration-300 group-hover:scale-110 shadow-sm">
                    <Check className="h-5 w-5" />
                  </div>
                  <span className="font-sans text-lg font-bold text-brand-slate leading-snug">{b}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}