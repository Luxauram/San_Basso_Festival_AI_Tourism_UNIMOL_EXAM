import { ContainerProps } from '@/types';

export default function Container({
  children,
  className = '',
  as: Component = 'main',
}: ContainerProps) {
  return (
    <Component
      className={`container mx-auto lg:px-0 md:px-6 flex flex-col items-center justify-center ${className}`}
    >
      {children}
    </Component>
  );
}
