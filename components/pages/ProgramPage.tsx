'use client';
import { motion } from 'framer-motion';
import { Dictionary } from '@/types/i18n';
import { Locale } from '@/i18n/config';
import { ProgramDay } from '../sections/program/ProgramDay';
import { PageHeader } from '../shared/PageHeader';
import AccommodationsSection from '../sections/program/AccommodationsSection';
import RestaurantsSection from '../sections/program/RestaurantsSection';
import { SmoothScrollIntro } from '../sections/program/SmoothScrollIntro';

interface ProgramPageProps {
  dict: Dictionary;
  locale: Locale;
}

export default function ProgramPageComponent({ dict }: ProgramPageProps) {
  return (
    <main className="bg-zinc-950">
      <PageHeader title={dict.program.title} subtitle={dict.program.title} />

      <SmoothScrollIntro />

      <motion.div
        className="max-w-7xl mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Day 1 */}
        <ProgramDay
          date={dict.program.day1.date}
          events={dict.program.day1.events}
          index={0}
        />

        {/* Day 2 */}
        <ProgramDay
          date={dict.program.day2.date}
          events={dict.program.day2.events}
          index={1}
        />

        {/* Day 3 */}
        <ProgramDay
          date={dict.program.day3.date}
          events={dict.program.day3.events}
          index={2}
        />

        {/* Info Section */}
        <motion.div
          className="mt-32 border-t-2 border-gray-800 pt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-12 uppercase"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {dict.program.info.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { emoji: '📍', data: dict.program.info.where },
              { emoji: '🎫', data: dict.program.info.entrance },
              { emoji: '🚗', data: dict.program.info.parking },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="text-3xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.emoji}
                </motion.div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  {item.data.title}
                </h3>
                <p className="text-gray-400 text-lg whitespace-pre-line">
                  {item.data.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <RestaurantsSection />
      <AccommodationsSection />
    </main>
  );
}
