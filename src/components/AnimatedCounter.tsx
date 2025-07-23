'use client';
import { useEffect, useRef, useState } from 'react';
import { useOnScreen } from '@/hooks/use-on-screen';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
}

export function AnimatedCounter({ from = 0, to, duration = 1.5 }: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      const current = from + (to - from) * percentage;

      setCount(Math.floor(current));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}
