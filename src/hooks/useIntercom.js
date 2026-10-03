import { useEffect, useRef } from 'react';

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

    let cancelled = false;
    let idleId = null;
    let timerId = null;

    const boot = async () => {
      const { default: Intercom } = await import('@intercom/messenger-js-sdk');
      if (cancelled) return;
      bootedRef.current = true;
      Intercom({ app_id: appId });
    };

    // The messenger pulls in a large third-party bundle; load it once the
    // page has finished loading and the main thread is idle, so it doesn't
    // compete with the hero video and first images.
    const schedule = () => {
      if ('requestIdleCallback' in window) idleId = window.requestIdleCallback(boot, { timeout: 4000 });
      else timerId = window.setTimeout(boot, 2000);
    };
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener('load', schedule);
      if (idleId !== null) window.cancelIdleCallback(idleId);
      if (timerId !== null) window.clearTimeout(timerId);
      if (bootedRef.current && typeof window.Intercom === 'function') {
        window.Intercom('shutdown');
        bootedRef.current = false;
      }
    };
  }, [appId]);
};

export default useIntercom;
