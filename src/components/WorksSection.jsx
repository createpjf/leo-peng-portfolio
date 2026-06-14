import React, { useState } from 'react';
import T from '../data/theme';
import { projects } from '../data/siteContent';
import FadeWords from './FadeWords';
import useInView from '../hooks/useInView';
import useCanHover from '../hooks/useCanHover';
import F from '../data/typography';

const WorkCard = ({ title, category, year, children, idx, href }) => {
  const [hover, setHover] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.15 });
  const canHover = useCanHover();
  return (
    <a
      ref={ref}
      href={href || '#'}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => canHover && setHover(true)}
      onMouseLeave={() => canHover && setHover(false)}
      onClick={e => { if (!href) e.preventDefault(); }}
      style={{
        display: 'flex', flexDirection: 'column', cursor: 'pointer',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${idx * 0.1}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${idx * 0.1}s`,
        textDecoration: 'none', color: 'inherit',
      }}
    >
      <div className="work-thumb" style={{ borderColor: hover ? T.accent : T.border }}>
        <div className="work-thumb-img" style={{ transform: hover ? 'scale(1.06)' : 'scale(1)' }}>{children}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: F.md }}>
        <div>
          <h3 style={{ fontWeight: 500, marginBottom: 4, display: 'block', fontSize: 'inherit' }}>{title}</h3>
          <span style={{ color: T.textSec, fontSize: F.sm }}>{category}</span>
        </div>
        <span style={{ fontVariantNumeric: 'tabular-nums', fontSize: F.base, color: T.textLt }}>{year}</span>
      </div>
    </a>
  );
};

const WorksSection = () => (
  <section id="work" className="section-pad" style={{ padding: '60px 40px', background: '#fafafa' }}>
    <FadeWords text="Selected Work." className="section-title" style={{ marginBottom: 32 }} />
    <div className="works-grid">
      {projects.map((p, i) => (
        <WorkCard key={p.title} title={p.title} category={p.category} year={p.year} idx={i} href={p.href}>
          <img src={p.heroImg} alt={p.title} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </WorkCard>
      ))}
    </div>
  </section>
);

export default WorksSection;
