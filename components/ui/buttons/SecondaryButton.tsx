'use client';

import { motion } from 'framer-motion';
import type { ButtonProps } from '@/types';

export default function SecondaryButton({
  children,
  onClick,
  href,
  className = '',
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseClasses = `px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-transparent border-2 border-secondary-custom text-secondary-custom font-bold text-sm sm:text-base md:text-lg rounded-lg uppercase tracking-wide shadow-lg shadow-secondary-custom/20 ${className}`;

  const hoverStyles = {
    backgroundColor: '#e0a229',
    color: '#ffffff',
    scale: 1.05,
    boxShadow:
      '0 20px 25px -5px rgba(224, 162, 41, 0.3), 0 10px 10px -5px rgba(224, 162, 41, 0.2)',
  };

  const tapStyles = {
    scale: 0.95,
    boxShadow:
      '0 4px 6px -1px rgba(224, 162, 41, 0.1), 0 2px 4px -1px rgba(224, 162, 41, 0.06)',
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        {...props}
        whileHover={hoverStyles}
        whileTap={tapStyles}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={`${baseClasses} inline-block`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={hoverStyles}
      whileTap={tapStyles}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
}
