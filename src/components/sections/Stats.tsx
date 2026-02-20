import { useLanguage } from "@/i18n/LanguageContext";

export function Stats() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-[#0a0a1a] to-cyan-900/20" />
      <div className="grid-overlay" />

      <div className="container-premium relative">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {t.stats.items.map((s: { value: string; label: string }) => (
            <div key={s.label} className="text-center group">
              <div className="text-3xl font-bold text-gradient sm:text-4xl">{s.value}</div>
              <div className="mt-2 text-sm text-white/40">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}