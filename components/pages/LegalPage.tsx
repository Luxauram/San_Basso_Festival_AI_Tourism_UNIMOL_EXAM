'use client';

import { LegalPage } from '@/types/i18n';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { PageHeader } from '../shared/PageHeader';

interface LegalPageComponentProps {
  data: LegalPage;
}

function Section({
  title,
  content,
  index,
}: {
  title: string;
  content: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </motion.div>
  );
}

export default function LegalPageComponent({ data }: LegalPageComponentProps) {
  const sections = Object.values(data.sections);

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <PageHeader title={data.title} />

          <p className="text-gray-500 mb-8 pb-8 border-b">
            {data.lastUpdated}: 07/12/2025
          </p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <Section
                key={index}
                title={section.title}
                content={section.content}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t text-center text-gray-600"
          >
            <p>
              Per domande o chiarimenti, contattaci a{' '}
              <a
                href="mailto:info@sanbassoevents.it"
                className="text-purple-600 hover:underline"
              >
                info@sanbassoevents.it
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
