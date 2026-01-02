'use client';

import { PageHeaderProps } from '@/types/components';
import { HeroImage } from '../ui/shared/HeroImage';

export function PageHeader({ title, subtitle, imageUrl }: PageHeaderProps) {
  return <HeroImage imageUrl={imageUrl} title={title} subtitle={subtitle} />;
}
