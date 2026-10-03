export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/** True when the user has asked the OS to minimise non-essential motion. */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia(REDUCED_MOTION_QUERY).matches;

export default prefersReducedMotion;
