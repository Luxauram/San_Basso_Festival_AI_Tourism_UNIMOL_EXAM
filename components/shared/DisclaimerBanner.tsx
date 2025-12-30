'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DictAndLocaleProps } from '@/types';

export default function DisclaimerBanner({ dict, locale }: DictAndLocaleProps) {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    if (!hasSeenDisclaimer) {
      setIsVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isClient && isVisible) {
      // Responsive padding: più piccolo su mobile, più grande su desktop
      const updatePadding = () => {
        if (window.innerWidth < 640) {
          document.body.style.paddingBottom = '90px';
        } else {
          document.body.style.paddingBottom = '110px';
        }
      };

      updatePadding();
      window.addEventListener('resize', updatePadding);

      return () => {
        window.removeEventListener('resize', updatePadding);
        document.body.style.paddingBottom = '0';
      };
    } else {
      document.body.style.paddingBottom = '0';
    }
  }, [isVisible, isClient]);

  const handleClose = () => {
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setIsVisible(false);
  };

  if (!isClient) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-gradient-to-r from-yellow-50 to-orange-50 border-t-2 border-yellow-400 shadow-2xl backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-3 py-3 sm:px-4 sm:py-4 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-1 min-w-0 w-full sm:w-auto">
                <span className="text-2xl sm:text-3xl shrink-0 mt-0.5 sm:mt-0">
                  ⚠️
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-gray-900 text-sm sm:text-base">
                    {dict.disclaimer.banner.title}
                  </p>
                  <p className="text-gray-700 text-xs sm:text-sm mt-0.5 sm:mt-1">
                    {dict.disclaimer.banner.message}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0 w-full sm:w-auto justify-end">
                <a
                  href={`/${locale}/disclaimer`}
                  className="text-xs sm:text-sm font-medium text-purple-600 hover:text-purple-800 underline whitespace-nowrap"
                >
                  {dict.disclaimer.banner.link}
                </a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClose}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent-custom hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg text-xs sm:text-sm transition shadow-md whitespace-nowrap"
                >
                  {dict.disclaimer.banner.close}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
