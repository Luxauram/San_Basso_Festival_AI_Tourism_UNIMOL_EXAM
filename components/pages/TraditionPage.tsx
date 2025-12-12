'use client';

import { Dictionary } from '@/types/i18n';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TraditionPageProps {
  dict: Dictionary;
}

function ContentBlock({
  title,
  content,
  index,
}: {
  title: string;
  content: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
    >
      <h3 className="text-3xl font-bold mb-4 text-purple-600">{title}</h3>
      <p className="text-lg text-gray-700 leading-relaxed">{content}</p>
    </motion.div>
  );
}

export default function TraditionPageComponent({ dict }: TraditionPageProps) {
  const sections = [
    dict.tradition.page.origins,
    dict.tradition.page.legend,
    dict.tradition.page.procession,
    dict.tradition.page.today,
    dict.tradition.page.community,
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pt-24 pb-16">
      {/* Header con immagine di sfondo */}
      <div className="relative h-96 bg-gradient-to-br from-purple-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-9xl">⚓</div>
          <div className="absolute bottom-10 right-10 text-9xl">🌊</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl">
            ⛪
          </div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4"
            >
              {dict.tradition.page.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200"
            >
              {dict.tradition.page.subtitle}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Contenuto */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="space-y-8">
          {sections.map((section, index) => (
            <ContentBlock
              key={index}
              title={section.title}
              content={section.content}
              index={index}
            />
          ))}
        </div>

        {/* Quote finale */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-12"
        >
          <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800">
            La tradizione è il ponte tra passato e futuro
          </blockquote>
        </motion.div>
      </div>
    </main>
  );
}
