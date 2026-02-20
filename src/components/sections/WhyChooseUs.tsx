import { Check, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/LanguageContext";

export function WhyChooseUs() {
  const { t } = useI18n();
  const w = t.whyChooseUs;

  return (
    <section className="section-light relative">
      <div className="gradient-mesh" />
      <div className="grid-overlay" />

      <div className="container-premium relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            <p className="eyebrow">{w.eyebrow}</p>
            <h2 className="headline mt-2 text-3xl font-bold sm:text-4xl">
              {w.headline1}{" "}
              <span className="text-gradient">{w.headline2}</span>{" "}
              {w.headline3}
            </h2>
            <p className="subhead mt-3">{w.subhead}</p>

            <div className="mt-8 space-y-3">
              {w.bullets.map((b: string) => (
                <div key={b} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-400">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-sm text-white/60">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">
            {w.reasons.map((r: { readonly title: string; readonly description: string }) => (
              <div key={r.title} className="glass-card p-6 group">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">{r.title}</div>
                </div>
                <p className="text-sm leading-relaxed text-white/40">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}