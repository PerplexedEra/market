import { Globe, Smartphone, BarChart3, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";

const ICONS = [Globe, Smartphone, BarChart3];

function ServiceCard({ card, index }: {
  card: { title: string; description: string; points: readonly string[] };
  index: number;
}) {
  const tilt = useTilt(5);
  const Icon = ICONS[index] ?? Globe;

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      data-reveal
      className="glass-card glow-card p-8 group flex flex-col"
      style={{ transitionProperty: "transform, box-shadow, border-color, background, opacity" }}
    >
      <div className="icon-badge mb-5">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white group-hover:text-[#00d4ff] transition-colors">
        {card.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/40">{card.description}</p>
      <ul className="mt-5 space-y-2 flex-1">
        {card.points.map((p: string) => (
          <li key={p} className="flex items-center gap-2 text-sm text-white/50">
            <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-[#00d4ff]" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Services() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="services" ref={sectionRef} className="section-dark relative">
      <div className="gradient-mesh-intense" />
      <div className="grid-overlay" />

      <div className="container-premium relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
          <div className="max-w-xl">
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2 className="headline mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              {t.services.headline}
            </h2>
            <p className="subhead mt-4">{t.services.subhead}</p>
          </div>
          <a href="#contact" className="btn-primary-premium w-fit shrink-0">
            {t.services.cta} <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.services.cards.map((card: { readonly title: string; readonly description: string; readonly points: readonly string[] }, i: number) => (
            <ServiceCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}