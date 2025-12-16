import { SVGMotionProps, Transition } from 'framer-motion';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export interface MenuButtonProps
  extends Omit<SVGMotionProps<SVGSVGElement>, 'transition'> {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition | null;
  lineProps?: Omit<SVGMotionProps<SVGLineElement>, 'variants'> | null;
  width?: number;
  height?: number;
}

export interface SocialNetworksProps {
  className?: string;
}

export interface SponsorsProps {
  className?: string;
}
