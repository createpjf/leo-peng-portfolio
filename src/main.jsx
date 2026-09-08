import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './editorial.css';
import { LocaleProvider, getInitialLocale } from './i18n/LocaleContext';

const root = document.getElementById('root');
const locale = getInitialLocale();
const app = (
  <React.StrictMode>
    <LocaleProvider initialLocale={locale}>
      <App />
    </LocaleProvider>
  </React.StrictMode>
);
if (root.dataset.locale === locale) ReactDOM.hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);
