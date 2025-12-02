'use client';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="relative">
        {/* Lima text with chameleon */}
        <div className="relative">
          <span className="text-brand-pink font-bold text-2xl">Lima</span>
          {/* Chameleon SVG - simplified version */}
          <svg
            className="absolute -top-2 -right-2 w-8 h-8 text-brand-pink"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
        <span className="text-white font-bold text-2xl">Internal</span>
      </div>
    </div>
  );
}

