import { useEffect, useState } from 'react';

// Lazy loading hook
export const useLazyLoad = (element: HTMLElement | null, threshold = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [element, threshold]);

  return isVisible;
};

// Image optimization hook
export const useOptimizedImage = (src: string, width: number, quality = 75) => {
  const [optimizedSrc, setOptimizedSrc] = useState<string | null>(null);

  useEffect(() => {
    if (src) {
      setOptimizedSrc(`/api/resize?url=${encodeURIComponent(src)}&width=${width}&quality=${quality}`);
    }
  }, [src, width, quality]);

  return optimizedSrc;
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  useEffect(() => {
    if (typeof performance === 'undefined') return;

    const handlePerformance = (entry: PerformanceEntry) => {
      if (entry.entryType === 'resource') {
        console.log(`Resource loaded: ${entry.name} in ${entry.duration}ms`);
      }
    };

    performance.getEntries().forEach(handlePerformance);
    performance.onresourcetimingbufferfull = () => {
      performance.clearResourceTimings();
    };

    return () => {
      performance.clearResourceTimings();
    };
  }, []);
};

// Code splitting hook
export const useDynamicImport = async (path: string) => {
  const module = await import(`../${path}`);
  return module.default;
};
