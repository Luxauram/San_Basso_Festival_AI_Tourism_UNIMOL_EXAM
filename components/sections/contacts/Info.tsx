'use client';

import { motion } from 'framer-motion';
import { Dictionary } from '@/types/i18n';
import SocialNetworks from '@/components/ui/shared/icons/social-networks/SocialNetworks';

interface InfoProps {
  dict: Dictionary;
}

export default function Info({ dict }: InfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col"
    >
      <div className="flex-grow">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">
          {dict.contacts.info.title}
        </h3>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">📍</span>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">
                {dict.contacts.info.address.title}
              </h4>
              <p className="text-gray-600 whitespace-pre-line">
                {dict.contacts.info.address.value}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">📧</span>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">
                {dict.contacts.info.email.title}
              </h4>
              <a
                href={`mailto:${dict.contacts.info.email.value}`}
                className="text-blue-600 hover:underline"
              >
                {dict.contacts.info.email.value}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">📱</span>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">
                {dict.contacts.info.phone.title}
              </h4>
              <a
                href={`tel:${dict.contacts.info.phone.value}`}
                className="text-blue-600 hover:underline"
              >
                {dict.contacts.info.phone.value}
              </a>
            </div>
          </div>
        </div>
      </div>

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
