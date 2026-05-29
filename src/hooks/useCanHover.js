import { useEffect, useState } from 'react';

/**
 * Returns true on devices with a fine pointer that can genuinely hover
 * (i.e. not touch screens), so hover-only affordances can be gated.
 * Reacts to changes (e.g. plugging in a mouse) via the media query listener.
 */
const query = '(hover: hover)';

const useCanHover = () => {
  const [canHover, setCanHover] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(query);
    const onChange = (e) => setCanHover(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return canHover;
};

export default useCanHover;
