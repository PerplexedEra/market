import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";
import type { LangCode, I18nDict } from "./translations";

const langs = [
  { code: "en", label: "English" },
  { code: "zu", label: "isiZulu" },
  { code: "af", label: "Afrikaans" },
  { code: "fr", label: "Français" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
  { code: "zh", label: "中文" },
] as const;

type LanguageContextValue = {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  dict: I18nDict;
  t: I18nDict;
  langs: typeof langs;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "upmarket_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(() => {
    const saved = (typeof window !== "undefined"
      ? (localStorage.getItem(STORAGE_KEY) as LangCode | null)
      : null) ?? "en";

    return saved in translations ? saved : "en";
  });

  const setLang = (next: LangCode) => setLangState(next);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const dict = useMemo(() => translations[lang] ?? translations.en, [lang]);

  const value = useMemo(() => ({ lang, setLang, dict, t: dict, langs }), [lang, dict]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

/** ✅ Export as useI18n for components */
export const useI18n = useLanguage;

/** Optional shorthand hook */
export function useT() {
  return useLanguage().dict;
}