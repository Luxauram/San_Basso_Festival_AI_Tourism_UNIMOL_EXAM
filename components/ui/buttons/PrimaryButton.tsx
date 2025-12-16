'use client';

import { ButtonProps } from '@/types';
import { motion } from 'framer-motion';

export default function PrimaryButton({
  children,
  onClick,
  href,
  className = '',
}: ButtonProps) {
  const baseClasses =
    'px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-yellow-400 text-black font-bold text-sm sm:text-base md:text-lg rounded-lg hover:bg-yellow-300 transition-colors uppercase tracking-wide';

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseClasses} ${className} inline-block`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </motion.button>
  );
}
