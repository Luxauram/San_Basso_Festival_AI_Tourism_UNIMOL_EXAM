'use client';

import { PageHeaderProps } from '@/types/components';
import { HeroImage } from '../ui/shared/HeroImage';

export function PageHeader({
  title,
  subtitle,
  imageUrl,
  height = 'h-[30vh]',
}: PageHeaderProps) {
  return (
    <HeroImage
      imageUrl={imageUrl}
      title={title}
      subtitle={subtitle}
      height={height}
    />
  );
}
