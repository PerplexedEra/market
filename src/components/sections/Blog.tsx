import { ArrowRight, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const IMAGES = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
];

export function Blog() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="blog" ref={sectionRef} className="section-white relative">
      <div className="container-premium relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-20" data-reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">{t.blog.eyebrow}</p>
            <h2 className="headline mt-4 text-4xl sm:text-5xl lg:text-[4rem] font-extrabold font-sans">
              {t.blog.headline}
            </h2>
          </div>
          <button className="btn-secondary w-fit shrink-0">
            View all insights <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {t.blog.posts.map((post: { readonly title: string; readonly excerpt: string; readonly tag: string; readonly date: string }, i: number) => (
            <article key={post.title} data-reveal className="card-advanced group flex flex-col h-full cursor-pointer">
              <div className="card-inner p-0 overflow-hidden flex flex-col h-full">
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-sand">
                  <img
                    src={IMAGES[i]}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-multiply"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 pill bg-white shadow-sm">
                    {post.tag}
                  </div>
                </div>

                <div className="flex-1 p-8 flex flex-col">
                  <div className="flex items-center gap-2 font-sans text-xs font-bold text-brand-eggplant/50 mb-4 uppercase tracking-wider">
                    <Clock className="h-3.5 w-3.5" />
                    {post.date}
                  </div>

                  <h3 className="font-sans text-2xl font-extrabold text-brand-eggplant leading-tight transition-colors group-hover:text-brand-magenta">
                    {post.title}
                  </h3>

                  <p className="mt-4 font-serif text-base text-brand-eggplant/70 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-8 flex items-center font-sans text-sm font-bold text-brand-magenta">
                    Read article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}