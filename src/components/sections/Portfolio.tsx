import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PremiumCard } from "@/components/ui/PremiumCard";

const PORTFOLIO_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
];

export function Portfolio() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="portfolio" ref={sectionRef} className="section-white relative">
      <div className="container-premium relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16" data-reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">{t.portfolio.eyebrow}</p>
            <h2 className="headline mt-4 text-4xl sm:text-5xl lg:text-[4rem] font-extrabold font-sans">
              {t.portfolio.headline}
            </h2>
          </div>
          <button className="btn-secondary w-fit shrink-0">
            {t.portfolio.view} <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {t.portfolio.items.map((caseItem: { readonly title: string; readonly description: string; readonly tags: readonly string[]; readonly metric: string; readonly metricDetail: string }, i: number) => (
            <PremiumCard
              key={caseItem.title}
              index={i}
              category={caseItem.tags[0]}
              title={caseItem.title}
              description={caseItem.metric}
              imageSrc={PORTFOLIO_IMAGES[i % PORTFOLIO_IMAGES.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}