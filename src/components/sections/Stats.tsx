import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

function StatItem({ item }: { item: { value: string; label: string } }) {
  const { ref, display } = useCountUp(item.value, 2000);

  return (
    <div ref={ref} data-reveal className="text-center p-8">
      <div className="text-5xl sm:text-6xl font-extrabold text-white font-sans tracking-tighter">
        {display}
      </div>
      <div className="mt-3 font-sans text-sm font-bold uppercase tracking-widest text-white/50">
        {item.label}
      </div>
    </div>
  );
}

export function Stats() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-navy relative">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-brand-blue blur-[120px] opacity-10" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-brand-gold blur-[100px] opacity-10" />
      </div>

      <div className="container-premium relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.stats.items.map((item: { readonly value: string; readonly label: string }) => (
            <StatItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}