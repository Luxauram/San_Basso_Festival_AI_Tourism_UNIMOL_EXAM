import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Section4({ isActive }: { isActive: boolean }) {
  return (
    <section className="h-screen w-full relative overflow-hidden isolate">
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          fontWeight: 'bold',
        }}
      >
        Sezione 4
      </div>
    </section>
  );
}
