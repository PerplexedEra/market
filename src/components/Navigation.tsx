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
          ? "bg-white/80 backdrop-blur-xl border-b border-brand-slate/5 shadow-sm"
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
          <span className="font-sans text-xl font-extrabold tracking-tighter text-brand-slate group-hover:text-brand-gold transition-colors">
            UpMarket.
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative font-sans text-sm font-bold text-brand-slate/60 transition-colors hover:text-brand-slate
                after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full"
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
                "inline-flex items-center gap-2 rounded-full border-2 border-brand-slate/10 bg-white/50 px-4 py-2 font-sans text-sm font-bold text-brand-slate/80 backdrop-blur-sm",
                "transition hover:bg-white hover:text-brand-slate"
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
                className="absolute right-0 mt-3 w-52 overflow-hidden rounded-[1.5rem] border border-brand-slate/5 bg-white/95 backdrop-blur-xl shadow-xl p-2"
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
                        "flex w-full items-center justify-between rounded-xl px-4 py-3 font-sans text-sm font-bold transition-colors",
                        active ? "bg-brand-sand/50 text-brand-gold" : "text-brand-slate/60 hover:bg-brand-sand/30 hover:text-brand-slate"
                      )}
                    >
                      <span>{l.label}</span>
                      {active && <Check className="h-4 w-4 text-brand-gold" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <a href="#contact" className="btn-primary">
            {t.nav.book} <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-brand-slate/10 bg-brand-sand/50 text-brand-slate hover:bg-brand-sand"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] bg-brand-cream border-l border-brand-slate/10 p-6">
              <div className="flex items-center gap-3">
                <img src={LOGO_SRC} alt="UpMarket logo" className="h-9 w-9 rounded-xl object-contain" loading="eager" />
                <div className="font-sans text-xl font-extrabold tracking-tight text-brand-slate">UpMarket.</div>
              </div>

              <div className="mt-5">
                <div className="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-brand-slate/50">
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
                          "rounded-xl border-2 px-4 py-3 text-left font-sans text-sm font-bold transition",
                          active
                            ? "border-brand-gold/30 bg-brand-gold/5 text-brand-gold"
                            : "border-brand-slate/5 bg-transparent text-brand-slate/60 hover:bg-brand-sand/50"
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
                      className="rounded-xl px-4 py-3 font-sans text-base font-bold text-brand-slate/70 transition hover:bg-brand-sand/50 hover:text-brand-slate"
                    >
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </div>

              <div className="mt-6">
                <SheetClose asChild>
                  <a href="#contact" className="btn-primary w-full py-4 text-center">
                    {t.hero.ctaPrimary} <ArrowRight className="h-4 w-4" />
                  </a>
                </SheetClose>
              </div>

              <p className="mt-8 font-serif text-sm italic text-brand-slate/50">{t.hero.note}</p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}