import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { MarkerUnderline } from "@/components/ui/Handdrawn";

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80",
];

export function Services() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="services" ref={sectionRef} className="section-sky relative">
      <div className="container-premium relative">
        <div className="text-center max-w-3xl mx-auto mb-16" data-reveal>
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 className="headline mt-4 text-4xl sm:text-5xl lg:text-[4rem] font-extrabold font-sans relative inline-block">
            {t.services.headline}
            <MarkerUnderline color="#1E40AF" className="w-[110%] -left-[5%]" />
          </h2>
          <p className="subhead mt-6 mx-auto">
            {t.services.subhead}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {t.services.cards.map((service: { readonly title: string; readonly description: string; readonly points: readonly string[] }, i: number) => (
            <PremiumCard
              key={service.title}
              index={i}
              title={service.title}
              description={service.description}
              imageSrc={SERVICE_IMAGES[i % SERVICE_IMAGES.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}