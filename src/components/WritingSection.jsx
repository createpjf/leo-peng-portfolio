import React from 'react';
import FadeWords from './FadeWords';
import useInView from '../hooks/useInView';
import { useLocale } from '../i18n/LocaleContext';

const fmtDate = (d, locale) => {
  const parts = d.split('-');
  const year = parts[0];
  if (!parts[1]) return year;

  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(Number(year), Number(parts[1]) - 1, 1)));
};

const WritingRow = ({ title, desc, date, href, source, idx, locale, newTabLabel }) => {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`writing-row reveal${inView ? ' is-visible' : ''}`}
      style={{ '--reveal-delay': `${idx * 0.1}s` }}
    >
      <span className="writing-date">{fmtDate(date, locale)}</span>

      <span className="writing-title">
        {title}
        {desc && <span className="writing-desc">—&nbsp;&nbsp;{desc}</span>}
      </span>

      <span className="writing-source">
        {source || ''}
        <span aria-hidden="true" className="writing-arrow">&#8599;</span>
      </span>
      <span className="sr-only">{newTabLabel}</span>
    </a>
  );
};

const WritingSection = () => {
  const { locale, content } = useLocale();
  const { writings, ui } = content;

  return (
  <section id="writing" className="section-pad section-divider">
    <FadeWords key={ui.sections.writing} text={ui.sections.writing} className="section-title" />
    <div>
      {writings.map((w, i) => (
        <WritingRow
          key={w.href}
          title={w.title}
          desc={w.desc}
          date={w.date}
          href={w.href}
          source={w.source}
          idx={i}
          locale={locale}
          newTabLabel={ui.opensInNewTab}
        />
      ))}
    </div>
  </section>
  );
};

export default WritingSection;
