import { Button as RizzButton, ButtonProps as RizzButtonProps } from 'rizzui';
import Link from 'next/link';

interface ButtonProps extends Omit<RizzButtonProps, 'variant' | 'size'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
}

const variantStyles = {
  primary: 'bg-saffron-gradient text-white shadow-saffron hover:shadow-lg hover:opacity-90 font-semibold border-0',
  secondary: 'bg-white text-saffron-600 border-2 border-saffron-400 hover:bg-saffron-50 font-semibold',
  ghost: 'bg-transparent text-maroon-800 hover:bg-amber-50 font-medium border-0',
  outline: 'bg-transparent text-white border-2 border-white/60 hover:bg-white hover:text-saffron-600 font-semibold',
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
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = `${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http://') || href.startsWith('https://');
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${baseStyles}`}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={`inline-flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${baseStyles}`}>
        {children}
      </Link>
    );
  }

  return (
    <RizzButton
      className={baseStyles}
      {...props}
    >
      {children}
    </RizzButton>
  );
}
