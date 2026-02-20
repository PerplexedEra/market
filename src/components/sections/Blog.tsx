import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Blog() {
  const { t } = useLanguage();

  return (
    <section id="blog" className="section-light relative">
      <div className="gradient-mesh" />
      <div className="grid-overlay" />

      <div className="container-premium relative">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{t.blog.eyebrow}</p>
            <h2 className="headline mt-2 text-3xl font-bold sm:text-4xl">
              {t.blog.headline}
            </h2>
            <p className="subhead mt-3">{t.blog.subhead}</p>
          </div>

          <a href="#contact" className="btn-secondary-premium w-fit shrink-0 inline-flex items-center gap-2">
            {t.blog.button} <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.blog.posts.map((p: { title: string; date: string; tag: string; excerpt: string }) => (
            <div key={p.title} className="glass-card glow-card p-6 group cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="pill">{p.tag}</span>
                <span className="text-xs text-white/30">{p.date}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-white group-hover:text-purple-300 transition-colors">{p.title}</h3>
              <p className="mt-2 text-sm text-white/40">{p.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}