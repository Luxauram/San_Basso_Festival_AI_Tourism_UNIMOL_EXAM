'use client';

import { motion } from 'framer-motion';
import CapracottaSponsor from './CapracottaSponsor';
import HogwartsSponsor from './HogwartsSponsor';
import MoliseSponsor from './MoliseSponsor';
import TermoliSponsor from './TermoliSponsor';
import UnimolSponsor from './UnimolSponsor';

interface SponsorsProps {
  className?: string;
}

export default function Sponsors({ className = '' }: SponsorsProps) {
  const sponsors = [
    { name: 'Termoli', icon: <TermoliSponsor /> },
    { name: 'Molise', icon: <MoliseSponsor /> },
    { name: 'Unimol', icon: <UnimolSponsor /> },
    { name: 'Capracotta', icon: <CapracottaSponsor /> },
    { name: 'Hogwarts', icon: <HogwartsSponsor /> },
  ];

  return (
    <div
      className={`flex justify-center items-center gap-8 md:gap-12 flex-wrap ${className}`}
    >
      {sponsors.map((sponsor, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-3xl md:text-4xl transition"
        >
          {sponsor.icon}
        </motion.div>
      ))}
    </div>
  );
}
