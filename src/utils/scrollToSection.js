import prefersReducedMotion from './prefersReducedMotion';

/** Scroll a section to the top of the viewport (instantly under reduced motion). */
const scrollToSection = (el) => {
  el?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
};

export default scrollToSection;
