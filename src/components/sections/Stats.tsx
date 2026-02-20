import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

function StatItem({ item }: { item: { value: string; label: string } }) {
  const { ref, display } = useCountUp(item.value, 2000);

  return (
    <div ref={ref} data-reveal className="text-center p-6">
      <div className="text-4xl sm:text-5xl font-bold text-gradient tracking-tight">
        {display}
      </div>
      <div className="mt-2 text-sm text-white/40 font-medium">{item.label}</div>
    </div>
  );
}

export function Stats() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/15 via-[#050510] to-[#00d4ff]/10" />
      <div className="grid-overlay" />
      <div className="section-divider" style={{ top: 0, bottom: "auto" }} />
      <div className="section-divider" />

      <div className="container-premium relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {t.stats.items.map((item: { readonly value: string; readonly label: string }) => (
            <StatItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}