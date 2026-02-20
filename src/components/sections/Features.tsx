import { Zap, Search, Gauge, Layers } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";

const ICONS = [Zap, Search, Gauge, Layers];

function FeatureCard({ item, index }: { item: { title: string; description: string }; index: number }) {
  const tilt = useTilt(6);
  const Icon = ICONS[index] ?? Zap;

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      data-reveal
      className="glass-card glow-card p-7 group"
      style={{ transitionProperty: "transform, box-shadow, border-color, background, opacity" }}
    >
      <div className="icon-badge mb-5">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="text-base font-semibold text-white group-hover:text-[#00d4ff] transition-colors">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/40">{item.description}</p>
    </div>
  );
}

export function Features() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-light relative">
      <div className="gradient-mesh" />
      <div className="grid-overlay" />
      <div className="section-divider" />

      <div className="container-premium relative">
        <div className="text-center max-w-2xl mx-auto" data-reveal>
          <p className="eyebrow">{t.features.eyebrow}</p>
          <h2 className="headline mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t.features.headline}
          </h2>
          <p className="subhead mt-4 mx-auto">{t.features.subhead}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((item: { readonly title: string; readonly description: string }, i: number) => (
            <FeatureCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}