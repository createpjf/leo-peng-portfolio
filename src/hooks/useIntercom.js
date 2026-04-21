import { useEffect, useRef } from 'react';

const ACTIVATOR_EVENTS = ['scroll', 'pointermove', 'touchstart', 'keydown'];
const IDLE_FALLBACK_MS = 6000;

const useIntercom = (appId) => {
  const bootedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (!appId) {
      if (import.meta.env.DEV) {
        console.warn('[useIntercom] VITE_INTERCOM_APP_ID is not set; Intercom disabled.');
      }
      return undefined;
    }

    let timeoutId = null;

    const boot = async () => {
      if (bootedRef.current) return;
      bootedRef.current = true;
      cleanup();
      const { default: Intercom } = await import('@intercom/messenger-js-sdk');
      Intercom({ app_id: appId });
    };

    const cleanup = () => {
      ACTIVATOR_EVENTS.forEach((evt) => window.removeEventListener(evt, boot));
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };

    ACTIVATOR_EVENTS.forEach((evt) =>
      window.addEventListener(evt, boot, { once: true, passive: true }),
    );
    timeoutId = setTimeout(boot, IDLE_FALLBACK_MS);

    return () => {
      cleanup();
      if (bootedRef.current && typeof window.Intercom === 'function') {
        window.Intercom('shutdown');
        bootedRef.current = false;
      }
    };
  }, [appId]);
};

export default useIntercom;
