import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={sectionRef} className="section-dark relative">
      <div className="gradient-mesh" />
      <div className="grid-overlay" />

      <div className="container-premium relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div data-reveal="left">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 className="headline mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              {t.about.headline}
            </h2>
            <p className="subhead mt-4">{t.about.subhead}</p>
          </div>

          <div className="space-y-4" data-reveal="right">
            {t.about.bullets.map((b: string) => (
              <div key={b} className="glass-card-static flex items-start gap-4 p-5">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#06d6a0] to-[#00d4ff]">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-sm text-white/55 leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}