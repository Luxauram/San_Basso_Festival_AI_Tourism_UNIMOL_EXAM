import Image from 'next/image';
import { motion } from 'framer-motion';
import { PARALLAX_BG_TRADITION_IMAGE_2 } from '@/data';

export default function Section5({ isActive }: { isActive: boolean }) {
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
        className="text-white-custom text-center absolute top-[10%] left-1/2 -translate-x-1/2 z-30 m-0 text-4xl md:text-6xl lg:text-7xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        Chi era davvero San Basso?
      </motion.h1>

      {/* Descrizione */}
      <motion.p
        className="text-white-custom text-center absolute top-[30%] left-1/2 -translate-x-1/2 z-30 m-0 px-8 max-w-4xl text-base md:text-lg lg:text-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque itaque
        provident eos at laboriosam. Alias pariatur sequi omnis deserunt cumque
        voluptatem sapiente facilis, ducimus perferendis, numquam quae, veniam
        laborum exercitationem.
      </motion.p>
    </section>
  );
}
