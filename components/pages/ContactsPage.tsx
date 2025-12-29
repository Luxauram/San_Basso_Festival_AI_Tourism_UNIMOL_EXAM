'use client';

import { Toaster } from 'react-hot-toast';
import Maps from '../sections/contacts/Maps';
import Info from '../sections/contacts/Info';
import ContactForm from '../sections/contacts/ContactForm';
import { DictAndLocaleProps } from '@/types';
import { PageHeader } from '../shared/PageHeader';
import { HERO_CONTACT_IMAGE, MAPS_URL } from '@/data';

export default function ContactsPageComponent({
  dict,
  locale,
}: DictAndLocaleProps) {
  return (
    <>
      {/* ======= Toaster  ======= */}
      <Toaster />

      {/* ======= Page Body ======= */}
      <main className="min-h-screen bg-white-custom">
        {/* ======= Hero ======= */}
        <PageHeader
          title={dict.contacts.title}
          subtitle={dict.contacts.subtitle}
          imageUrl={HERO_CONTACT_IMAGE}
        />

        {/* ======= Main Content ======= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-12">
            {/* ======= Form & Info =======  */}
            <div className="grid md:grid-cols-2 gap-12 md:items-start">
              {/* ======= Form ======= */}
              <div className="h-full">
                <ContactForm dict={dict} />
              </div>

              {/* ======= Info ======= */}
              <div className="h-full">
                <Info dict={dict} />
              </div>
            </div>

            {/* ======= Mappa ======= */}
            <Maps
              title={dict.contacts.map.title}
              embedUrl={MAPS_URL}
              pinTitle={dict.contacts.map.port}
              pinHref="https://maps.google.com/?q=Porto+di+Termoli"
            />
          </div>
        </div>
      </main>
    </>
  );
}
