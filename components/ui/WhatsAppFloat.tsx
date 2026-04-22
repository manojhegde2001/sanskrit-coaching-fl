'use client';
import { FaWhatsapp } from 'react-icons/fa';

const WA_LINK =
  'https://wa.me/919482111881?text=Hello%2C%20I%27m%20interested%20in%20Sanskrit%20classes.%20I%20would%20like%20to%20book%20a%20free%20demo%20session.';

export default function WhatsAppFloat() {
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
