import { Twitter, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const LOGO_SRC = "/upmarketlogo.png.png";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-brand-eggplant/5 bg-white pt-24 pb-12">
      <div className="container-premium relative">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Brand Col */}
          <div className="max-w-md">
            <a href="#home" className="flex items-center gap-3 group w-fit">
              <img src={LOGO_SRC} alt="UpMarket logo" className="h-10 w-10 rounded-xl object-contain" />
              <span className="font-sans text-2xl font-extrabold tracking-tighter text-brand-eggplant group-hover:text-brand-magenta transition-colors">
                UpMarket.
              </span>
            </a>
            <p className="mt-6 font-serif text-lg leading-relaxed text-brand-eggplant/70">
              {t.footer.description}
            </p>

            <div className="mt-8 flex items-center gap-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-sand text-brand-eggplant transition-all hover:-translate-y-1 hover:bg-brand-magenta hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-brand-eggplant">{t.footer.services}</h4>
              <ul className="mt-6 space-y-4">
                {t.footer.servicesLinks.map((link: string) => (
                  <li key={link}>
                    <a href="#" className="font-sans text-base font-medium text-brand-eggplant/70 transition-colors hover:text-brand-magenta">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-brand-eggplant">{t.footer.company}</h4>
              <ul className="mt-6 space-y-4">
                {t.footer.companyLinks.map((link: string) => (
                  <li key={link}>
                    <a href="#" className="font-sans text-base font-medium text-brand-eggplant/70 transition-colors hover:text-brand-magenta">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between border-t border-brand-eggplant/5 pt-8 sm:flex-row">
          <p className="font-sans text-sm font-medium text-brand-eggplant/50">
            {t.footer.rights.replace('{year}', new Date().getFullYear().toString())}
          </p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <a href="#" className="font-sans text-sm font-medium text-brand-eggplant/50 hover:text-brand-magenta">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-sm font-medium text-brand-eggplant/50 hover:text-brand-magenta">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
