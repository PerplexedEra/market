import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const images = ["/portfolio-1.jpg", "/portfolio-2.jpg", "/dashboard-hero.jpg"];

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="section-dark relative">
      <div className="gradient-mesh" />
      <div className="grid-overlay" />
      <div className="section-divider" />

      <div className="container-premium relative">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.portfolio.eyebrow}</p>
          <h2 className="headline mt-2 text-3xl font-bold sm:text-4xl">
            {t.portfolio.headline}
          </h2>
          <p className="subhead mt-3">{t.portfolio.subhead}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.portfolio.items.map((p: { readonly title: string; readonly description: string; readonly tags: readonly string[] }, idx: number) => (
            <div key={p.title} className="glass-card glow-card overflow-hidden group">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={images[idx] ?? "/dashboard-hero.jpg"}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-60" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-purple-600/0 transition-all duration-500 group-hover:bg-purple-600/20">
                  <a
                    href="#contact"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white opacity-0 transition-all duration-500 group-hover:opacity-100 hover:bg-white/20"
                    aria-label="View project"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/40">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag: string) => (
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