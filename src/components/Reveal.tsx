import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
};

const Reveal: React.FC<Props> = ({ children, delay = 0, y = 24 }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: '-50px', once: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } });
    }
  }, [inView, controls, delay]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={controls}>
      {children}
    </motion.div>
  );
};

export default Reveal;

