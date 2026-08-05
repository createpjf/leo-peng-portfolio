import React, { useState } from 'react';
import T from '../data/theme';
import FadeWords from './FadeWords';
import useInView from '../hooks/useInView';
import useCanHover from '../hooks/useCanHover';
import F from '../data/typography';
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

const WritingRow = ({ title, desc, date, href, source, idx, isLast, locale }) => {
  const [hover, setHover] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.15 });
  const canHover = useCanHover();

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="writing-row"
      onMouseEnter={() => canHover && setHover(true)}
      onMouseLeave={() => canHover && setHover(false)}
      style={{
        padding: '20px 0',
        borderBottom: isLast ? 'none' : `1px solid ${T.border}`,
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${idx * 0.1}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${idx * 0.1}s`,
        opacity: inView ? 1 : 0,
        transform: inView
          ? (hover ? 'translateX(8px)' : 'translateX(0)')
          : 'translateY(20px)',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <span style={{
        fontSize: F.base,
        fontVariantNumeric: 'tabular-nums',
        color: T.textSec,
      }}>
        {fmtDate(date, locale)}
      </span>

      <span style={{
        fontSize: F.lg,
        fontWeight: 500,
        color: hover ? T.accent : T.text,
        transition: 'color 0.2s',
      }}>
        {title}
        {desc && (
          <span style={{
            fontSize: F.sm, fontWeight: 400, color: T.textLt, marginLeft: 10, fontStyle: 'italic',
          }}>
            —&nbsp;&nbsp;{desc}
          </span>
        )}
      </span>

      <span style={{
        fontSize: F.xs,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: T.textLt,
        whiteSpace: 'nowrap',
      }}>
        {source || ''}
        <span style={{
          display: 'inline-block',
          marginLeft: 8,
          transition: 'transform 0.2s',
          transform: hover ? 'translateX(3px)' : 'translateX(0)',
        }}>
          &#8599;
        </span>
      </span>
    </a>
  );
};

const WritingSection = () => {
  const { locale, content } = useLocale();
  const { writings, ui } = content;

  return (
  <section
    id="writing"
    className="section-pad"
    style={{
      padding: '80px 40px',
      borderBottom: `1px solid ${T.border}`,
    }}
  >
    <FadeWords text={ui.sections.writing} className="section-title" />
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
          isLast={i === writings.length - 1}
        />
      ))}
    </div>
  </section>
  );
};

export default WritingSection;
