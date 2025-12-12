'use client';

import { Dictionary } from '@/types/i18n';
import { motion } from 'framer-motion';

import { Locale } from '@/i18n/config';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import SecondaryButton from '@/components/ui/buttons/SecondaryButton';

interface HeroSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function HeroSection({ dict, locale }: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden snap-section">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/753580183?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '100vw',
            height: '100vh',
            minWidth: '177.77vh', // 16:9 aspect ratio
            minHeight: '56.25vw', // 16:9 aspect ratio
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
        />
      </div>

      {/* Overlay scuro per migliorare leggibilità */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Contenuto Hero */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Testo con effetto sottrai */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-9xl font-bold uppercase text-white mb-12 text-center leading-tight"
          style={{ mixBlendMode: 'difference' }}
        >
          SAN BASSO
          <br />
          FESTIVAL
        </motion.h1>

        {/* Bottoni */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <PrimaryButton href={`/${locale}/contacts`}>Lorem</PrimaryButton>
          <SecondaryButton href={`/${locale}/contacts`}>Lorem</SecondaryButton>
        </motion.div>
      </div>

      {/* Freccia animata verso il basso */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        onClick={() => {
          document
            .getElementById('tradizione')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
