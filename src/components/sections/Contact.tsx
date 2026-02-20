import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Contact() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 800);
  }

  return (
    <section id="contact" ref={sectionRef} className="section-light relative">
      <div className="gradient-mesh-intense" />
      <div className="grid-overlay" />

      <div className="container-premium relative">
        <div className="grid gap-14 lg:grid-cols-2">
          <div data-reveal="left">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2 className="headline mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              {t.contact.headline}
            </h2>
            <p className="subhead mt-4">{t.contact.subhead}</p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Mail, label: t.contact.info.email, value: "hello@upmarket.co.za" },
                { icon: Phone, label: t.contact.info.phone, value: "+27 00 000 0000" },
                { icon: MapPin, label: t.contact.info.location, value: "Sandton, Johannesburg" },
              ].map((c) => (
                <div key={c.label} className="glass-card-static flex items-center gap-4 p-5">
                  <div className="icon-badge-sm text-white shrink-0">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white/35">{c.label}</div>
                    <div className="text-sm font-semibold text-white">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal="right" className="glass-card-static p-7 sm:p-9">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-white/60">{t.contact.form.name}</label>
                <input className="input-premium mt-2" placeholder={t.contact.form.namePh} required />
              </div>

              <div>
                <label className="text-sm font-semibold text-white/60">{t.contact.form.email}</label>
                <input type="email" className="input-premium mt-2" placeholder={t.contact.form.emailPh} required />
              </div>

              <div>
                <label className="text-sm font-semibold text-white/60">{t.contact.form.message}</label>
                <textarea className="input-premium mt-2 min-h-[150px] resize-none" placeholder={t.contact.form.messagePh} required />
              </div>

              <button
                type="submit"
                className="btn-primary-premium w-full py-3.5"
                disabled={status === "sending"}
              >
                {status === "idle" && (
                  <span className="inline-flex items-center gap-2">{t.contact.form.send} <Send className="h-4 w-4" /></span>
                )}
                {status === "sending" && t.contact.form.sending}
                {status === "sent" && (
                  <span className="text-[#06d6a0]">✓ {t.contact.form.sent}</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}