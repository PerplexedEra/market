import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HandArrow } from "@/components/ui/Handdrawn";

const ICONS = [Phone, Mail, MapPin];

export function Contact() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" ref={sectionRef} className="section-sky relative">
      <div className="container-premium relative lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Info Side */}
          <div data-reveal className="relative">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2 className="headline mt-4 text-5xl sm:text-6xl lg:text-[5rem] font-sans font-extrabold tracking-tighter">
              {t.contact.headline}
            </h2>
            <p className="subhead mt-8 font-serif italic text-2xl">
              {t.contact.subhead}
            </p>

            <div className="mt-16 space-y-5">
              {[
                { title: t.contact.info.phone, value: "+1 (555) 123-4567" },
                { title: t.contact.info.email, value: "hello@upmarket.io" },
                { title: t.contact.info.location, value: "Sandton, South Africa" }
              ].map((info, i: number) => {
                const Icon = ICONS[i] ?? Phone;
                return (
                  <div key={info.title} className="card-outseta p-5 flex items-center gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-sky/50 text-brand-blue">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-sans text-xs font-bold uppercase tracking-widest text-brand-navy/40">
                        {info.title}
                      </div>
                      <div className="font-sans text-base font-bold text-brand-navy mt-0.5">
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute top-0 right-10 hidden xl:block">
              <span className="font-sans font-bold text-brand-blue text-[10px] tracking-widest uppercase rotate-12 block mb-2">
                We respond fast
              </span>
              <HandArrow color="#1E40AF" className="w-12 h-12 rotate-[90deg] ml-4" />
            </div>
          </div>

          {/* Form Side */}
          <div data-reveal="scale" className="card-outseta p-8 sm:p-12">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="font-sans text-xs font-bold uppercase tracking-widest text-brand-navy/50">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border border-brand-sand bg-brand-cream px-5 py-4 font-sans text-brand-navy placeholder:text-brand-navy/30 outline-none transition-all focus:border-brand-blue/50 focus:bg-white focus:shadow-outseta"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-xs font-bold uppercase tracking-widest text-brand-navy/50">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-2xl border border-brand-sand bg-brand-cream px-5 py-4 font-sans text-brand-navy placeholder:text-brand-navy/30 outline-none transition-all focus:border-brand-blue/50 focus:bg-white focus:shadow-outseta"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-xs font-bold uppercase tracking-widest text-brand-navy/50">
                  Service Needed
                </label>
                <select className="w-full rounded-2xl border border-brand-sand bg-brand-cream px-5 py-4 font-sans text-brand-navy outline-none transition-all focus:border-brand-blue/50 focus:bg-white focus:shadow-outseta appearance-none cursor-pointer">
                  <option value="" disabled selected>Select a service</option>
                  <option value="landing">Landing Page Optimization</option>
                  <option value="app">Web App Development</option>
                  <option value="seo">SEO & Marketing</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-xs font-bold uppercase tracking-widest text-brand-navy/50">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-2xl border border-brand-sand bg-brand-cream px-5 py-4 font-sans text-brand-navy placeholder:text-brand-navy/30 outline-none transition-all focus:border-brand-blue/50 focus:bg-white focus:shadow-outseta resize-none"
                  placeholder="Tell us about your project goals..."
                />
              </div>

              <button type="submit" className="btn-primary mt-4 w-full">
                Send Message <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}