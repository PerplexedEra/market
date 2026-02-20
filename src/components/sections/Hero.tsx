import { Sparkles, TrendingUp, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { MarkerUnderline, HandArrow } from "@/components/ui/Handdrawn";
import VantaGlobe from "@/components/VantaGlobe";

export function Hero() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center">
      {/* Vanta animated globe background */}
      <VantaGlobe />

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-brand-navy/20 pointer-events-none" />

      <div className="container-premium relative z-10 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 font-sans text-sm font-bold text-white shadow-sm"
            >
              <Sparkles className="h-4 w-4 text-brand-gold" />
              {t.hero.chips[2]}
            </motion.div>

            <h1 className="mt-8 text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-sans font-extrabold text-white leading-[1.05] tracking-tighter">
              {t.hero.headline1} {t.hero.headline2}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-2 relative w-fit"
              >
                <MarkerUnderline color="#D4A017" className="w-[110%] -left-[5%]" />
              </motion.div>
            </h1>

            <p className="mt-8 font-serif text-xl sm:text-2xl italic text-white/70 leading-relaxed max-w-[500px]">
              {t.hero.subhead}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a href="#services" className="btn-primary w-full sm:w-auto hover:scale-105 active:scale-95">
                {t.hero.ctaPrimary}
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 font-sans text-base font-bold text-white transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5 w-full sm:w-auto">
                {t.hero.ctaSecondary}
              </a>
            </div>

            <p className="mt-6 font-sans text-xs font-bold uppercase tracking-widest text-white/30 w-full text-center lg:text-left">
              {t.hero.note}
            </p>
          </motion.div>

          {/* Right Column — Floating Mockups */}
          <div className="relative h-[600px] w-full hidden lg:block">
            <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full">

              {/* Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="absolute top-10 right-0 w-[500px] rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden shadow-2xl"
              >
                <div className="p-2 h-[400px] w-full overflow-hidden relative">
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 backdrop-blur-md"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 backdrop-blur-md"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80 backdrop-blur-md"></div>
                  </div>
                  <img
                    src="/dashboard-hero.jpg"
                    alt={t.hero.previewAlt}
                    className="w-full h-full object-cover rounded-2xl opacity-90 shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
                style={{ y: y2 }}
                className="absolute -left-10 bottom-32 w-64 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-white/40">Conversion</div>
                    <div className="text-2xl font-extrabold text-white">+42.8%</div>
                  </div>
                </div>
                <div className="flex items-end h-12 gap-2 mt-4">
                  {[30, 45, 25, 60, 80, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 1 + (i * 0.1) }}
                      className="w-full bg-brand-gold/60 rounded-t-sm"
                    />
                  ))}
                </div>

                <div className="absolute -top-16 -left-12 opacity-80 rotate-[-15deg]">
                  <span className="font-sans font-bold text-brand-gold text-[10px] tracking-widest uppercase block mb-1">
                    Real Results
                  </span>
                  <HandArrow color="#D4A017" className="w-10 h-10 rotate-[120deg] ml-4" />
                </div>
              </motion.div>

              {/* Speed Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
                className="absolute -right-4 top-32 w-48 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-2xl flex items-center gap-4"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-gold/20 text-brand-gold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/50">PageSpeed</div>
                  <div className="text-lg font-extrabold text-white">99/100</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}