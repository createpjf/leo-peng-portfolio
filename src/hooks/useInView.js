import { useEffect, useRef, useState } from 'react';

/**
 * Shared IntersectionObserver pool.
 * Elements with the same threshold + rootMargin share one observer,
 * and callbacks are batched via requestAnimationFrame to avoid
 * multiple setState calls in a single frame during fast scrolling.
 */
const observerPool = new Map();

const getSharedObserver = (threshold, rootMargin) => {
  const key = `${threshold}_${rootMargin}`;
  if (!observerPool.has(key)) {
    const callbacks = new Map();
    let rafId = null;
    const observer = new IntersectionObserver(
      (entries) => {
        // Cancel any pending rAF to coalesce rapid-fire batches
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          rafId = null;
          entries.forEach((entry) => {
            const cb = callbacks.get(entry.target);
            if (cb) cb(entry);
          });
        });
      },
      { threshold, rootMargin },
    );
    observerPool.set(key, { observer, callbacks });
  }
  return observerPool.get(key);
};

/**
 * Lightweight IntersectionObserver hook (shared observer + rAF batching).
 * Returns { ref, inView } — once the element enters the viewport, inView stays true.
 * @param {Object} options
 * @param {number} options.threshold - visibility ratio to trigger (0-1)
 * @param {string} options.rootMargin - margin around root
 * @param {boolean} options.once - if true (default), stops observing after first trigger
 */
const useInView = ({ threshold = 0.15, rootMargin = '0px', once = true } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { observer, callbacks } = getSharedObserver(threshold, rootMargin);

    callbacks.set(el, (entry) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) {
          observer.unobserve(el);
          callbacks.delete(el);
        }
      }
    });

    observer.observe(el);

    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, [threshold, rootMargin, once]);

  return { ref, inView };
};

export default useInView;
