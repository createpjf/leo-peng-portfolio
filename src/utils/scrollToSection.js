import prefersReducedMotion from './prefersReducedMotion';

/** Scroll a section to the top of the viewport (instantly under reduced motion). */
const scrollToSection = (el) => {
  el?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
};

/**
 * Reflect the section in the URL (#work) so it can be shared or bookmarked,
 * keeping ?lang= and without adding a history entry per click.
 */
export const setSectionHash = (id) => {
  const { pathname, search } = window.location;
  window.history.replaceState(window.history.state, '', `${pathname}${search}#${id}`);
};

export default scrollToSection;
