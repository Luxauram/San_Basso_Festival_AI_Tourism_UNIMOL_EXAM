'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Locale } from '@/i18n/config';
import { Dictionary } from '@/types/i18n';
import { reviews } from '@/lib/mock-reviews';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ReviewSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function ReviewSection({ dict, locale }: ReviewSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: 'start',
      containScroll: 'trimSnaps',
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        <path
          fill={index < rating ? '#d0d0d0' : '#404040'}
          d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
        />
      </svg>
    ));
  };

  return (
    <section
      ref={ref}
      className="snap-section flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden"
    >
      <div className="w-full px-4 sm:px-8 py-16">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {dict.reviews.title}
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-gray-200 mb-12 text-center max-w-3xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {dict.reviews.subtitle}
        </motion.p>

        <div className="overflow-hidden px-4" ref={emblaRef}>
          <div className="flex gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-[#0a0a0a] border border-[#222222] rounded-lg w-[280px] sm:w-[300px] flex-shrink-0 relative mt-10 flex flex-col"
              >
                {/* Avatar con bordo curved sopra */}
                <div
                  className="before:content-[''] before:absolute before:inset 
                          before:border-t-1 before:border-l-1 before:border-r-1 
                          before:border-[#222222] before:rounded-t-full 
                          before:w-full before:h-1/2 before:top-0
                          bg-[#0a0a0a] relative rounded-full -top-10 left-2 w-20 h-20 -mb-6
                          flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={review.image}
                    alt={review.name}
                    className="rounded-full h-16 w-16 object-cover"
                  />
                </div>

                {/* Stelle rating */}
                <div className="absolute top-3 right-3 flex gap-0.5">
                  {renderStars(review.rating)}
                </div>

                {/* Testo recensione - flex-grow per occupare lo spazio disponibile */}
                <div className="text-base text-white font-light px-4 py-4 flex-grow">
                  {review.text}
                </div>

                {/* Footer con nome - sempre in fondo */}
                <div className="w-full px-4 pb-4 text-sm border-t border-[#222222] pt-3 mt-auto">
                  <div className="text-zinc-400 font-medium">{review.name}</div>
                </div>
              </div>
            ))}
            <div className="w-2 shrink-0" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-gray-300 text-sm">{dict.reviews.disclaimer}</p>
        </motion.div>
      </div>
    </section>
  );
}
