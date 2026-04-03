'use client';

import { ReactNode, useEffect } from 'react';
import { FaTimes, FaCheckCircle, FaOm } from 'react-icons/fa';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
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
  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-maroon-900/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-fade-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-maroon-600 hover:bg-saffron-50 hover:text-saffron-500 transition-colors"
          aria-label="Close modal"
        >
          <FaTimes className="text-sm" />
        </button>

        {type === 'booking' && (
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-saffron-50 border-4 border-saffron-100 flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-saffron-500 text-4xl" />
            </div>
            <FaOm className="text-gold-400 text-2xl mx-auto mb-3" />
            <h2 className="heading-cinzel text-2xl font-bold text-maroon-900 mb-3">
              Session Requested!
            </h2>
            <p className="text-maroon-700/70 text-sm leading-relaxed mb-6">
              Thank you for your interest! Our team will contact you within <strong>24 hours</strong> on WhatsApp or email to confirm your free intro session.
            </p>
            <div className="bg-amber-50 rounded-2xl p-4 mb-6 border border-amber-100">
              <p className="text-xs text-maroon-600/70 mb-1">What happens next?</p>
              <ul className="text-sm text-maroon-700 space-y-1 text-left">
                <li>✅ We review your details</li>
                <li>✅ Schedule a 30-min free call</li>
                <li>✅ Discuss your learning goals</li>
                <li>✅ Propose a personalized plan</li>
              </ul>
            </div>
            <Button variant="primary" fullWidth onClick={onClose}>
              Got it, Thank you!
            </Button>
          </div>
        )}

        {type === 'enroll' && (
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-emerald-500 text-4xl" />
            </div>
            <h2 className="heading-cinzel text-2xl font-bold text-maroon-900 mb-2">
              Enrollment Interest!
            </h2>
            {courseName && (
              <p className="text-saffron-600 font-semibold text-sm mb-3">
                {courseName}
              </p>
            )}
            <p className="text-maroon-700/70 text-sm leading-relaxed mb-6">
              We&apos;ve noted your interest in this course. Our team will reach out within <strong>24 hours</strong> to share batch details, fee structure, and enrollment steps.
            </p>
            <Button variant="primary" fullWidth onClick={onClose}>
              Sounds Great!
            </Button>
          </div>
        )}

        {type === 'generic' && (
          <>
            {title && (
              <h2 className="heading-cinzel text-xl font-bold text-maroon-900 mb-4">
                {title}
              </h2>
            )}
            {children}
          </>
        )}
      </div>
    </div>
  );
}
