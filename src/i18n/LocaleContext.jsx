import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getSiteContent } from '../data/siteContent';

const LOCALE_KEY = 'leo-portfolio-locale';
const LocaleContext = createContext(null);

const normalizeLocale = (value) => (value?.toLowerCase().startsWith('zh') ? 'zh' : 'en');

export const getInitialLocale = () => {
  if (typeof window === 'undefined') return 'en';

  const urlLocale = new URL(window.location.href).searchParams.get('lang');
  if (urlLocale === 'zh' || urlLocale === 'en') return urlLocale;
  const pathLocale = window.location.pathname.split('/')[1];
  if (pathLocale === 'zh' || pathLocale === 'en') return pathLocale;

  let savedLocale;
  try { savedLocale = window.localStorage.getItem(LOCALE_KEY); } catch { /* Storage is optional. */ }
  if (savedLocale === 'zh' || savedLocale === 'en') return savedLocale;

  return normalizeLocale(window.navigator.language);
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

export const LocaleProvider = ({ children, initialLocale }) => {
  const [locale, setLocaleState] = useState(() => initialLocale || getInitialLocale());
  const content = useMemo(() => getSiteContent(locale), [locale]);

  const setLocale = useCallback((nextLocale) => {
    const normalized = normalizeLocale(nextLocale);
    setLocaleState(normalized);
    try { window.localStorage.setItem(LOCALE_KEY, normalized); } catch { /* Keep switching without storage. */ }

    const url = new URL(window.location.href);
    url.pathname = `/${normalized}/`;
    url.searchParams.delete('lang');
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    document.title = content.meta.title;
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://createpjf.com/${locale}/`);
    updateMeta('meta[property="og:url"]', `https://createpjf.com/${locale}/`);
    updateMeta('meta[name="description"]', content.meta.description);
    updateMeta('meta[property="og:title"]', content.meta.title);
    updateMeta('meta[property="og:description"]', content.meta.socialDescription);
    updateMeta('meta[property="og:locale"]', content.meta.ogLocale);
    updateMeta('meta[property="og:locale:alternate"]', locale === 'zh' ? 'en_US' : 'zh_CN');
    updateMeta('meta[name="twitter:title"]', content.meta.title);
    updateMeta('meta[name="twitter:description"]', content.meta.socialDescription);
    updateStructuredData(content.meta);
  }, [content, locale]);

  useEffect(() => {
    const handlePopState = () => {
      setLocaleState(getInitialLocale());
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
