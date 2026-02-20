import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

function StatItem({ item }: { item: { value: string; label: string } }) {
  const { ref, display } = useCountUp(item.value, 2000);

  return (
    <div ref={ref} data-reveal className="text-center p-8 bg-white rounded-[2rem] shadow-sm border border-brand-slate/5 relative overflow-hidden group transition-all duration-300 hover:shadow-premium hover:-translate-y-2">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold opacity-10 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-slate opacity-5 rounded-tr-[80px] transition-transform duration-500 group-hover:scale-150" />

      <div className="relative z-10">
        <div className="text-5xl sm:text-6xl font-extrabold text-brand-slate font-sans tracking-tighter transition-colors group-hover:text-brand-gold">
          {display}
        </div>
        <div className="mt-3 font-sans text-sm font-bold uppercase tracking-widest text-brand-slate/50">
          {item.label}
        </div>
      </div>
    </div>
  );
}

export function Stats() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 bg-brand-cream border-y border-brand-slate/5">
      <div className="container-premium relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.stats.items.map((item: { readonly value: string; readonly label: string }) => (
            <StatItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}