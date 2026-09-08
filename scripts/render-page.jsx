import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App.jsx';
import { LocaleProvider } from '../src/i18n/LocaleContext.jsx';

export const renderPage = (locale) => renderToString(
  <LocaleProvider initialLocale={locale}><App /></LocaleProvider>,
);
