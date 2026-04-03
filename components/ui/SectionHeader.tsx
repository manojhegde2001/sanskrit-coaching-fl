interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  dark = false,
}: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${textAlign} mb-12`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-saffron-500 mb-3">
          <span className="w-6 h-px bg-saffron-500" />
          {eyebrow}
          <span className="w-6 h-px bg-saffron-500" />
        </span>
      )}
      <h2
        className={`heading-cinzel text-3xl md:text-4xl font-bold leading-tight ${
          dark ? 'text-white' : 'text-maroon-900'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>
      <div className="gold-divider mt-4 mb-5" style={{ margin: align === 'center' ? '16px auto 20px' : '16px 0 20px' }} />
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${
            dark ? 'text-amber-200/80' : 'text-maroon-700/70'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
