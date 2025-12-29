'use client';

import { HeroImage } from '../ui/shared/HeroImage';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  height?: string;
}

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
