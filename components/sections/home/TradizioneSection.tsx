'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Locale } from '@/i18n/config';
import { Dictionary } from '@/types/i18n';

interface TradizioneSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function TradizioneSection({
  dict,
  locale,
}: TradizioneSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const traditionRoute = locale === 'it' ? '/tradizione' : '/tradition';

  return (
    <section
      ref={ref}
      className="snap-section flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-9xl">⚓</div>
        <div className="absolute bottom-20 right-10 text-9xl">🌊</div>
      </div>

      <div className="max-w-5xl px-8 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8 text-gray-900"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {dict.tradition.title}
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <p>{dict.tradition.description1}</p>
            <p>{dict.tradition.description2}</p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8 inline-block"
            >
              <a
                href={`/${locale}${traditionRoute}`}
                className="text-purple-600 font-semibold text-xl hover:text-purple-800 transition flex items-center gap-2"
              >
                {dict.tradition.cta} →
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
