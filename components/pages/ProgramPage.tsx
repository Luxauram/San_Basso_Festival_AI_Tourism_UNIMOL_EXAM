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
import OpeningIntroAdvices from '../sections/program/OpeningIntroAdvices';
import { FluidBackground } from '../sections/program/FluidBackground';

interface ProgramPageProps {
  dict: Dictionary;
  locale: Locale;
}

export default function ProgramPageComponent({
  dict,
  locale,
}: ProgramPageProps) {
  return (
    <>
      <main className="bg-white-custom">
        {/* ======= Header ======= */}
        <PageHeader
          title={dict.program.title}
          subtitle={dict.program.subtitle}
          imageUrl={HERO_PROGRAM_IMAGE}
        />

        {/* ======= Parallax ======= */}
        <SmoothScrollIntro />

        {/* ======= Program Days Section - ISOLATO ======= */}
        <motion.div
          className="w-full bg-black-custom relative"
          style={{
            clipPath: 'inset(0)',
            isolation: 'isolate',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Fluid Background FISSO al centro viewport ma visibile SOLO qui */}
          <FluidBackground />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
            <ProgramDay
              date={dict.program.day1.date}
              events={dict.program.day1.events}
              index={0}
            />

            <ProgramDay
              date={dict.program.day2.date}
              events={dict.program.day2.events}
              index={1}
            />

            <ProgramDay
              date={dict.program.day3.date}
              events={dict.program.day3.events}
              index={2}
            />
          </div>
        </motion.div>
        {/* ======= Intro Text======= */}
        <OpeningIntroAdvices dict={dict} locale={locale} />

        {/* ======= Linea ======= */}
        <div className="my-12 space-y-4 w-full overflow-hidden bg-white-custom">
          <div className="relative w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/5 max-w-2xl h-px mx-auto bg-linear-to-r from-transparent via-black to-transparent opacity-20 " />
        </div>

        {/* ======= Restaurants ======= */}
        <RestaurantsSection dict={dict} />

        {/* ======= Linea ======= */}
        <div className="my-12 space-y-4 w-full overflow-hidden bg-white-custom">
          <div className="relative w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/5 max-w-2xl h-px mx-auto bg-linear-to-r from-transparent via-black to-transparent opacity-20 " />
        </div>

        {/* ======= Accomodations ======= */}
        <AccommodationsSection dict={dict} />
      </main>
    </>
  );
}
