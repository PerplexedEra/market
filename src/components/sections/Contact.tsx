import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HandArrow } from "@/components/ui/Handdrawn";

const ICONS = [Phone, Mail, MapPin];

export function Contact() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden py-32 bg-warm-mesh">
      <div className="container-premium relative lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Info Side */}
          <div data-reveal="left" className="relative">
            <h2 className="headline text-5xl sm:text-6xl lg:text-[5rem] font-sans font-extrabold tracking-tighter">
              {t.contact.headline}
            </h2>
            <p className="subhead mt-8 font-serif italic text-2xl text-brand-eggplant/80">
              {t.contact.subhead}
            </p>

            <div className="mt-16 space-y-6">
              {[
                { title: t.contact.info.phone, value: "+1 (555) 123-4567" },
                { title: t.contact.info.email, value: "hello@upmarket.io" },
                { title: t.contact.info.location, value: "New York, USA" }
              ].map((info, i: number) => {
                const Icon = ICONS[i] ?? Phone;
                return (
                  <div key={info.title} className="flex flex-col gap-2 rounded-3xl bg-white p-6 shadow-sm border border-brand-eggplant/5 transition-all hover:border-brand-magenta/30 hover:shadow-premium">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-sand text-brand-eggplant">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-sans text-xs font-bold uppercase tracking-widest text-brand-eggplant/50">
                          {info.title}
                        </div>
                        <div className="font-sans text-lg font-bold text-brand-eggplant mt-0.5">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute top-0 right-10 opacity-0 lg:animate-[fade-in_1s_ease-out_1s_forwards] hidden xl:block">
              <span className="font-sans font-bold text-brand-magenta text-[10px] tracking-widest uppercase rotate-12 block mb-2">
                We respond fast
              </span>
              <HandArrow color="#e0248c" className="w-12 h-12 rotate-[90deg] ml-4" />
            </div>

          </div>

          {/* Form Side */}
          <div data-reveal="scale" className="card-advanced">
            <div className="card-inner p-8 sm:p-12">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="font-sans text-xs font-bold uppercase tracking-widest text-brand-eggplant/60">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border-2 border-brand-eggplant/10 bg-brand-sand/50 px-5 py-4 font-sans text-brand-eggplant placeholder:text-brand-eggplant/30 outline-none transition-all focus:border-brand-magenta/50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-xs font-bold uppercase tracking-widest text-brand-eggplant/60">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-2xl border-2 border-brand-eggplant/10 bg-brand-sand/50 px-5 py-4 font-sans text-brand-eggplant placeholder:text-brand-eggplant/30 outline-none transition-all focus:border-brand-magenta/50 focus:bg-white"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-xs font-bold uppercase tracking-widest text-brand-eggplant/60">
                    Service Needed
                  </label>
                  <select className="w-full rounded-2xl border-2 border-brand-eggplant/10 bg-brand-sand/50 px-5 py-4 font-sans text-brand-eggplant font-medium outline-none transition-all focus:border-brand-magenta/50 focus:bg-white appearance-none cursor-pointer">
                    <option value="" disabled selected>Select a service</option>
                    <option value="landing">Landing Page Optimization</option>
                    <option value="app">Web App Development</option>
                    <option value="seo">SEO & Marketing</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-xs font-bold uppercase tracking-widest text-brand-eggplant/60">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-2xl border-2 border-brand-eggplant/10 bg-brand-sand/50 px-5 py-4 font-sans text-brand-eggplant placeholder:text-brand-eggplant/30 outline-none transition-all focus:border-brand-magenta/50 focus:bg-white resize-none"
                    placeholder="Tell us about your project goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary mt-4 w-full"
                >
                  {t.contact.form.send} <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}