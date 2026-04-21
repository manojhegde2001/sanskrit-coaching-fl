'use client';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919482111881?text=Namaste!%20I%20am%20interested%20in%20learning%20Sanskrit%20with%20Prasanna%20Sir.%20Can%20you%20please%20share%20more%20details?"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="text-3xl md:text-4xl text-white group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 bg-white text-maroon-900 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-amber-50">
        Chat with Prasanna Sir
      </span>
    </a>
  );
}
