'use client';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%2C%20I%20am%20interested%20in%20learning%20Sanskrit.%20Please%20share%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl group-hover:scale-110 transition-transform" />
      <span className="absolute right-16 bg-maroon-900 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
