import { Globe, Smartphone, BarChart3, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";
import { MarkerUnderline } from "@/components/ui/Handdrawn";

const ICONS = [Globe, Smartphone, BarChart3];

function ServiceCard({ card, index }: {
  card: { title: string; description: string; points: readonly string[] };
  index: number;
}) {
  const tilt = useTilt(4);
  const Icon = ICONS[index] ?? Globe;

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      data-reveal
      className="card-advanced group flex flex-col h-full"
    >
      <div className="card-inner flex flex-col p-8 lg:p-10">
        <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-sand shadow-sm text-brand-eggplant group-hover:bg-brand-magenta group-hover:text-white transition-colors duration-300">
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="font-sans text-2xl font-extrabold tracking-tight text-brand-eggplant">
          {card.title}
        </h3>

        <p className="mt-4 font-serif text-lg leading-relaxed text-brand-eggplant/70">
          {card.description}
        </p>

        <div className="my-8 h-px w-full bg-brand-sand" />

        <ul className="space-y-4 flex-1">
          {card.points.map((p: string) => (
            <li key={p} className="flex items-center gap-3 font-sans text-sm font-bold text-brand-eggplant/80">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-peach text-brand-eggplant text-xs">
                ✓
              </div>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Services() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="services" ref={sectionRef} className="section-warm relative">
      <div className="container-premium relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-20" data-reveal>
          <div className="max-w-2xl relative">
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2 className="headline mt-4 text-4xl sm:text-5xl lg:text-[4rem] font-extrabold font-sans">
              <span className="relative inline-block">
                A focused
                <MarkerUnderline className="opacity-80 -bottom-2 w-full left-0" color="#ffe566" />
              </span>{" "}
              service stack.
            </h2>
            <p className="subhead mt-6 font-serif italic">{t.services.subhead}</p>
          </div>
          <a href="#contact" className="btn-secondary w-fit shrink-0">
            {t.services.cta} <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {t.services.cards.map((card: { readonly title: string; readonly description: string; readonly points: readonly string[] }, i: number) => (
            <ServiceCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}