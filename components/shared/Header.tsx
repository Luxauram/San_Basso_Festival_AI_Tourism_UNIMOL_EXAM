'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
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

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const menuContainerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

export default function Header({ locale, dict }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef(null);

  const routes = {
    home: `/${locale}`,
    tradition: `/${locale}/tradizione`,
    program: `/${locale}/programma`,
    contacts: `/${locale}/contatti`,
  };

  const navItems = [
    { href: routes.home, label: dict.nav.home },
    { href: routes.tradition, label: dict.nav.tradition },
    { href: routes.program, label: dict.nav.program },
    { href: routes.contacts, label: dict.nav.contacts },
  ];

  const isActive = (path: string) => pathname === path;

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-sm h-20"
    >
      <nav
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between relative"
      >
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

        {/* Banner Disclaimer - Centro */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-8">
          <ManifestoTicket locale={locale} />
        </div>

        {/* Menu - Overlay con ClipPath */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          className="absolute top-0 right-0 w-72 h-screen bg-gradient-to-b from-purple-50 to-white shadow-xl"
          variants={sidebarVariants}
          style={{
            overflow: isOpen ? 'visible' : 'hidden',
          }}
        >
          {/* Menu Items */}
          <motion.ul
            className="pt-32 px-6 space-y-2"
            variants={menuContainerVariants}
          >
            {navItems.map((item) => (
              <motion.li key={item.href} variants={menuItemVariants}>
                <Link
                  href={item.href}
                  className={`block py-3 px-4 rounded-lg transition font-semibold ${
                    isActive(item.href)
                      ? 'text-white bg-purple-600'
                      : 'text-gray-800 hover:bg-purple-100 hover:text-purple-600'
                  }`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Language Switcher in Menu */}
          <div className="absolute bottom-20 left-6 right-6 border-t pt-6">
            <p className="text-xs font-semibold text-gray-500 mb-3 uppercase">
              Lingua
            </p>
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Social Links in Menu */}
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-xs font-semibold text-gray-500 mb-3 uppercase">
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
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:from-purple-700 hover:to-pink-700 transition"
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
        </motion.div>

        {/* Hamburger Button - Destra */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition text-gray-900"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 23 23">
            <Path
              variants={{
                closed: { d: 'M 2 2.5 L 20 2.5' },
                open: { d: 'M 3 16.5 L 17 2.5' },
              }}
              animate={isOpen ? 'open' : 'closed'}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              animate={isOpen ? 'open' : 'closed'}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: 'M 2 16.346 L 20 16.346' },
                open: { d: 'M 3 2.5 L 17 16.346' },
              }}
              animate={isOpen ? 'open' : 'closed'}
            />
          </svg>
        </button>
      </nav>
    </motion.header>
  );
}
