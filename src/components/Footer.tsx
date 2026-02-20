import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#portfolio" },
  { name: "Insights", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const services = [
  { name: "Websites & Landing Pages", href: "#services" },
  { name: "App Development", href: "#services" },
  { name: "SEO & Growth", href: "#services" },
  { name: "Brand Strategy", href: "#services" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030308] border-t border-white/[0.04]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-[#00d4ff] flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="text-lg font-semibold text-white">
                UpMarket<span className="text-[#00d4ff]">.</span>
              </span>
            </a>
            <p className="text-white/35 text-sm leading-relaxed">
              Conversion-focused digital infrastructure for serious brands. Based in Sandton, Johannesburg.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/35 hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/30 hover:text-[#00d4ff] transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-7 text-sm">Navigation</h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-white/35 hover:text-[#00d4ff] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-7 text-sm">Services</h3>
            <ul className="space-y-3.5">
              {services.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(s.href); }}
                    className="text-white/35 hover:text-[#00d4ff] text-sm transition-colors"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-7 text-sm">Contact</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="text-white/35">hello@upmarket.co.za</li>
              <li className="text-white/35">+27 11 123 4567</li>
              <li className="text-white/35">Sandton, Johannesburg</li>
              <li className="text-white/35">Mon-Fri: 9AM-5PM SAST</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © 2026 UpMarket. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/25 hover:text-[#00d4ff] text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/25 hover:text-[#00d4ff] text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
