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
      document.body.style.paddingBottom = '120px';
    } else {
      document.body.style.paddingBottom = '0';
    }

    // ======= Cleanup =======
    return () => {
      document.body.style.paddingBottom = '0';
    };
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
          className="fixed bottom-0 left-0 right-0 z-100 bg-linear-to-r from-yellow-50 to-orange-50 border-t-2 border-yellow-400 shadow-2xl backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className="text-3xl shrink-0">⚠️</span>
                <div className="min-w-0">
                  <p className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2">
                    {dict.disclaimer.banner.title}
                  </p>
                  <p className="text-gray-700 text-xs sm:text-sm mt-1">
                    {dict.disclaimer.banner.message}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
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
                  className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg text-sm transition shadow-md whitespace-nowrap"
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
