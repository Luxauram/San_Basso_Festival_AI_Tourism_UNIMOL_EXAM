import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  PARALLAX_LEFT_CHURCH_TRADITION_IMAGE,
  PARALLAX_CENTER_FIREWORKS_TRADITION_IMAGE,
  PARALLAX_RIGHT_PORT_TRADITION_IMAGE,
} from '@/data';

export default function Section4({ isActive }: { isActive: boolean }) {
  return (
    <section className="h-screen w-full relative overflow-hidden isolate">
      {/* BG Nero */}
      <div className="absolute inset-0 z-0 bg-black" />

      {/* Titolo */}
      <motion.h1
        className="text-white-custom text-center absolute top-[10%] left-1/2 -translate-x-1/2 z-30 m-0 text-4xl md:text-6xl lg:text-7xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        LA NOTTE E I FUOCHI
      </motion.h1>

      {/* Sottotitolo */}
      <motion.p
        className="text-white-custom text-center absolute top-[20%] left-1/2 -translate-x-1/2 z-30 m-0 text-2xl md:text-3xl lg:text-4xl italic"
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        &quot;Termoli abbraccia il suo Santo&quot;
      </motion.p>

      {/* Descrizione */}
      <motion.p
        className="text-white-custom text-center absolute top-[30%] left-1/2 -translate-x-1/2 z-30 m-0 px-8 max-w-4xl text-base md:text-lg lg:text-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      >
        Al rientro la statua riposa al Mercato Ittico. Fedeli in preghiera tutta
        la notte. Il 4 agosto ritorna in Cattedrale. A mezzanotte i fuochi
        illuminano l&apos;Adriatico. La città è di nuovo sua.
      </motion.p>

      {/* Img Sinistra - ENTRA DA SINISTRA */}
      <motion.div
        className="absolute inset-0 z-10 w-full h-full pointer-events-none"
        initial={{ x: '-100%', opacity: 0 }}
        animate={isActive ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
        transition={{
          duration: 1.8,
          delay: 1.4,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        <Image
          src={PARALLAX_LEFT_CHURCH_TRADITION_IMAGE}
          alt="Chiesa e Cattedrale"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Img Centro - ENTRA DALL'ALTO */}
      <motion.div
        className="absolute inset-0 z-20 w-full h-full pointer-events-none"
        initial={{ y: '-100%', opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 }}
        transition={{
          duration: 1.8,
          delay: 1.6,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        <Image
          src={PARALLAX_CENTER_FIREWORKS_TRADITION_IMAGE}
          alt="Fuochi d'artificio"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Img Destra - ENTRA DA DESTRA */}
      <motion.div
        className="absolute inset-0 z-10 w-full h-full pointer-events-none"
        initial={{ x: '100%', opacity: 0 }}
        animate={isActive ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
        transition={{
          duration: 1.8,
          delay: 1.8,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        <Image
          src={PARALLAX_RIGHT_PORT_TRADITION_IMAGE}
          alt="Porto e Mercato Ittico"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
