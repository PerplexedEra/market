import { Zap, Search, Gauge, Layers } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";
import { HandArrow } from "@/components/ui/Handdrawn";

const ICONS = [Zap, Search, Gauge, Layers];

function FeatureCard({ item, index }: { item: { title: string; description: string }; index: number }) {
  const tilt = useTilt(3);
  const Icon = ICONS[index] ?? Zap;

  // Alternate pastel colors for the inner cards
  const pastelClass = index % 3 === 0
    ? "card-pastel-yellow"
    : index % 3 === 1
      ? "card-pastel-pink"
      : "card-pastel-peach";

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      data-reveal
      className="card-advanced group relative"
    >
      <div className={pastelClass}>
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm border border-brand-eggplant/5 text-brand-magenta">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-sans text-xl font-extrabold tracking-tight text-brand-eggplant transition-colors group-hover:text-brand-magenta">
          {item.title}
        </h3>
        <p className="mt-4 font-serif text-base leading-relaxed text-brand-eggplant/70">
          {item.description}
        </p>

        {/* Playful annotation for specific cards */}
        {index === 1 && (
          <div className="absolute -top-12 -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden xl:block">
            <span className="font-sans font-bold text-brand-magenta text-[10px] tracking-widest uppercase rotate-12 block mb-1">
              Top requested!
            </span>
            <HandArrow color="#e0248c" className="w-10 h-10 rotate-[60deg] ml-4" />
          </div>
        )}
      </div>
    </div>
  );
}

export function Features() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-white relative">
      <div className="container-premium relative">
        <div className="text-center max-w-2xl mx-auto" data-reveal>
          <p className="eyebrow">{t.features.eyebrow}</p>
          <h2 className="headline mt-4 text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold font-sans">
            {t.features.headline}
          </h2>
          <p className="subhead mt-6 mx-auto font-serif italic">{t.features.subhead}</p>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((item: { readonly title: string; readonly description: string }, i: number) => (
            <FeatureCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}