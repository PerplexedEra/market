import { Sparkles, TrendingUp, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { MarkerUnderline, HandArrow } from "@/components/ui/Handdrawn";

export function Hero() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-warm-mesh pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center">
      <div className="container-premium relative z-10 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

          {/* Left Column: Copy */}
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
              className="inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/10 px-4 py-2 font-sans text-sm font-bold text-brand-slate shadow-sm"
            >
              <Sparkles className="h-4 w-4 text-brand-gold" />
              {t.hero.chips[2]}
            </motion.div>

            <h1 className="mt-8 text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-sans font-extrabold text-brand-slate leading-[1.05] tracking-tighter">
              {t.hero.headline1} {t.hero.headline2}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-2 relative w-fit"
              >
                <MarkerUnderline color="#FFB703" className="w-[110%] -left-[5%]" />
              </motion.div>
            </h1>

            <p className="mt-8 font-serif text-xl sm:text-2xl italic text-brand-slate/80 leading-relaxed max-w-[500px]">
              {t.hero.subhead}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a href="#services" className="btn-primary w-full sm:w-auto hover:scale-105 active:scale-95">
                {t.hero.ctaPrimary}
              </a>
              <a href="#portfolio" className="btn-secondary w-full sm:w-auto hover:bg-brand-slate/5">
                {t.hero.ctaSecondary}
              </a>
            </div>

            <p className="mt-6 font-sans text-xs font-bold uppercase tracking-widest text-brand-slate/40">
              {t.hero.note}
            </p>
          </motion.div>

          {/* Right Column: Premium Framer Motion Mockups */}
          <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
            <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full">

              {/* Main App Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, rotateY: 20, rotateX: 10, z: -100 }}
                animate={{ opacity: 1, rotateY: -5, rotateX: 2, z: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="absolute top-10 right-0 w-[500px] rounded-[2rem] bg-brand-sand/50 p-2 shadow-premium backdrop-blur-xl border border-white/50"
              >
                <div className="bg-white rounded-[1.5rem] p-6 h-[400px] w-full shadow-premium-inner overflow-hidden relative">
                  {/* macOS Dots */}
                  <div className="flex gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-brand-slate/20"></div>
                    <div className="w-3 h-3 rounded-full bg-brand-slate/20"></div>
                    <div className="w-3 h-3 rounded-full bg-brand-slate/20"></div>
                  </div>

                  {/* Fake UI Skeleton */}
                  <div className="space-y-4">
                    <div className="h-8 w-1/3 bg-brand-sand rounded-lg"></div>
                    <div className="h-4 w-1/2 bg-brand-sand/50 rounded-lg"></div>
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-24 bg-brand-sand rounded-xl"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
                style={{ y: y2 }}
                className="absolute -left-10 bottom-32 w-64 rounded-3xl bg-white p-6 shadow-premium border border-brand-slate/5"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-slate/50">Conversion</div>
                    <div className="text-2xl font-extrabold text-brand-slate">+42.8%</div>
                  </div>
                </div>
                {/* Micro Chart */}
                <div className="flex items-end h-12 gap-2 mt-4">
                  {[30, 45, 25, 60, 80, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 1 + (i * 0.1) }}
                      className="w-full bg-brand-slate rounded-t-sm"
                    />
                  ))}
                </div>

                <div className="absolute -top-16 -left-12 opacity-80 rotate-[-15deg]">
                  <span className="font-sans font-bold text-brand-gold text-[10px] tracking-widest uppercase block mb-1">
                    Real Results
                  </span>
                  <HandArrow color="#FFB703" className="w-10 h-10 rotate-[120deg] ml-4" />
                </div>
              </motion.div>

              {/* Security/Speed Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
                className="absolute -right-8 top-32 w-48 rounded-2xl bg-brand-slate p-4 shadow-2xl flex items-center gap-4 shadow-brand-slate/20"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-brand-gold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/50">PageSpeed Performance</div>
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