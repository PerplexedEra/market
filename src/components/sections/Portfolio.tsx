import { ArrowUpRight, TrendingUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
];

export function Portfolio() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="portfolio" ref={sectionRef} className="section-white relative">
      <div className="container-premium relative">
        <div className="text-center max-w-2xl mx-auto" data-reveal>
          <p className="eyebrow">{t.portfolio.eyebrow}</p>
          <h2 className="headline mt-4 text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold font-sans">
            {t.portfolio.headline}
          </h2>
          <p className="subhead mt-6 mx-auto font-serif italic">{t.portfolio.subhead}</p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {t.portfolio.items.map((item: {
            readonly title: string;
            readonly description: string;
            readonly tags: readonly string[];
            readonly metric: string;
            readonly metricDetail: string;
          }, i: number) => (
            <div key={item.title} data-reveal className="card-advanced group">
              <div className="card-inner overflow-hidden p-0 flex flex-col h-full">

                {/* Image & Metric */}
                <div className="relative overflow-hidden aspect-[4/3] bg-brand-sand">
                  <img
                    src={IMAGES[i]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-multiply"
                    loading="lazy"
                  />
                  {/* Subtle vignette rather than heavy dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-eggplant/50 via-transparent to-transparent opacity-60" />

                  {/* High-contrast Metric Badge */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-brand-magenta px-4 py-2 font-sans text-xs font-bold text-white shadow-lg">
                    <TrendingUp className="h-4 w-4" />
                    {item.metric}
                  </div>

                  {/* Hover reveal icon - Yellow pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-14 w-14 rounded-full bg-brand-yellow flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500">
                      <ArrowUpRight className="h-6 w-6 text-brand-eggplant" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pb-10 flex-1 flex flex-col">
                  <h3 className="font-sans text-2xl font-extrabold text-brand-eggplant leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-serif text-base text-brand-eggplant/70 flex-1">
                    {item.description}
                  </p>

                  <div className="mt-4 pb-4 border-b border-brand-eggplant/10">
                    <p className="font-sans text-xs font-bold uppercase tracking-widest text-brand-magenta">
                      Result: <span className="text-brand-eggplant/60">{item.metricDetail}</span>
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag: string) => (
                      <span key={tag} className="pill">{tag}</span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}