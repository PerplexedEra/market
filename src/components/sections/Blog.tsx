import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Blog() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="blog" ref={sectionRef} className="section-dark relative">
      <div className="gradient-mesh" />
      <div className="grid-overlay" />

      <div className="container-premium relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
          <div className="max-w-xl">
            <p className="eyebrow">{t.blog.eyebrow}</p>
            <h2 className="headline mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              {t.blog.headline}
            </h2>
            <p className="subhead mt-4">{t.blog.subhead}</p>
          </div>
          <a href="#contact" className="btn-secondary-premium w-fit shrink-0">
            {t.blog.button} <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.blog.posts.map((p: { readonly title: string; readonly date: string; readonly tag: string; readonly excerpt: string }) => (
            <div key={p.title} data-reveal className="glass-card glow-card p-7 group cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="pill">{p.tag}</span>
                <span className="text-xs text-white/25">{p.date}</span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-white group-hover:text-[#00d4ff] transition-colors leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-white/35 leading-relaxed">{p.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}