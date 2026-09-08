import { useEffect, useRef, useState } from 'react';

const useIntercom = (appId, enabled, locale) => {
  const bootedRef = useRef(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (!enabled || !appId) return undefined;

    let cancelled = false;

    (async () => {
      const { default: Intercom } = await import('@intercom/messenger-js-sdk');
      if (cancelled) return;
      bootedRef.current = true;
      Intercom({ app_id: appId, language_override: locale === 'zh' ? 'zh-CN' : 'en', hide_default_launcher: true });
      window.Intercom('show');
    })().catch(() => { if (!cancelled) setFailed(true); });

    return () => {
      cancelled = true;
      if (bootedRef.current && typeof window.Intercom === 'function') {
        window.Intercom('shutdown');
        bootedRef.current = false;
      }
    };
  }, [appId, enabled, locale]);
  return failed;
};

export default useIntercom;
