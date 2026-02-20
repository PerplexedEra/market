import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Features />
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