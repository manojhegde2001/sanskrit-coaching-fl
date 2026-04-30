'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaScroll, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Drawer, ActionIcon } from 'rizzui';
import Button from '@/components/ui/Button';
import { siteData } from '@/lib/mockData';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Programs' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { site, integrations } = siteData;
  const WA_LINK = `https://wa.me/${integrations.whatsapp.number}?text=${encodeURIComponent(integrations.whatsapp.defaultMessage)}`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('drawer-open');
    } else {
      document.body.classList.remove('drawer-open');
    }
  }, [drawerOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'top-4 w-[calc(100%-2rem)] max-w-7xl mx-auto bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl border border-amber-100/50'
            : 'top-0 w-full bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 md:h-20 flex items-center">
          <div className="flex items-center justify-between gap-4 w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 group flex-shrink-0">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-maroon-900 flex items-center justify-center text-saffron-500 shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                  <FaScroll className="text-xl md:text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span className="heading-cinzel text-xl md:text-2xl font-bold text-maroon-900 tracking-tight leading-tight">
                    {site.name}
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold text-saffron-600 tracking-[0.2em] uppercase">
                    {site.scripts[0]}
                  </span>
                </div>
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
            <ActionIcon
              variant="text"
              className="lg:hidden text-maroon-900 flex-shrink-0"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <FaBars className="w-8 h-8" />
            </ActionIcon>
          </div>
        </div>
      </header>

      {/* RizzUI Drawer for Mobile Menu */}
      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        placement="right"
        className="z-[100]"
      >
        <div className="p-6 h-full flex flex-col bg-cream">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <FaScroll className="text-saffron-500 text-2xl" />
              <span className="heading-cinzel text-lg font-bold text-maroon-900">
                {site.name}
              </span>
            </div>
            <ActionIcon
              variant="text"
              onClick={() => setDrawerOpen(false)}
              className="text-maroon-900"
            >
              <FaTimes className="w-6 h-6" />
            </ActionIcon>
          </div>
          
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-4 rounded-2xl text-base font-semibold transition-all ${
                  pathname === link.href
                    ? 'bg-maroon-900 text-white shadow-xl'
                    : 'text-maroon-800 hover:bg-amber-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto pt-10">
            <p className="text-[10px] text-maroon-600/50 uppercase tracking-[0.2em] mb-4 font-bold">Connect With Us</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-maroon-900 bg-white/50 p-4 rounded-2xl border border-amber-50">
                <div className="w-10 h-10 rounded-xl bg-saffron-50 flex items-center justify-center text-saffron-600 shadow-sm">
                  <FaPhone className="text-sm" />
                </div>
                <span className="text-base font-bold tracking-tight">{site.contact.phone}</span>
              </div>
            </div>
            <Button
              href={WA_LINK}
              variant="primary"
              fullWidth
              size="lg"
              className="rounded-2xl shadow-xl"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
}

