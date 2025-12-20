'use client';

import { motion } from 'framer-motion';
import { PinContainer } from '@/components/ui/3d-pin';

interface MapsProps {
  title: string;
  embedUrl: string;
  height?: string;
  className?: string;
  pinTitle?: string;
  pinHref?: string;
}

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
      className="bg-white rounded-2xl shadow-xl p-8 w-full"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        {pinHref && (
          <a
            href={pinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2 transition"
          >
            <span className="hidden sm:inline">Apri in Google Maps</span>
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

      {/* PinContainer con iframe - Desktop only, Mobile usa iframe normale */}
      <div className="hidden md:block h-[500px] w-full">
        <div className="flex items-center justify-center h-full w-full">
          <PinContainer
            title={pinTitle}
            href={pinHref}
            containerClassName="w-full h-full max-w-full"
          >
            <div className="w-[1000px] max-w-full h-[450px] bg-gray-200 rounded-lg overflow-hidden">
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

      {/* Mobile: iframe normale senza effetto 3D */}
      <div className="md:hidden w-full">
        <div
          className={`w-full ${height} bg-gray-200 rounded-xl overflow-hidden ${className}`}
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
            className="rounded-xl"
          />
        </div>
      </div>
    </motion.div>
  );
}
