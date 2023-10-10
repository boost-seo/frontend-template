'use client';

import { motion, useAnimation } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';

const ScrollProgressBar: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const controls = useAnimation();

  const divRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!divRef.current) return;

    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;

    // Adjusting for 5% start and 90% end
    const END_PERCENTAGE = 1;
    const FADE_OUT_PERCENTAGE = 0.92;
    const adjustedScrollStart = 0.05 * totalHeight;
    const adjustedScrollEnd = END_PERCENTAGE * totalHeight;
    // const fadeOutPoint = FADE_OUT_PERCENTAGE * totalHeight;

    // Ensuring we're in the range before setting the scroll progress
    if (currentScroll <= adjustedScrollStart) {
      setScrollY(0);
      controls.set({ opacity: 1 });
    } else if (currentScroll >= adjustedScrollEnd) {
      controls.set({ opacity: 0 }); // Set opacity to 0 to hide
    } else {
      setScrollY(
        (((currentScroll - adjustedScrollStart) /
          (adjustedScrollEnd - adjustedScrollStart)) *
          100) /
          FADE_OUT_PERCENTAGE
      );
      controls.set({ opacity: 1 });
    }
  }, [controls]);

  useEffect(() => {
    controls.start({ scaleX: scrollY / 100 });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY, controls, handleScroll]);

  return (
    <motion.div
      className='fixed left-0 top-0 z-50 h-0.5 w-full overflow-hidden bg-gray-300'
      animate={controls}
      initial={{ scaleX: 0 }}
      transition={{ duration: 0.3 }}
      ref={divRef}
    >
      <div className='bg-primary h-full'></div>
    </motion.div>
  );
};

export default ScrollProgressBar;
