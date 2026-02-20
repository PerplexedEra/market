import { useEffect, useRef, useState } from "react";
import { Menu, ArrowRight, Globe, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useI18n } from "@/i18n/LanguageContext";

const LOGO_SRC = "/upmarketlogo.png.png";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t, langs } = useI18n();
  const [langOpen, setLangOpen] = useState(false);
  const langBtnRef = useRef<HTMLButtonElement | null>(null);
  const langMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") setLangOpen(false); };
    const onMouseDown = (e: MouseEvent) => {
      const n = e.target as Node;
      if (langMenuRef.current?.contains(n) || langBtnRef.current?.contains(n)) return;
      setLangOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onMouseDown);
    return () => { window.removeEventListener("keydown", onKeyDown); window.removeEventListener("mousedown", onMouseDown); };
  }, [langOpen]);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#portfolio", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#blog", label: t.nav.blog },
    { href: "#contact", label: t.nav.contact },
  ];

  const currentLangLabel = (langs as any).find((l: any) => l.code === lang)?.label ?? "English";

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-[#050510]/80 backdrop-blur-xl border-b border-white/[0.05] shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={LOGO_SRC}
            alt="UpMarket logo"
            className="h-9 w-9 rounded-xl object-contain"
            loading="eager"
          />
          <span className="font-display text-base font-semibold tracking-tight text-white group-hover:text-[#00d4ff] transition-colors">
            UpMarket
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-white/50 transition-colors hover:text-white
                after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#8b5cf6] after:to-[#00d4ff] after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative">
            <button
              ref={langBtnRef}
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className={cn(
                "inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/60 backdrop-blur-sm",
                "transition hover:bg-white/10 hover:text-white"
              )}
              aria-haspopup="menu"
              aria-expanded={langOpen}
              aria-label="Change language"
            >
              <Globe className="h-4 w-4" />
              <span className="hidden lg:inline">{currentLangLabel}</span>
            </button>

            {langOpen && (
              <div
                ref={langMenuRef}
                role="menu"
                className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border border-white/[0.08] bg-[#050510]/95 backdrop-blur-xl shadow-xl"
              >
                {langs.map((l: any) => {
                  const active = l.code === lang;
                  return (
                    <button
                      key={l.code}
                      type="button"
                      role="menuitem"
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={cn(
                        "flex w-full items-center justify-between px-3 py-2.5 text-sm transition-colors",
                        active ? "bg-[#00d4ff]/10 text-[#00d4ff]" : "text-white/60 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <span>{l.label}</span>
                      {active && <Check className="h-4 w-4 text-[#00d4ff]" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <a href="#contact" className="btn-primary-premium">
            {t.nav.book} <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] bg-[#050510] border-l border-white/[0.08] p-6">
              <div className="flex items-center gap-3">
                <img src={LOGO_SRC} alt="UpMarket logo" className="h-9 w-9 rounded-xl object-contain" loading="eager" />
                <div className="font-display text-sm font-semibold text-white">UpMarket</div>
              </div>

              <div className="mt-5">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/40">
                  {t.nav.language}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {langs.map((l: any) => {
                    const active = l.code === lang;
                    return (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => setLang(l.code)}
                        className={cn(
                          "rounded-xl border px-3 py-2 text-left text-sm transition",
                          active
                            ? "border-[#00d4ff]/40 bg-[#00d4ff]/10 text-[#00d4ff]"
                            : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10"
                        )}
                      >
                        {l.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-1">
                {links.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a
                      href={l.href}
                      className="rounded-xl px-3 py-2.5 text-sm font-medium text-white/60 transition hover:bg-white/5 hover:text-white"
                    >
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </div>

              <div className="mt-6">
                <SheetClose asChild>
                  <a href="#contact" className="btn-primary-premium w-full py-3 text-center">
                    {t.hero.ctaPrimary} <ArrowRight className="h-4 w-4" />
                  </a>
                </SheetClose>
              </div>

              <p className="mt-4 text-xs text-white/30">{t.hero.note}</p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}