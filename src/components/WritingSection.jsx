import React, { useState } from 'react';
import T from '../data/theme';
import { writings } from '../data/siteContent';

/* ─── 日期格式化: "2026-02-16" → "Feb 2026", "2025-03" → "Mar 2025" ─── */
const fmtDate = (d) => {
  const parts = d.split('-');
  const year = parts[0];
  const month = parts[1]
    ? new Date(parts[0], parts[1] - 1).toLocaleString('en', { month: 'short' })
    : '';
  return month ? `${month} ${year}` : year;
};

const WritingRow = ({ title, date, href, source, delay, isLast }) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="writing-row"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '20px 0',
        paddingLeft: hover ? 8 : 0,
        borderBottom: isLast ? 'none' : `1px solid ${T.border}`,
        transition: 'padding-left 0.3s ease',
        animation: `fadeUp 0.7s ease ${delay} forwards`,
        opacity: 0,
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <span style={{
        fontSize: 13,
        fontVariantNumeric: 'tabular-nums',
        color: T.textSec,
      }}>
        {fmtDate(date)}
      </span>

      <span style={{
        fontSize: 15,
        fontWeight: 500,
        color: hover ? T.accent : T.text,
        transition: 'color 0.2s',
      }}>
        {title}
      </span>

      <span style={{
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
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

const WritingSection = () => (
  <section
    id="writing"
    className="section-pad"
    style={{
      padding: '80px 40px',
      borderBottom: `1px solid ${T.border}`,
    }}
  >
    <h2 style={{
      fontSize: 20,
      fontWeight: 500,
      marginBottom: 40,
      letterSpacing: '-0.01em',
    }}>
      Writing
    </h2>
    <div>
      {writings.map((w, i) => (
        <WritingRow
          key={w.href}
          title={w.title}
          date={w.date}
          href={w.href}
          source={w.source}
          delay={`${i * 0.08}s`}
          isLast={i === writings.length - 1}
        />
      ))}
    </div>
  </section>
);

export default WritingSection;
