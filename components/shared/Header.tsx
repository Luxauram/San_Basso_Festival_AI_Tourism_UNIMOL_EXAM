'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { Locale } from '@/i18n/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Dictionary } from '@/types/i18n';
import LanguageSwitcher from '../ui/shared/LanguageSwitcher';
import ManifestoTicket from './ManifestoTicket';

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Header({ locale, dict }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const routes = {
    home: `/${locale}`,
    tradition: `/${locale}/tradizione`,
    program: `/${locale}/programma`,
    contacts: `/${locale}/contatti`,
  };

  const isActive = (path: string) => pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-sm"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Sinistra */}
          <Link
            href={routes.home}
            className="flex shrink-0 hover:opacity-80 transition"
          >
            <Image
              src="/logo.png"
              alt="San Basso Festival"
              width={100}
              height={100}
              className="w-12 h-12 object-contain"
            />
          </Link>

          {/* Desktop Menu - Centro */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href={routes.home}
              className={`hover:text-purple-600 transition font-medium ${
                isActive(routes.home) ? 'text-purple-600' : ''
              }`}
            >
              {dict.nav.home}
            </Link>
            <Link
              href={routes.tradition}
              className={`hover:text-purple-600 transition font-medium ${
                isActive(routes.tradition) ? 'text-purple-600' : ''
              }`}
            >
              {dict.nav.tradition}
            </Link>
            <Link
              href={routes.program}
              className={`hover:text-purple-600 transition font-medium ${
                isActive(routes.program) ? 'text-purple-600' : ''
              }`}
            >
              {dict.nav.program}
            </Link>
            <Link
              href={routes.contacts}
              className={`hover:text-purple-600 transition font-medium ${
                isActive(routes.contacts) ? 'text-purple-600' : ''
              }`}
            >
              {dict.nav.contacts}
            </Link>
          </div>

          {/* Desktop - Ticket + Language Switcher - Destra */}
          <div className="hidden lg:flex items-center gap-4">
            <ManifestoTicket locale={locale} />
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Mobile/Tablet - Ticket + Hamburger */}
          <div className="flex lg:hidden items-center gap-4">
            <ManifestoTicket locale={locale} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-gray-900 transition-transform ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-gray-900 transition-opacity ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-gray-900 transition-transform ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t"
            >
              <div className="py-4 space-y-3">
                <Link
                  href={routes.home}
                  className={`block py-2 hover:text-purple-600 font-medium ${
                    isActive(routes.home) ? 'text-purple-600' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {dict.nav.home}
                </Link>
                <Link
                  href={routes.tradition}
                  className={`block py-2 hover:text-purple-600 font-medium ${
                    isActive(routes.tradition) ? 'text-purple-600' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {dict.nav.tradition}
                </Link>
                <Link
                  href={routes.program}
                  className={`block py-2 hover:text-purple-600 font-medium ${
                    isActive(routes.program) ? 'text-purple-600' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {dict.nav.program}
                </Link>
                <Link
                  href={routes.contacts}
                  className={`block py-2 hover:text-purple-600 font-medium ${
                    isActive(routes.contacts) ? 'text-purple-600' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {dict.nav.contacts}
                </Link>

                {/* Language Switcher */}
                <div className="pt-3 border-t">
                  <LanguageSwitcher currentLocale={locale} />
                </div>

                {/* Social Links */}
                <div className="pt-3 border-t">
                  <p className="text-sm font-semibold mb-3 text-gray-600">
                    Social
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition"
                    >
                      f
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:from-purple-700 hover:to-pink-700 transition"
                    >
                      📷
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition"
                    >
                      𝕏
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
