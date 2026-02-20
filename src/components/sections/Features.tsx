import { useLanguage } from "@/i18n/LanguageContext";
import { HandArrow } from "@/components/ui/Handdrawn";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FEATURE_IMAGES = [
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
];

export function Features() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="features" ref={sectionRef} className="section-white relative border-y border-brand-slate/5">
      <div className="container-premium relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl" data-reveal>
            <p className="eyebrow">{t.features.eyebrow}</p>
            <h2 className="headline mt-4 text-4xl sm:text-5xl lg:text-[4rem] font-extrabold font-sans">
              {t.features.headline}
            </h2>
          </div>

          <div className="relative" data-reveal="scale">
            <p className="font-serif italic text-xl text-brand-slate/70 max-w-sm">
              {t.features.subhead}
            </p>
            <div className="absolute -top-12 -right-12 opacity-0 lg:animate-[fade-in_1s_ease-out_1s_forwards] hidden xl:block">
              <span className="font-sans font-bold text-brand-gold text-[10px] tracking-widest uppercase rotate-12 block mb-2">
                What sets us apart
              </span>
              <HandArrow color="#FFB703" className="w-12 h-12 rotate-[90deg] ml-4" />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {t.features.items.map((feature: { readonly title: string; readonly description: string }, i: number) => (
            <PremiumCard
              key={feature.title}
              index={i}
              title={feature.title}
              description={feature.description}
              imageSrc={FEATURE_IMAGES[i % FEATURE_IMAGES.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}