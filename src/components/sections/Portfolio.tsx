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
    <section id="portfolio" ref={sectionRef} className="section-light relative">
      <div className="gradient-mesh" />
      <div className="grid-overlay" />
      <div className="section-divider" />

      <div className="container-premium relative">
        <div className="text-center max-w-2xl mx-auto" data-reveal>
          <p className="eyebrow">{t.portfolio.eyebrow}</p>
          <h2 className="headline mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t.portfolio.headline}
          </h2>
          <p className="subhead mt-4 mx-auto">{t.portfolio.subhead}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {t.portfolio.items.map((item: {
            readonly title: string;
            readonly description: string;
            readonly tags: readonly string[];
            readonly metric: string;
            readonly metricDetail: string;
          }, i: number) => (
            <div key={item.title} data-reveal className="glass-card group overflow-hidden">
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={IMAGES[i]}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-80" />

                {/* Metric badge */}
                <div className="absolute top-4 right-4 metric-badge flex items-center gap-1.5">
                  <TrendingUp className="h-3 w-3" />
                  {item.metric}
                </div>

                {/* Hover reveal icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-12 w-12 rounded-full bg-[#00d4ff]/20 backdrop-blur flex items-center justify-center">
                    <ArrowUpRight className="h-5 w-5 text-[#00d4ff]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-white/40">{item.description}</p>
                <p className="mt-1 text-xs text-[#06d6a0]">{item.metricDetail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag: string) => (
                    <span key={tag} className="pill">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}