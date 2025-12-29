'use client';

import { ButtonProps } from '@/types';
import { motion } from 'framer-motion';

export default function PrimaryButton({
  children,
  onClick,
  href,
  className = '',
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseClasses =
    'px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-primary-custom text-black font-bold text-sm sm:text-base md:text-lg rounded-lg uppercase tracking-wide shadow-xl shadow-black/25';

  const hoverStyles = {
    scale: 1.05,
    boxShadow:
      '0 25px 30px -5px rgba(0, 0, 0, 0.3), 0 15px 15px -5px rgba(0, 0, 0, 0.2)',
    filter: 'brightness(1.1)',
  };

  const tapStyles = {
    scale: 0.95,
    boxShadow:
      '0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
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
        className={`${baseClasses} ${className} inline-block`}
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
      className={`${baseClasses} ${className}`}
    >
      {children}
    </motion.button>
  );
}
