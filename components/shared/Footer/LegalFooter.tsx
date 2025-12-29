'use client';

import { motion } from 'framer-motion';
import { FAKE_AGENCY_NAME } from '@/data';
import { getCurrentYearToString } from '@/lib/current-year';
import { DictAndLocaleProps } from '@/types';

type LegalFooterProps = {
  isInView: boolean;
} & DictAndLocaleProps;

export function LegalFooter({ isInView, locale, dict }: LegalFooterProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay: 1.3 }}
      className="mt-12 pt-8 border-t border-white/10 text-center space-y-2 z-10"
    >
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-4">
        <a
          href={`/${locale}/privacy-policy`}
          className="hover:text-white transition"
        >
          {dict.footer.legal.privacy}
        </a>

        <span>•</span>

        <a
          href={`/${locale}/termini-e-condizioni`}
          className="hover:text-white transition"
        >
          {dict.footer.legal.terms}
        </a>

        <span>•</span>

        <a
          href={`/${locale}/disclaimer`}
          className="hover:text-white transition font-semibold text-yellow-400"
        >
          📚 {locale === 'it' ? 'Disclaimer Progetto' : 'Project Disclaimer'}
        </a>
      </div>

      <p className="text-gray-400 text-sm">
        © {getCurrentYearToString()} {FAKE_AGENCY_NAME}.{' '}
        {dict.footer.legal.rights}
      </p>
    </motion.div>
  );
}
