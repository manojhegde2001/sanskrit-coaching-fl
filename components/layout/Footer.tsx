import Link from 'next/link';
import { FaOm, FaWhatsapp, FaInstagram, FaYoutube, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const footerLinks = {
  Pages: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/one-on-one', label: 'Personalized Learning' },
    { href: '/courses', label: 'Courses' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/contact', label: 'Contact & Booking' },
  ],
  Courses: [
    { href: '/courses', label: 'Beginner Sanskrit' },
    { href: '/courses', label: 'Intermediate Sanskrit' },
    { href: '/courses', label: 'Bhagavad Gita Course' },
    { href: '/one-on-one', label: '1-on-1 Learning' },
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
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <FaOm className="text-saffron-500 text-3xl" />
              <div>
                <span className="heading-cinzel text-xl font-bold text-white block leading-none">
                  Sanskrit<span className="text-saffron-400">Guru</span>
                </span>
                <span className="text-xs text-gold-400 font-medium tracking-widest uppercase">
                  Personalized Coaching
                </span>
              </div>
            </Link>
            <p className="text-sm text-amber-200/70 leading-relaxed mb-6">
              Expert Sanskrit coaching for international students. Personalized one-on-one learning and structured courses designed to connect you with ancient wisdom.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4">
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

          {/* Pages */}
          <div>
            <h3 className="heading-cinzel text-sm font-semibold text-gold-400 uppercase tracking-widest mb-4">
              Pages
            </h3>
            <ul className="space-y-2">
              {footerLinks.Pages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-amber-200/70 hover:text-saffron-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="heading-cinzel text-sm font-semibold text-gold-400 uppercase tracking-widest mb-4">
              Courses
            </h3>
            <ul className="space-y-2">
              {footerLinks.Courses.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-amber-200/70 hover:text-saffron-400 transition-colors duration-200"
                  >
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
                <span className="text-sm text-amber-200/70">+91 99999 99999</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-saffron-400 mt-0.5 shrink-0" />
                <span className="text-sm text-amber-200/70">contact@sanskritguru.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-saffron-400 mt-0.5 shrink-0" />
                <span className="text-sm text-amber-200/70">Online — Available Worldwide</span>
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
            © {new Date().getFullYear()} SanskritGuru. All rights reserved.
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
