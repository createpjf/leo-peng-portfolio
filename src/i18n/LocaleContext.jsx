import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getSiteContent } from '../data/siteContent';

const LOCALE_KEY = 'leo-portfolio-locale';
const LocaleContext = createContext(null);

const normalizeLocale = (value) => (value?.toLowerCase().startsWith('zh') ? 'zh' : 'en');

const getInitialLocale = () => {
  if (typeof window === 'undefined') return 'en';

  const urlLocale = new URL(window.location.href).searchParams.get('lang');
  if (urlLocale === 'zh' || urlLocale === 'en') return urlLocale;

  const savedLocale = window.localStorage.getItem(LOCALE_KEY);
  if (savedLocale === 'zh' || savedLocale === 'en') return savedLocale;

  // Default to English for a stable first paint; users can switch and we remember it.
  return 'en';
};

const updateMeta = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute('content', value);
};

const updateStructuredData = (meta) => {
  const element = document.querySelector('script[type="application/ld+json"]');
  if (!element) return;

  try {
    const data = JSON.parse(element.textContent);
    data.jobTitle = meta.jobTitle;
    data.knowsAbout = meta.knowsAbout;
    data.workLocation = { ...data.workLocation, name: meta.workLocation };
    element.textContent = JSON.stringify(data, null, 2);
  } catch {
    // Keep the server-rendered fallback when structured data cannot be parsed.
  }
};

export const LocaleProvider = ({ children }) => {
  const [locale, setLocaleState] = useState(getInitialLocale);
  const content = useMemo(() => getSiteContent(locale), [locale]);

  const setLocale = useCallback((nextLocale) => {
    const normalized = normalizeLocale(nextLocale);
    setLocaleState(normalized);
    window.localStorage.setItem(LOCALE_KEY, normalized);

    const url = new URL(window.location.href);
    url.searchParams.set('lang', normalized);
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    document.title = content.meta.title;
    updateMeta('meta[name="description"]', content.meta.description);
    updateMeta('meta[property="og:title"]', content.meta.title);
    updateMeta('meta[property="og:description"]', content.meta.socialDescription);
    updateMeta('meta[property="og:locale"]', content.meta.ogLocale);
    updateMeta('meta[name="twitter:title"]', content.meta.title);
    updateMeta('meta[name="twitter:description"]', content.meta.socialDescription);
    updateStructuredData(content.meta);
  }, [content, locale]);

  useEffect(() => {
    const handlePopState = () => {
      const urlLocale = new URL(window.location.href).searchParams.get('lang');
      if (urlLocale === 'zh' || urlLocale === 'en') setLocaleState(urlLocale);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const value = useMemo(() => ({ locale, setLocale, content }), [locale, setLocale, content]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const value = useContext(LocaleContext);
  if (!value) throw new Error('useLocale must be used inside LocaleProvider');
  return value;
};
