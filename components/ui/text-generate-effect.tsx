'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'motion/react';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({
  words,
  className,
  filter = false,
  duration = 0.2,
  staggerDelay = 0.03,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  staggerDelay?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(' ');

  useEffect(() => {
    if (scope.current) {
      animate(
        'span',
        {
          opacity: 1,
          filter: filter ? 'blur(0px)' : 'none',
        },
        {
          duration: duration,
          delay: stagger(staggerDelay),
          ease: 'easeOut',
        }
      );
    }
  }, [scope, animate, duration, staggerDelay, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? 'blur(10px)' : 'none',
              }}
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
