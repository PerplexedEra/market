import { useEffect, useRef, useCallback } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [onMouseMove]);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-slate overflow-x-hidden relative">
      {/* Cursor glow — subtle site-wide radial light */}
      <div ref={cursorRef} className="cursor-glow hidden lg:block" />

      <Navigation />
      <main>
        <Hero />
        <Features />
        <BeforeAfter />
        <Services />
        <Portfolio />
        <About />
        <Stats />
        <Testimonials />
        <CTA />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;