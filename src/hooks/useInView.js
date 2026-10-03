import { useEffect, useRef, useState } from 'react';

/**
 * Shared IntersectionObserver pool.
 * Elements with the same threshold + rootMargin share one observer.
 * Callbacks run straight from the observer callback: React 18 batches the
 * resulting setState calls, and IntersectionObserver only reports threshold
 * crossings, so deferring (and possibly dropping) a batch could leave an
 * element hidden for good.
 */
const observerPool = new Map();

const getSharedObserver = (threshold, rootMargin) => {
  const key = `${threshold}_${rootMargin}`;
  if (!observerPool.has(key)) {
    const callbacks = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = callbacks.get(entry.target);
          if (cb) cb(entry);
        });
      },
      { threshold, rootMargin },
    );
    observerPool.set(key, { observer, callbacks });
  }
  return observerPool.get(key);
};

/**
 * Lightweight IntersectionObserver hook (shared observer).
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
