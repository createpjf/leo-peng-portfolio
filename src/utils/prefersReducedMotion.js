/** True when the user has asked the OS to minimise non-essential motion. */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default prefersReducedMotion;
