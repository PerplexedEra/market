import { useLanguage } from "@/i18n/LanguageContext";
import { HandArrow } from "@/components/ui/Handdrawn";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FEATURE_IMAGES = [
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80"
];

export function Features() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="features" ref={sectionRef} className="section-white relative">
      <div className="container-premium relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16" data-reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">{t.features.eyebrow}</p>
            <h2 className="headline mt-4 text-4xl sm:text-5xl lg:text-[4rem] font-extrabold font-sans">
              {t.features.headline}
            </h2>
          </div>

          <div className="relative" data-reveal="scale">
            <p className="subhead max-w-sm">
              {t.features.subhead}
            </p>
            <div className="absolute -top-12 -right-12 hidden xl:block">
              <span className="font-sans font-bold text-brand-blue text-[10px] tracking-widest uppercase rotate-12 block mb-2">
                What sets us apart
              </span>
              <HandArrow color="#1E40AF" className="w-12 h-12 rotate-[90deg] ml-4" />
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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