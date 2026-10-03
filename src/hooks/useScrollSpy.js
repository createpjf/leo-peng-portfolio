import { useCallback, useEffect, useRef } from 'react';

/**
 * Calls `onActive(label)` with the section currently in view, so the header
 * navigation can highlight it while scrolling.
 *
 * The active section is the last one whose top has scrolled past `offset`
 * (a fraction of the viewport height). Computing it from positions on every
 * (rAF-throttled) scroll keeps it correct in both directions, without relying
 * on observer entries that only fire when a section crosses a boundary.
 *
 * The last section (the footer) is usually too short to ever reach that
 * line, so reaching the bottom of the page activates it explicitly.
 *
 * Returns `holdActive()`: call it when a nav click sets the active item
 * directly. Updates pause until that scroll settles, so the highlight doesn't
 * flash through the sections in between — or land on a neighbour when the
 * target can't reach the line on a tall viewport.
 *
 * Updates run from scroll / resize / rAF callbacks (external systems), so it
 * does not synchronously setState inside the effect body.
 *
 * @param {{ id: string, label: string | null }[]} sections - section ids + nav
 *   labels, in page order
 * @param {(label: string | null) => void} onActive - called with the active label
 * @param {number} offset - viewport fraction a section's top must pass
 * @returns {() => void} holdActive
 */
const useScrollSpy = (sections, onActive, offset = 0.5) => {
  const held = useRef(false);
  const idleTimer = useRef(null);

  // Release the hold once no scroll event has arrived for a moment.
  const releaseWhenIdle = useCallback(() => {
    clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => { held.current = false; }, 150);
  }, []);

  const holdActive = useCallback(() => {
    held.current = true;
    releaseWhenIdle();
  }, [releaseWhenIdle]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const elements = sections
      .map(({ id, label }) => {
        const el = document.getElementById(id);
        return el ? { el, label } : null;
      })
      .filter(Boolean);

    if (!elements.length) return;

    const last = elements[elements.length - 1];

    const update = () => {
      const atBottom =
        Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        onActive(last.label);
        return;
      }
      const line = window.innerHeight * offset;
      let current = null;
      for (const item of elements) {
        if (item.el.getBoundingClientRect().top > line) break;
        current = item;
      }
      if (current) onActive(current.label);
    };

    let frame = null;
    const schedule = () => {
      if (held.current) {
        releaseWhenIdle();
        return;
      }
      if (frame === null) {
        frame = requestAnimationFrame(() => {
          frame = null;
          if (!held.current) update(); // a click may have landed since scheduling
        });
      }
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      clearTimeout(idleTimer.current);
      held.current = false;
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [sections, onActive, offset, releaseWhenIdle]);

  return holdActive;
};

export default useScrollSpy;
