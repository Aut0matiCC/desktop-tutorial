import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * ScrollReveal - wraps children in a Framer Motion scroll-triggered animation.
 * fade + translateY(16px), fires once only.
 * Respects prefers-reduced-motion.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const variants = {
    hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      as={Tag}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollRevealGroup - staggered children with 70ms between each item
 */
export function ScrollRevealGroup({ children, className = '', stagger = 0.07 }) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };

  const item = {
    hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
          <motion.div key={i} variants={item}>
            {child}
          </motion.div>
        ))
        : <motion.div variants={item}>{children}</motion.div>
      }
    </motion.div>
  );
}
