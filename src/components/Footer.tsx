import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  { name: 'Web Design', href: '#services' },
  { name: 'SEO & Marketing', href: '#services' },
  { name: 'App Development', href: '#services' },
  { name: 'Brand Strategy', href: '#services' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060612] border-t border-white/5">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="text-lg font-semibold text-white">
                UpMarket<span className="text-purple-400">.</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed">
              Transforming Johannesburg businesses through innovative digital solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:bg-purple-500/20 hover:border-purple-500/40 hover:text-purple-300 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-white/40 hover:text-purple-300 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(service.href); }}
                    className="text-white/40 hover:text-purple-300 text-sm transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-white/40">hello@upmarket.co.za</li>
              <li className="text-white/40">+27 11 123 4567</li>
              <li className="text-white/40">123 Main Street</li>
              <li className="text-white/40">Johannesburg, SA</li>
              <li className="text-white/40">Mon-Fri: 9AM-5PM SAST</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © 2026 UpMarket. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-purple-300 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 hover:text-purple-300 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
