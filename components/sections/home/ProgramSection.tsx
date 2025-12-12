'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Locale } from '@/i18n/config';
import { Dictionary } from '@/types/i18n';

interface ProgramSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function ProgramSection({ dict, locale }: ProgramSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const programRoute = locale === 'it' ? '/programma' : '/program';

  const highlights = [dict.program.day1, dict.program.day2, dict.program.day3];

  return (
    <section
      ref={ref}
      className="snap-section flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 text-white"
    >
      <div className="max-w-6xl px-8 py-16 w-full">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {dict.program.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="text-yellow-400 font-bold text-sm mb-2">
                {event.day}
              </div>
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <div className="text-gray-300 mb-3">🕐 {event.time}</div>
              <p className="text-gray-200">{event.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <a
            href={`/${locale}${programRoute}`}
            className="inline-block text-yellow-400 font-semibold text-xl hover:text-yellow-300 transition"
          >
            {dict.program.cta} →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
