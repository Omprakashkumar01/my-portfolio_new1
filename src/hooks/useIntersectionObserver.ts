import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Fade in when section becomes visible (intersection ratio > 0.1)
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setIsIntersecting(true);
        }
        // No fade out - once visible, always visible
      },
      {
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
        rootMargin: '-50px 0px -50px 0px',
        ...options,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options]);

  return { targetRef, isIntersecting };
};