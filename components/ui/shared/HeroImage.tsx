'use client';

import { HeroImageProps } from '@/types/components';
import { motion } from 'framer-motion';

export function HeroImage({
  imageUrl,
  title,
  subtitle,
  children,
  height = 'h-[30vh]',
  overlayOpacity = 0.5,
}: HeroImageProps) {
  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      {/* ======= BG Image ======= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* ======= Overlay ======= */}
      <div
        className="absolute inset-0 bg-black-custom"
        style={{ opacity: overlayOpacity }}
      />

      {/* ======= Content Container ======= */}
      <div className="relative h-full flex flex-col items-center justify-end md:justify-center px-4 sm:px-6 lg:px-8">
        {/* ======= Title ======= */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white-custom text-center mb-4"
        >
          {title}
        </motion.h1>

        {/* ======= Subtitle ======= */}
        {subtitle && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-white-custom text-center max-w-2xl"
          >
            {subtitle}
          </motion.h2>
        )}

        {/* ======= Children ======= */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-6"
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
}
