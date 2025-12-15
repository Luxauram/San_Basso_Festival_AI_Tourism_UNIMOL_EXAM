import { motion, Transition, SVGMotionProps } from 'framer-motion';

interface Props extends Omit<SVGMotionProps<SVGSVGElement>, 'transition'> {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition | null;
  lineProps?: Omit<SVGMotionProps<SVGLineElement>, 'variants'> | null;
  width?: number;
  height?: number;
}

const MenuButton = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = '#000',
  transition = null,
  lineProps = null,
  ...props
}: Props) => {
  const variant = isOpen ? 'opened' : 'closed';
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };

  const resolvedLineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: 'non-scaling-stroke' as const,
    initial: 'closed' as const,
    animate: variant,
    transition: transition ?? undefined,
    ...(lineProps || {}),
  };

  const unitHeight = 4;
  const unitWidth = (unitHeight * width) / height;

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...resolvedLineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...resolvedLineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...resolvedLineProps}
      />
    </motion.svg>
  );
};

export { MenuButton };
