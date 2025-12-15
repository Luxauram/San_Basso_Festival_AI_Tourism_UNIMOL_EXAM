import { useEffect, useState } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

type RefElement = HTMLElement | null;

/**
 * Hook per ottenere le dimensioni di un elemento DOM
 * @param ref - Ref all'elemento HTML
 * @returns Dimensioni (width, height) dell'elemento
 */
export const useDimensions = (ref: React.RefObject<RefElement>): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, [ref]);

  return dimensions;
};
