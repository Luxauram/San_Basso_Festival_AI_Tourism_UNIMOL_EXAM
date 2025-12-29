'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { PageHeader } from '../shared/PageHeader';
import {
  HERO_TERMS_IMAGE,
  HERO_PRIVACY_IMAGE,
  HERO_DISCLAIMER_IMAGE,
} from '@/data';
import { LegalPageComponentProps } from '@/types';

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
      className="mb-8 last:mb-0"
    >
      <h2 className="text-black-custom mb-3">{title}</h2>
      <p className="text-black-custom leading-relaxed">{content}</p>
    </motion.div>
  );
}

export default function LegalPageComponent({
  data,
  pageType,
}: LegalPageComponentProps) {
  const sections = Object.values(data.sections);

  //======= Hero Image =======
  let heroImage;

  if (pageType === 'privacy') {
    heroImage = HERO_PRIVACY_IMAGE;
  } else if (pageType === 'terms') {
    heroImage = HERO_TERMS_IMAGE;
  } else if (pageType === 'disclaimer') {
    heroImage = HERO_DISCLAIMER_IMAGE;
  } else {
    // Fallback di default
    heroImage = HERO_TERMS_IMAGE;
  }

  return (
    <main className="min-h-screen bg-white-custom">
      {/* ======= Hero ======= */}
      <PageHeader
        title={data.title}
        subtitle={data.subtitle}
        imageUrl={heroImage}
      />

      {/* ======= Main Content ======= */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-linear-to-br from-white via-white to-gray-50 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden border border-gray-100"
        >
          {/* ======= Decorative elements ======= */}
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-primary-custom/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-primary-custom/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 w-20 h-20 sm:w-32 sm:h-32 bg-primary-custom/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10">
            {/* ======= Last Update ======= */}
            <div className="mb-8 pb-6 sm:pb-8 border-b border-gray-200">
              <p className="text-black-custom text-sm sm:text-base font-medium flex items-center gap-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-primary-custom"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{data.lastUpdated}: 07/12/2025</span>
              </p>
            </div>

            {/* ======= Section Content ======= */}
            <div className="space-y-8 sm:space-y-10">
              {sections.map((section, index) => (
                <Section
                  key={index}
                  title={section.title}
                  content={section.content}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
