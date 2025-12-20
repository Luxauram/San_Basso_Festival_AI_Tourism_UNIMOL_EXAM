'use client';

import { motion } from 'framer-motion';
import { WavyBackground } from '../ui/wavy-background';

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <motion.h1
        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase text-white inter-var text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
      >
        {title.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.03 }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>
      <h2 className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        {subtitle}
      </h2>
    </WavyBackground>
  );
}
