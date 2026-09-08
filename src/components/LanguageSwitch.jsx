import React from 'react';
import { useLocale } from '../i18n/LocaleContext';

const LanguageSwitch = ({ className = '', tabIndex }) => {
  const { locale, setLocale, content } = useLocale();
  const options = [
    { value: 'zh', label: '中', ariaLabel: content.ui.switchToChinese },
    { value: 'en', label: 'EN', ariaLabel: content.ui.switchToEnglish },
  ];

  return (
    <div className={`language-switch ${className}`.trim()} role="group" aria-label={content.ui.languageSwitcher}>
      {options.map((option) => (
        <a
          key={option.value}
          href={`/${option.value}/`}
          className={`language-option${locale === option.value ? ' is-active' : ''}`}
          onClick={(event) => { event.preventDefault(); setLocale(option.value); }}
          aria-label={option.ariaLabel}
          aria-current={locale === option.value ? 'page' : undefined}
          tabIndex={tabIndex}
        >
          {option.label}
        </a>
      ))}
    </div>
  );
};

export default LanguageSwitch;
