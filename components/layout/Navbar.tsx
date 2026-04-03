'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaOm } from 'react-icons/fa';
import Button from '@/components/ui/Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/one-on-one', label: '1-on-1 Learning' },
  { href: '/courses', label: 'Courses' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-saffron-500 text-2xl transition-transform group-hover:rotate-[20deg] duration-300">
                <FaOm />
              </span>
              <div>
                <span className="heading-cinzel text-xl font-bold text-maroon-900 leading-none block">
                  Sanskrit<span className="text-saffron-500">Guru</span>
                </span>
                <span className="text-xs text-gold-600 font-medium tracking-widest uppercase">
                  Personalized Coaching
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
                    pathname === link.href
                      ? 'text-saffron-500'
                      : 'text-maroon-800 hover:text-saffron-500'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-saffron-gradient rounded transition-all duration-300 ${
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button href="/contact" variant="primary" size="sm">
                Book Free Session
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-maroon-900 text-2xl p-2 rounded-lg hover:bg-amber-50 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-maroon-900/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <div className="flex items-center gap-2 mb-8">
              <FaOm className="text-saffron-500 text-2xl" />
              <span className="heading-cinzel text-lg font-bold text-maroon-900">
                Sanskrit<span className="text-saffron-500">Guru</span>
              </span>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-saffron-50 text-saffron-600 font-semibold'
                      : 'text-maroon-800 hover:bg-amber-50 hover:text-saffron-500'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8">
              <Button href="/contact" variant="primary" fullWidth>
                Book Free Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
