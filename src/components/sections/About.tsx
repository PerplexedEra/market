import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={sectionRef} className="section-cream relative">
      <div className="container-premium relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div data-reveal>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 className="headline mt-4 text-4xl sm:text-5xl lg:text-[4rem] font-extrabold font-sans">
              {t.about.headline}
            </h2>
            <p className="subhead mt-6 font-serif italic text-xl">
              {t.about.subhead}
            </p>

            <div className="mt-12 w-full h-64 rounded-3xl overflow-hidden shadow-outseta">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-5" data-reveal>
            {t.about.bullets.map((b: string) => (
              <div key={b} className="card-outseta p-6 flex items-center gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-sky/50 text-brand-blue">
                  <Check className="h-5 w-5" />
                </div>
                <span className="font-sans text-base font-bold text-brand-navy">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}