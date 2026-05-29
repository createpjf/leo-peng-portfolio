import { useEffect } from 'react';

/**
 * Calls `onActive(label)` whenever a different section scrolls into view, so
 * the header navigation can highlight the active section while scrolling.
 *
 * Driven by an IntersectionObserver callback (an external system), so it does
 * not synchronously setState inside the effect body.
 *
 * @param {{ id: string, label: string }[]} sections - section ids + nav labels
 * @param {(label: string) => void} onActive - called with the active label
 * @param {string} rootMargin - shrinks the viewport so a section counts as
 *   "active" once it reaches the upper portion of the screen
 */
const useScrollSpy = (sections, onActive, rootMargin = '-45% 0px -50% 0px') => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const elements = sections
      .map(({ id, label }) => {
        const el = document.getElementById(id);
        return el ? { el, label } : null;
      })
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = elements.find((e) => e.el === entry.target);
            if (match) onActive(match.label);
          }
        });
      },
      { rootMargin, threshold: 0 },
    );

    elements.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections, onActive, rootMargin]);
};

export default useScrollSpy;
