import Link from 'next/link';
import { FaOm, FaWhatsapp, FaInstagram, FaYoutube, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt, FaScroll } from 'react-icons/fa';

const footerLinks = {
  Pages: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Learning Programs' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/contact', label: 'Contact & Booking' },
  ],
  Programs: [
    { href: '/courses', label: 'Personalized Sanskrit (1:1)' },
    { href: '/courses', label: 'Academic Support (CBSE/State)' },
    { href: '/courses', label: 'Shlokas & Scriptures' },
  ],
};

const socialLinks = [
  { href: '#', icon: FaWhatsapp, label: 'WhatsApp', color: 'hover:text-green-400' },
  { href: '#', icon: FaInstagram, label: 'Instagram', color: 'hover:text-pink-400' },
  { href: '#', icon: FaYoutube, label: 'YouTube', color: 'hover:text-red-400' },
  { href: '#', icon: FaFacebook, label: 'Facebook', color: 'hover:text-blue-400' },
];

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
                Helping students excel in Sanskrit through personalized online coaching. Experience the depth of tradition with modern academic clarity.
              </p>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`text-amber-300 ${social.color} transition-colors duration-200 text-xl`}
                >
                  <social.icon />
                </a>
              ))}
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
              <li className="text-sm text-amber-200/50">CBSE & State Board</li>
              <li className="text-sm text-amber-200/50">Basic Sanskrit</li>
              <li className="text-sm text-amber-200/50">Advanced Vyakarana</li>
              <li className="text-sm text-amber-200/50">Kannada Language</li>
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
                <span className="text-sm text-amber-200/70 text-right">8073362748</span>
              </li>
              <li className="flex items-start gap-3">
                <FaWhatsapp className="text-saffron-400 mt-0.5 shrink-0" />
                <span className="text-sm text-amber-200/70 text-right">9482111881</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-saffron-400 mt-0.5 shrink-0" />
                <span className="text-sm text-amber-200/70 text-right break-all">harihiom02@gmail.com</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-gold-500/20">
              <p className="text-xs text-amber-200/60 mb-1">Class schedule (IST)</p>
              <p className="text-sm text-amber-100 font-medium">Mon – Sat: 6 AM – 9 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-amber-200/40">
            © {new Date().getFullYear()} Sanatana Dhara. All rights reserved.
          </p>
          <p className="text-xs text-amber-200/40 text-center">
            ॐ तत् सत् — &quot;That is Truth&quot;
          </p>
          <p className="text-xs text-amber-200/40">
            Built with ❤️ for Sanskrit learners worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
