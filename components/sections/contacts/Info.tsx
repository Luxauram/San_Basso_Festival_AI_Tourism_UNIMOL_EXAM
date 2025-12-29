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
      className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col"
    >
      <div className="grow">
        <h3 className="text-2xl font-bold mb-6 text-black-custom">
          {dict.contacts.info.title}
        </h3>

        {/* ======= Indirizzo ======= */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div>
              <h4 className="font-semibold text-lg mb-1">
                {dict.contacts.info.address.title}
              </h4>
              <p className="text-black-custom whitespace-pre-line">
                {dict.contacts.info.address.description}
              </p>
            </div>
          </div>

          {/* ======= Email ======= */}
          <div className="flex items-start gap-4">
            <div>
              <h4 className="font-semibold text-lg mb-1">
                {dict.contacts.info.email.title}
              </h4>
              <a
                href={`mailto:${dict.contacts.info.email.description}`}
                className="text-blue-600 hover:underline"
              >
                {dict.contacts.info.email.description}
              </a>
            </div>
          </div>

          {/* ======= Telefono ======= */}
          <div className="flex items-start gap-4">
            <div>
              <h4 className="font-semibold text-lg mb-1">
                {dict.contacts.info.phone.title}
              </h4>
              <p className="text-blue-600 hover:underline">
                {dict.contacts.info.phone.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ======= Social ======= */}
      <div className="mt-8 pt-8 border-t">
        <h4 className="font-semibold text-lg mb-4">
          {dict.contacts.info.social.title}
        </h4>
        <div className="flex gap-4">
          <SocialNetworks />
        </div>
      </div>
    </motion.div>
  );
}
