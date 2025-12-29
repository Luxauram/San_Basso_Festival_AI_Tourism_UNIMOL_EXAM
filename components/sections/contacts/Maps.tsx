'use client';

import { motion } from 'framer-motion';
import { PinContainer } from '@/components/ui/3d-pin';
import { MapsProps } from '@/types';

export default function Maps({
  title,
  embedUrl,
  height = 'h-[500px]',
  className = '',
  pinTitle = 'Visualizza su Google Maps',
  pinHref,
}: MapsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="relative bg-linear-to-br from-white via-white to-gray-50 rounded-3xl shadow-2xl p-8 sm:p-10 w-full overflow-hidden border border-gray-100"
    >
      {/* ======= Decorative elements ======= */}
      <div className="absolute top-0 left-0 w-24 h-24 sm:w-40 sm:h-40 bg-primary-custom/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-primary-custom/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h3>{title}</h3>
          {pinHref && (
            <a
              href={pinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2 transition-colors"
            >
              <span className="hidden sm:inline">Google Maps</span>
              <span className="sm:hidden">Google Maps</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>

        {/* ======= PinContainer + iframe ======= */}
        <div className="hidden md:block h-125 w-full">
          <div className="flex items-center justify-center h-full w-full">
            <PinContainer
              title={pinTitle}
              href={pinHref}
              containerClassName="w-full h-full max-w-full"
            >
              <div className="w-250 max-w-full h-112.5 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-full pointer-events-none">
                  <iframe
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={title}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        </div>

        {/* ======= Mobile: no effetto 3D ======= */}
        <div className="md:hidden w-full">
          <div
            className={`w-full ${height} bg-gray-200 rounded-2xl overflow-hidden shadow-lg ${className}`}
          >
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={title}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
