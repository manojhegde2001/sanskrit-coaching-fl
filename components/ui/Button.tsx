import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const variantStyles = {
  primary:
    'bg-saffron-gradient text-white shadow-saffron hover:shadow-lg hover:opacity-90 font-semibold',
  secondary:
    'bg-white text-saffron-600 border-2 border-saffron-400 hover:bg-saffron-50 font-semibold',
  ghost:
    'bg-transparent text-maroon-800 hover:bg-amber-50 font-medium',
  outline:
    'bg-transparent text-white border-2 border-white/60 hover:bg-white hover:text-saffron-600 font-semibold',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  fullWidth = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = `inline-flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
    fullWidth ? 'w-full' : ''
  } ${variantStyles[variant]} ${sizeStyles[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseStyles}>
      {children}
    </button>
  );
}
