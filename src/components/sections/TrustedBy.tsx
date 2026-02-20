import { useLanguage } from "@/i18n/LanguageContext";

const LOGOS = [
  { name: "Shopify", src: "https://cdn.simpleicons.org/shopify/fff" },
  { name: "Google", src: "https://cdn.simpleicons.org/google/fff" },
  { name: "Stripe", src: "https://cdn.simpleicons.org/stripe/fff" },
  { name: "Vercel", src: "https://cdn.simpleicons.org/vercel/fff" },
  { name: "Figma", src: "https://cdn.simpleicons.org/figma/fff" },
  { name: "GitHub", src: "https://cdn.simpleicons.org/github/fff" },
  { name: "Notion", src: "https://cdn.simpleicons.org/notion/fff" },
  { name: "Slack", src: "https://cdn.simpleicons.org/slack/fff" },
];

export function TrustedBy() {
  const { t } = useLanguage();
  const row = [...LOGOS, ...LOGOS];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="section-divider" style={{ top: 0, bottom: "auto" }} />

      <div className="container-premium text-center">
        <p className="eyebrow">{t.trustedBy?.eyebrow ?? "Trusted tools & platforms"}</p>
      </div>

      <div className="mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {row.map((l: { readonly name: string; readonly src: string }, i: number) => (
            <div key={`${l.name}-${i}`} className="flex items-center gap-3 opacity-40 hover:opacity-80 transition-opacity duration-300">
              <img src={l.src} alt={l.name} className="h-5 w-5" loading="lazy" />
              <span className="text-sm font-medium text-white/60 whitespace-nowrap">{l.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider" />
    </section>
  );
}