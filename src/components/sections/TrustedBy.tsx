import { useLanguage } from "@/i18n/LanguageContext";
import { Box, Diamond, Hexagon, Triangle, Circle, Zap, Feather, Shield } from "lucide-react";

const LOGOS = [
  { name: "Apex Global", icon: Triangle },
  { name: "Zenith Partners", icon: Diamond },
  { name: "Vertex Solutions", icon: Hexagon },
  { name: "Aura Capital", icon: Circle },
  { name: "Lumina Tech", icon: Zap },
  { name: "Nova Systems", icon: Box },
  { name: "Equinox Media", icon: Feather },
  { name: "Aegis Group", icon: Shield },
];

export function TrustedBy() {
  const { t } = useLanguage();
  // Double the array so it can scroll seamlessly (the CSS marquee translates -50%)
  const row = [...LOGOS, ...LOGOS];

  return (
    <section className="relative py-16 overflow-hidden section-sky border-y border-brand-sand">
      <div className="container-premium text-center">
        <p className="eyebrow">{t.trustedBy?.eyebrow ?? "Trusted by premium brands"}</p>
      </div>

      <div className="mt-12 overflow-hidden flex whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 px-8 items-center">
          {row.map((l, i) => {
            const Icon = l.icon;
            return (
              <div key={`${l.name}-${i}`} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300">
                <Icon className="h-6 w-6 text-brand-blue" strokeWidth={2.5} />
                <span className="text-xl font-sans font-bold tracking-tight text-brand-navy">{l.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}