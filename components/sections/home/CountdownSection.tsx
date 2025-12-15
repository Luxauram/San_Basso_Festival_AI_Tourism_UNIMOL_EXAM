'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Locale } from '@/i18n/config';
import { Dictionary } from '@/types/i18n';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';

interface CountdownSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function CountdownSection({
  dict,
  locale,
}: CountdownSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactsRoute = locale === 'it' ? '/contatti' : '/contacts';

  return (
    <section
      ref={ref}
      className="snap-section flex items-center justify-center bg-black text-white py-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          {dict.footer.cta.title}
        </h2>
        <PrimaryButton href={`/${locale}${contactsRoute}`}>
          {dict.footer.cta.button}
        </PrimaryButton>
      </motion.div>
    </section>
  );
}
