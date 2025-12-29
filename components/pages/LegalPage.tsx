'use client';

import { LegalPage } from '@/types/i18n';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { PageHeader } from '../shared/PageHeader';
import Container from '../shared/Container';
import { HERO_TERMS_IMAGE, HERO_PRIVACY_IMAGE } from '@/data';

interface LegalPageComponentProps {
  data: LegalPage;
  pageType: 'privacy' | 'terms' | 'disclaimer';
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

export default function LegalPageComponent({
  data,
  pageType,
}: LegalPageComponentProps) {
  const sections = Object.values(data.sections);

  // Determina immagine in base al tipo di pagina
  const heroImage =
    pageType === 'privacy' ? HERO_PRIVACY_IMAGE : HERO_TERMS_IMAGE;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Full-width Header Section */}
      <PageHeader
        title={data.title}
        subtitle={data.subtitle}
        imageUrl={heroImage}
      />

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
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
