import { motion, useReducedMotion } from 'framer-motion';

/**
 * Animated road-line SVG that echoes the logo's highway sweep.
 * variant="hero"  - wide, full-bleed, animates on mount
 * variant="page"  - short flourish behind H1 on service/about pages
 * variant="divider" - thin full-width section divider line
 */
export default function RoadLine({ variant = 'hero', className = '' }) {
  const prefersReduced = useReducedMotion();

  if (variant === 'divider') {
    return (
      <div
        className={`road-divider ${className}`}
        role="presentation"
        aria-hidden="true"
      />
    );
  }

  if (variant === 'page') {
    return (
      <svg
        className={`absolute bottom-0 left-0 w-full pointer-events-none select-none ${className}`}
        height="6"
        viewBox="0 0 800 6"
        preserveAspectRatio="none"
        aria-hidden="true"
        role="presentation"
      >
        <defs>
          <linearGradient id="highway-grad-page" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F0561D" />
            <stop offset="45%" stopColor="#E31E4D" />
            <stop offset="100%" stopColor="#1C8FC7" />
          </linearGradient>
        </defs>
        <rect x="0" y="2" width="800" height="3" rx="2" fill="url(#highway-grad-page)" opacity="0.7" />
      </svg>
    );
  }

  // Hero variant - animated draw-in
  const dash = 1200;
  return (
    <svg
      className={`w-full pointer-events-none select-none ${className}`}
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      role="presentation"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="highway-grad-hero" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F0561D" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#E31E4D" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1C8FC7" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* Main sweeping road line */}
      <motion.path
        d="M 0 60 Q 300 20 600 40 Q 900 60 1200 30"
        fill="none"
        stroke="url(#highway-grad-hero)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={dash}
        initial={{ strokeDashoffset: prefersReduced ? 0 : dash }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
      />
      {/* Secondary lane line (dashed) */}
      <motion.path
        d="M 0 64 Q 300 24 600 44 Q 900 64 1200 34"
        fill="none"
        stroke="url(#highway-grad-hero)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="12 8"
        opacity="0.35"
        initial={{ strokeDashoffset: prefersReduced ? 0 : dash }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.5 }}
      />
    </svg>
  );
}
