import React, { useState } from 'react';
import T from '../data/theme';
import { writings } from '../data/siteContent';
import FadeWords from './FadeWords';
import useInView from '../hooks/useInView';

/* ─── 日期格式化: "2026-02-16" → "Feb 2026", "2025-03" → "Mar 2025" ─── */
const fmtDate = (d) => {
  const parts = d.split('-');
  const year = parts[0];
  const month = parts[1]
    ? new Date(parts[0], parts[1] - 1).toLocaleString('en', { month: 'short' })
    : '';
  return month ? `${month} ${year}` : year;
};

const WritingRow = ({ title, desc, date, href, source, idx, isLast }) => {
  const [hover, setHover] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <a
      ref={ref}
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
        transition: `padding-left 0.3s ease, opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${idx * 0.1}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${idx * 0.1}s`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
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
        {desc && (
          <span style={{
            fontSize: 12, fontWeight: 400, color: T.textLt, marginLeft: 10, fontStyle: 'italic',
          }}>
            —&nbsp;&nbsp;{desc}
          </span>
        )}
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
    <FadeWords text="Writing." style={{ fontSize: 20, fontWeight: 500, marginBottom: 40, letterSpacing: '-0.01em' }} />
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
          isLast={i === writings.length - 1}
        />
      ))}
    </div>
  </section>
);

export default WritingSection;
