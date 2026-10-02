import React from 'react';
import { useLocale } from '../i18n/LocaleContext';

const LanguageSwitch = ({ className = '', tabIndex }) => {
  const { locale, setLocale, content } = useLocale();
  const options = [
    { value: 'zh', label: '中', hint: content.ui.switchToChinese },
    { value: 'en', label: 'EN', hint: content.ui.switchToEnglish },
  ];

  return (
    <div className={`language-switch ${className}`.trim()} role="group" aria-label={content.ui.languageSwitcher}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`language-option${locale === option.value ? ' is-active' : ''}`}
          onClick={() => setLocale(option.value)}
          // Visible text stays the accessible name so voice control ("click EN")
          // works; the full hint becomes the description / hover title.
          lang={option.value}
          title={option.hint}
          aria-pressed={locale === option.value}
          tabIndex={tabIndex}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
