import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  PARALLAX_BG_TRADITION_IMAGE_2,
  PARALLAX_STATUE_TRADITION_IMAGE,
} from '@/data';

export default function Section2({ isActive }: { isActive: boolean }) {
  return (
    <section className="h-screen w-full relative overflow-hidden isolate">
      {/* BG Porto */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <Image
          src={PARALLAX_BG_TRADITION_IMAGE_2}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Titolo */}
      <motion.h1
        className="text-white-custom text-center absolute top-[10%] left-1/2 -translate-x-1/2 z-10 m-0 text-4xl md:text-6xl lg:text-7xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        L&apos;ALBA DEL 3 AGOSTO
      </motion.h1>

      {/* Sottotitolo */}
      <motion.p
        className="text-white-custom text-center absolute top-[20%] left-1/2 -translate-x-1/2 z-10 m-0 text-2xl md:text-3xl lg:text-4xl italic"
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        &quot;Dalla Cattedrale al mare&quot;
      </motion.p>

      {/* Descrizione */}
      <motion.p
        className="text-white-custom text-center absolute top-[30%] left-1/2 -translate-x-1/2 z-10 m-0 px-8 max-w-4xl text-base md:text-lg lg:text-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      >
        La statua di San Basso lascia il Duomo. Paramenti rossi. Processione
        fino al porto. Il peschereccio addobbato a festa la attende. Decine di
        barche si preparano a seguirla.
      </motion.p>

      {/* Statua */}
      <motion.div
        className="absolute bottom-[calc(-10vh)] left-1/2 -translate-x-1/2 z-10 w-[calc(70vmin)] h-[calc(70vmin)] pointer-events-none"
        initial={{ y: 300, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
        transition={{
          duration: 1.8,
          delay: 1.2,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        <Image
          src={PARALLAX_STATUE_TRADITION_IMAGE}
          alt="Statua San Basso"
          fill
          priority
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}
