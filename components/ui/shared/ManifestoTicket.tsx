'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Locale } from '@/i18n/config';

interface ManifestoTicketProps {
  locale: Locale;
}

export default function ManifestoTicket({ locale }: ManifestoTicketProps) {
  const [isHovered, setIsHovered] = useState(false);

  const text = {
    it: 'Scarica la Locandina',
    en: 'Download the Poster',
  };

  return (
    <motion.a
      href={`/${locale}/manifesto`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative block cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{
          rotateZ: isHovered ? -2 : -8,
        }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {/* Ticket Background */}
        <div className="relative bg-yellow-400 rounded-lg shadow-lg overflow-hidden border-2 border-black w-48 h-20">
          {/* Decorazioni ticket */}
          <div className="absolute top-2 left-2 flex gap-2">
            <span className="text-xs">✦</span>
            <span className="text-xs">✕</span>
            <span className="text-xs">✦</span>
          </div>

          {/* Testo principale */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-bold text-black text-sm uppercase tracking-tight text-center px-4">
              {text[locale]}
            </span>
          </div>

          {/* Info in alto a destra */}
          <div className="absolute top-2 right-2 text-xs font-bold">2025</div>

          {/* Decorazione buco ticket */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full -ml-2 border-2 border-black" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full -mr-2 border-2 border-black" />
        </div>

        {/* Ombra */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.3 : 0.2,
            y: isHovered ? 8 : 4,
          }}
          className="absolute inset-0 bg-black rounded-lg -z-10"
          style={{
            filter: 'blur(8px)',
          }}
        />
      </motion.div>
    </motion.a>
  );
}
