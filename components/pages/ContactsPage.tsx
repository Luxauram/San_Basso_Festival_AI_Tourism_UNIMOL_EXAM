'use client';

import { Toaster } from 'react-hot-toast';
import Maps from '../sections/contacts/Maps';
import Info from '../sections/contacts/Info';
import ContactForm from '../sections/contacts/ContactForm';
import { DictAndLocaleProps } from '@/types';
import { PageHeader } from '../shared/PageHeader';
import { HERO_CONTACT_IMAGE } from '@/data';

export default function ContactsPageComponent({ dict }: DictAndLocaleProps) {
  return (
    <>
      <Toaster />
      <main className="min-h-screen bg-white-custom">
        {/* Hero Header */}
        <PageHeader
          title={dict.contacts.title}
          subtitle={dict.contacts.subtitle}
          imageUrl={HERO_CONTACT_IMAGE}
        />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
