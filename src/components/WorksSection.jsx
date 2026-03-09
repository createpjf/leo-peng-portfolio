import React, { useState } from 'react';
import T from '../data/theme';
import { projects } from '../data/siteContent';
import ScrollReveal from './ScrollReveal';

const WorkCard = ({ title, category, year, children, href }) => {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href || '#'}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={e => { if (!href) e.preventDefault(); }}
      style={{
        display: 'flex', flexDirection: 'column', cursor: 'pointer',
        textDecoration: 'none', color: 'inherit',
      }}
    >
      <div style={{
        background: T.bgSec, aspectRatio: '16/9', marginBottom: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', position: 'relative',
        border: `1px solid ${hover ? T.accent : T.border}`,
        transition: 'border-color 0.3s',
      }}>
        <div style={{
          width: '100%', height: '100%',
          transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
          transform: hover ? 'scale(1.06)' : 'scale(1)',
        }}>{children}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 14 }}>
        <div>
          <h3 style={{ fontWeight: 500, marginBottom: 4, display: 'block', fontSize: 'inherit' }}>{title}</h3>
          <span style={{ color: T.textSec, fontSize: 12 }}>{category}</span>
        </div>
        <span style={{ fontVariantNumeric: 'tabular-nums', fontSize: 13, color: T.textLt }}>{year}</span>
      </div>
    </a>
  );
};

const WorksSection = () => (
  <section id="work" className="section-pad" style={{ padding: '60px 40px', background: '#fafafa' }}>
    <h2 style={{ fontSize: 20, fontWeight: 500, marginBottom: 32, letterSpacing: '-0.01em' }}>Selected Work.</h2>
    <div className="works-grid">
      {projects.map((p, i) => (
        <ScrollReveal key={p.title} delay={`${i * 0.1}s`}>
          <WorkCard title={p.title} category={p.category} year={p.year} href={p.href}>
            <img src={p.heroImg} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </WorkCard>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default WorksSection;
