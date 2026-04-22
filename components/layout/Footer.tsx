import Link from 'next/link';
import { FaWhatsapp, FaPhone, FaEnvelope, FaScroll } from 'react-icons/fa';

const WA_LINK =
  'https://wa.me/919482111881?text=Hello%2C%20I%27m%20interested%20in%20Sanskrit%20classes.%20I%20would%20like%20to%20book%20a%20free%20demo%20session.';

const footerLinks = {
  Pages: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Programs' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/contact', label: 'Contact' },
  ],
  Programs: [
    { href: '/courses', label: 'Personalized Sanskrit (1:1)' },
    { href: '/courses', label: 'Academic Support (CBSE / State Board)' },
    { href: '/courses', label: 'Shlokas & Scriptures Learning' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-maroon-900 text-amber-100">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Link href="/" className="inline-flex flex-col">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-maroon-800 flex items-center justify-center text-saffron-500 shadow-xl shadow-black/20">
                    <FaScroll className="text-lg" />
                  </div>
                  <span className="heading-cinzel text-2xl font-bold text-white tracking-tight">
                    Sanatanadhara
                  </span>
                </div>
                <span className="text-xs font-semibold text-saffron-400 tracking-[0.1em] border-b border-saffron-400/20 pb-0.5 inline-block uppercase">
                  सनातनधारा / ಸನಾತನಧಾರ
                </span>
              </Link>
              <p className="text-amber-200/60 text-sm leading-relaxed max-w-sm">
                Personalized Sanskrit learning through flexible one-on-one sessions tailored to your pace, goals, and background.
              </p>
            </div>
            {/* WhatsApp link */}
            <div className="mt-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center gap-2 text-amber-300 hover:text-green-400 transition-colors duration-200 text-sm font-semibold"
              >
                <FaWhatsapp className="text-xl" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.Pages.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-amber-200/50 hover:text-saffron-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.Programs.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-amber-200/50 hover:text-saffron-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="heading-cinzel text-sm font-semibold text-gold-400 uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaPhone className="text-saffron-400 mt-0.5 shrink-0" />
                <a href="tel:+918073362748" className="text-sm text-amber-200/70 hover:text-saffron-400 transition-colors">
                  8073362748
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaWhatsapp className="text-saffron-400 mt-0.5 shrink-0" />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-amber-200/70 hover:text-saffron-400 transition-colors">
                  9482111881
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-saffron-400 mt-0.5 shrink-0" />
                <a href="mailto:harihiom02@gmail.com" className="text-sm text-amber-200/70 hover:text-saffron-400 transition-colors break-all">
                  harihiom02@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-amber-200/40">
            © {new Date().getFullYear()} Sanatanadhara. All rights reserved.
          </p>
          <p className="text-xs text-amber-200/40 text-center">
            ॐ तत् सत्
          </p>
        </div>
      </div>
    </footer>
  );
}
