'use client';
import { DictAndLocaleProps, TimelineItem } from '@/types';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function SanBassoTimeline({ dict, locale }: DictAndLocaleProps) {
  const timelineData: TimelineItem[] = [
    {
      year: dict.tradition.timeline.items[0].year,
      title: dict.tradition.timeline.items[0].title,
      description: dict.tradition.timeline.items[0].description,
    },
    {
      year: dict.tradition.timeline.items[1].year,
      title: dict.tradition.timeline.items[1].title,
      description: dict.tradition.timeline.items[1].description,
    },
    {
      year: dict.tradition.timeline.items[2].year,
      title: dict.tradition.timeline.items[2].title,
      description: dict.tradition.timeline.items[2].description,
    },
    {
      year: dict.tradition.timeline.items[3].year,
      title: dict.tradition.timeline.items[3].title,
      description: dict.tradition.timeline.items[3].description,
    },
    {
      year: dict.tradition.timeline.items[4].year,
      title: dict.tradition.timeline.items[4].title,
      description: dict.tradition.timeline.items[4].description,
    },
    {
      year: dict.tradition.timeline.items[5].year,
      title: dict.tradition.timeline.items[5].title,
      description: dict.tradition.timeline.items[5].description,
    },
    {
      year: dict.tradition.timeline.items[6].year,
      title: dict.tradition.timeline.items[6].title,
      description: dict.tradition.timeline.items[6].description,
    },
    {
      year: dict.tradition.timeline.items[7].year,
      title: dict.tradition.timeline.items[7].title,
      description: dict.tradition.timeline.items[7].description,
    },
    {
      year: dict.tradition.timeline.items[8].year,
      title: dict.tradition.timeline.items[8].title,
      description: dict.tradition.timeline.items[8].description,
    },
  ];

  return (
    <div className="bg-white-custom min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black-custom mb-6">
            {dict.tradition.timeline.title}
          </h1>
          <p className="text-lg sm:text-xl text-black-custom/70 max-w-3xl mx-auto">
            {dict.tradition.timeline.subtitle}
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-24 md:space-y-32">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 md:gap-12 items-center`}
            >
              {/* Immagine */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full md:w-1/2"
              >
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-black-custom/5 rounded-3xl blur-2xl" />
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 flex items-center justify-center border-2 border-black-custom/10">
                    <Image
                      src="/logo.png"
                      alt={`Immagine storica evento ${index + 1} - San Basso`}
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Testo */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block bg-black-custom text-white-custom px-6 py-2 rounded-full text-sm font-bold">
                  {item.year}
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-black-custom">
                  {item.title}
                </h2>

                <div className="w-20 h-1 bg-black-custom" />

                <p className="text-lg text-black-custom/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-32 pt-12 border-t-2 border-black-custom/10"
        >
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/logo.png"
              alt="San Basso Patrono di Termoli"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-black-custom/60 text-lg italic">
            {dict.tradition.timeline.footer}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
