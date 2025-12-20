'use client';

import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Maps from '../sections/contacts/Maps';
import Info from '../sections/contacts/Info';
import ContactForm from '../sections/contacts/ContactForm';
import { DictAndLocaleProps } from '@/types';

export default function ContactsPageComponent({ dict }: DictAndLocaleProps) {
  return (
    <>
      <Toaster />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              {dict.contacts.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              {dict.contacts.subtitle}
            </motion.p>
          </div>

          <div className="space-y-12">
            {/* Form e Info - Grid su schermi grandi, singola colonna su mobile */}
            <div className="grid md:grid-cols-2 gap-12 md:items-start">
              {/* Form */}
              <div className="h-full">
                <ContactForm dict={dict} />
              </div>

              {/* Info */}
              <div className="h-full">
                <Info dict={dict} />
              </div>
            </div>

            {/* Mappa - Occupa tutta la larghezza */}
            <Maps
              title={dict.contacts.map.title}
              embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.847!2d14.9937!3d42.0051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13389f1e7e6c4c89%3A0x8a4e5f1e7e6c4c89!2sPorto%20di%20Termoli!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit"
              pinTitle="📍 Porto di Termoli"
              pinHref="https://maps.google.com/?q=Porto+di+Termoli"
            />
          </div>
        </div>
      </main>
    </>
  );
}
