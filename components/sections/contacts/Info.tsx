'use client';

import { motion } from 'framer-motion';
import SocialNetworks from '@/components/ui/shared/icons/social-networks/SocialNetworks';
import { DictAndLocaleProps } from '@/types';

export default function Info({ dict }: DictAndLocaleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="relative bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl shadow-2xl p-8 sm:p-10 h-full flex flex-col overflow-hidden border border-gray-100"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-40 sm:h-40 bg-primary-custom/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-primary-custom/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 grow">
        <h3 className="mb-6">{dict.contacts.info.title}</h3>

        {/* ======= Indirizzo ======= */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div>
              <h4 className="mb-1">{dict.contacts.info.address.title}</h4>
              <p className="text-black-custom whitespace-pre-line">
                {dict.contacts.info.address.description}
              </p>
            </div>
          </div>

          {/* ======= Email ======= */}
          <div className="flex items-start gap-4">
            <div>
              <h4 className="mb-1">{dict.contacts.info.email.title}</h4>
              <a
                href={`mailto:${dict.contacts.info.email.description}`}
                className="text-blue-600 hover:underline transition-colors"
              >
                {dict.contacts.info.email.description}
              </a>
            </div>
          </div>

          {/* ======= Telefono ======= */}
          <div className="flex items-start gap-4">
            <div>
              <h4 className="mb-1">{dict.contacts.info.phone.title}</h4>
              <a
                href={`tel:${dict.contacts.info.phone.description.replace(
                  /\s/g,
                  ''
                )}`}
                className="text-blue-600 hover:underline transition-colors"
              >
                {dict.contacts.info.phone.description}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ======= Social ======= */}
      <div className="relative z-10 mt-8 pt-8 border-t border-gray-200">
        <h4 className="mb-4">{dict.contacts.info.social.title}</h4>
        <div className="flex gap-4">
          <SocialNetworks />
        </div>
      </div>
    </motion.div>
  );
}
