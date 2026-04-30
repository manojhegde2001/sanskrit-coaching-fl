'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { siteData } from '@/lib/mockData';

export default function WhatsAppFloat() {
  const { integrations } = siteData;
  const WA_LINK = `https://wa.me/${integrations.whatsapp.number}?text=${encodeURIComponent(integrations.whatsapp.defaultMessage)}`;

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl md:text-4xl text-white group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 bg-white text-maroon-900 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-amber-50">
        Chat on WhatsApp
      </span>
    </a>
  );
}

