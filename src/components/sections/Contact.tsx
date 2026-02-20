import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 800);
  }

  return (
    <section id="contact" className="section-dark relative">
      <div className="gradient-mesh-intense" />
      <div className="grid-overlay" />

      <div className="container-premium relative">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2 className="headline mt-2 text-3xl font-bold sm:text-4xl">
              {t.contact.headline}
            </h2>
            <p className="subhead mt-3">{t.contact.subhead}</p>

            <div className="mt-8 space-y-3">
              <div className="glass-card-static flex items-center gap-4 p-4">
                <div className="icon-badge-sm text-white shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-medium text-white/40">{t.contact.info.email}</div>
                  <div className="text-sm font-semibold text-white">hello@upmarket.co.za</div>
                </div>
              </div>

              <div className="glass-card-static flex items-center gap-4 p-4">
                <div className="icon-badge-sm text-white shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-medium text-white/40">{t.contact.info.phone}</div>
                  <div className="text-sm font-semibold text-white">+27 00 000 0000</div>
                </div>
              </div>

              <div className="glass-card-static flex items-center gap-4 p-4">
                <div className="icon-badge-sm text-white shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-medium text-white/40">{t.contact.info.location}</div>
                  <div className="text-sm font-semibold text-white">Sandton, Johannesburg</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card-static p-6 sm:p-8">
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-semibold text-white/70">{t.contact.form.name}</label>
                <input className="input-premium mt-2" placeholder={t.contact.form.namePh} required />
              </div>

              <div>
                <label className="text-sm font-semibold text-white/70">{t.contact.form.email}</label>
                <input type="email" className="input-premium mt-2" placeholder={t.contact.form.emailPh} required />
              </div>

              <div>
                <label className="text-sm font-semibold text-white/70">{t.contact.form.message}</label>
                <textarea className="input-premium mt-2 min-h-[140px] resize-none" placeholder={t.contact.form.messagePh} required />
              </div>

              <button
                type="submit"
                className="btn-primary-premium w-full py-3"
                disabled={status === "sending"}
              >
                {status === "idle" && (
                  <span className="inline-flex items-center gap-2">{t.contact.form.send} <Send className="h-4 w-4" /></span>
                )}
                {status === "sending" && t.contact.form.sending}
                {status === "sent" && (
                  <span className="text-green-300">✓ {t.contact.form.sent}</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}