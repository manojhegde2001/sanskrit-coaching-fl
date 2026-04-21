import React from 'react';
import { Modal as RizzModal, ActionIcon } from 'rizzui';
import { FaTimes, FaCheckCircle, FaScroll } from 'react-icons/fa';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  type?: 'booking' | 'enroll' | 'generic';
  courseName?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  type = 'generic',
  courseName,
}: ModalProps) {
  return (
    <RizzModal
      isOpen={isOpen}
      onClose={onClose}
      containerClassName="z-[110]"
      overlayClassName="backdrop-blur-sm bg-maroon-900/60"
    >
      <div className="relative bg-white rounded-[2rem] shadow-2xl max-w-lg w-full p-8 md:p-10">
        {/* Close button */}
        <ActionIcon
          size="sm"
          variant="text"
          onClick={onClose}
          className="absolute top-6 right-6 text-maroon-900 hover:rotate-90 transition-transform duration-300"
          aria-label="Close modal"
        >
          <FaTimes className="w-5 h-5" />
        </ActionIcon>

        {type === 'booking' && (
          <div className="text-center">
            <div className="w-20 h-20 rounded-3xl bg-maroon-900 flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3">
              <FaCheckCircle className="text-saffron-500 text-4xl" />
            </div>
            <FaScroll className="text-maroon-900/20 text-3xl mx-auto mb-4" />
            <h2 className="heading-cinzel text-3xl font-bold text-maroon-900 mb-4">
              Registration Received!
            </h2>
            <p className="text-maroon-700/70 text-base leading-relaxed mb-8">
              Namaste! We have received your request for a free demo session with **Prasanna Sir**. We will reach out to you on WhatsApp within 24 hours.
            </p>
            <div className="bg-amber-50 rounded-[1.5rem] p-6 mb-8 border border-amber-100 text-left">
              <p className="text-xs text-maroon-600 font-bold uppercase tracking-widest mb-3">Next Steps</p>
              <ul className="text-sm text-maroon-800 space-y-2">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-saffron-500 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                  WhatsApp confirmation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-saffron-500 text-white flex items-center justify-center text-[10px] font-bold">2</span>
                  30-min Intro Call
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-saffron-500 text-white flex items-center justify-center text-[10px] font-bold">3</span>
                  Start Learning
                </li>
              </ul>
            </div>
            <Button variant="primary" fullWidth size="lg" onClick={onClose}>
              Dhanyavadah
            </Button>
          </div>
        )}

        {type === 'enroll' && (
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-emerald-500 text-3xl" />
            </div>
            <h2 className="heading-cinzel text-2xl font-bold text-maroon-900 mb-2">
              Interested in Enrollment!
            </h2>
            {courseName && (
              <div className="px-4 py-2 bg-saffron-50 rounded-lg inline-block mb-4">
                <p className="text-saffron-700 font-bold text-sm">
                  {courseName}
                </p>
              </div>
            )}
            <p className="text-maroon-700/70 text-sm leading-relaxed mb-8">
              We&apos;ve noted your interest. Prasanna Sir will contact you shortly to discuss the schedule and curriculum details.
            </p>
            <Button
              href={`https://wa.me/919482111881?text=Namaste!%20I%20am%20interested%20in%20the%20${courseName?.replace(/\s/g, '%20')}%20course.`}
              variant="primary" 
              fullWidth 
              size="lg"
            >
              Chat on WhatsApp
            </Button>
          </div>
        )}

        {type === 'generic' && (
          <div className="pt-4">
            {title && (
              <h2 className="heading-cinzel text-2xl font-bold text-maroon-900 mb-6">
                {title}
              </h2>
            )}
            {children}
          </div>
        )}
      </div>
    </RizzModal>
  );
}
