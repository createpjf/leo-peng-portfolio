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

    (async () => {
      const { default: Intercom } = await import('@intercom/messenger-js-sdk');
      if (cancelled) return;
      bootedRef.current = true;
      Intercom({ app_id: appId });
    })();

    return () => {
      cancelled = true;
      if (bootedRef.current && typeof window.Intercom === 'function') {
        window.Intercom('shutdown');
        bootedRef.current = false;
      }
    };
  }, [appId]);
};

export default useIntercom;
