'use client';
import { motion } from 'framer-motion';
import { Dictionary } from '@/types/i18n';
import { Locale } from '@/i18n/config';
import { ProgramDay } from '../sections/program/ProgramDay';
import { PageHeader } from '../shared/PageHeader';
import AccommodationsSection from '../sections/program/AccommodationsSection';
import RestaurantsSection from '../sections/program/RestaurantsSection';
import { SmoothScrollIntro } from '../sections/program/SmoothScrollIntro';
import { HERO_PROGRAM_IMAGE } from '@/data';

interface ProgramPageProps {
  dict: Dictionary;
  locale: Locale;
}

export default function ProgramPageComponent({ dict }: ProgramPageProps) {
  return (
    <>
      <main className="bg-black-custom">
        <PageHeader
          title={dict.program.title}
          subtitle={dict.program.subtitle}
          imageUrl={HERO_PROGRAM_IMAGE}
        />

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
        </motion.div>

        {/* <RestaurantsSection />
        <AccommodationsSection /> */}
      </main>
    </>
  );
}
