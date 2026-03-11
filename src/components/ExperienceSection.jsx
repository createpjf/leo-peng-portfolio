import React, { useState } from 'react';
import T from '../data/theme';
import { experienceData, extraExperience } from '../data/siteContent';
import FadeWords from './FadeWords';
import useInView from '../hooks/useInView';

const canHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

const ExpRow = ({ item, isLast, hoveredIdx, idx, setHoveredIdx }) => {
  const { ref, inView } = useInView({ threshold: 0.15 });
  return (
  <div
    ref={ref}
    className="exp-row"
    onMouseEnter={() => canHover && setHoveredIdx(idx)}
    onMouseLeave={() => canHover && setHoveredIdx(null)}
    style={{
      padding: '24px 0',
      borderBottom: isLast ? 'none' : `1px solid ${T.border}`,
      transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${idx * 0.1}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${idx * 0.1}s`,
      opacity: inView ? 1 : 0,
      transform: inView
        ? (hoveredIdx === idx ? 'translateX(8px)' : 'translateX(0)')
        : 'translateY(20px)',
    }}
  >
    <span style={{ fontSize: 13, fontVariantNumeric: 'tabular-nums', color: T.textSec }}>{item.date}</span>
    <div>
      <h3 style={{ fontSize: 15, fontWeight: 500, display: 'block', marginBottom: 2 }}>{item.role}</h3>
      <span style={{ fontSize: 13, color: T.textSec, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        {item.logo && <img src={item.logo} alt={item.company} style={{ height: 18, maxWidth: 48, borderRadius: 3, objectFit: 'contain' }} />}
        {item.company}
      </span>
    </div>
    <span className="exp-type-badge" style={{
      fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em',
      padding: '4px 12px', border: `1px solid ${T.border}`, borderRadius: 3, color: T.textSec,
    }}>{item.type}</span>
  </div>
  );
};

const ExperienceSection = ({ showFull, setShowFull }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const baseCount = experienceData.length;

  return (
    <section id="experience" className="section-pad" style={{ padding: '80px 40px', borderBottom: `1px solid ${T.border}` }}>
      <FadeWords text="Experience." style={{ fontSize: 20, fontWeight: 500, marginBottom: 40, letterSpacing: '-0.01em' }} />
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        {/* Base items — always visible */}
        {experienceData.map((item, i) => (
          <ExpRow
            key={item.id}
            item={item}
            idx={i}
            isLast={!showFull && i === baseCount - 1}
            hoveredIdx={hoveredIdx}
            setHoveredIdx={setHoveredIdx}
          />
        ))}

        {/* Extra items — animated expand/collapse */}
        <div style={{
          display: 'grid',
          gridTemplateRows: showFull ? '1fr' : '0fr',
          opacity: showFull ? 1 : 0,
          transition: 'grid-template-rows 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease',
        }}>
          <div style={{ overflow: 'hidden' }}>
            {extraExperience.map((item, i) => (
              <ExpRow
                key={item.id}
                item={item}
                idx={baseCount + i}
                isLast={i === extraExperience.length - 1}
                hoveredIdx={hoveredIdx}
                setHoveredIdx={setHoveredIdx}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <button
          onClick={() => setShowFull(!showFull)}
          onMouseEnter={e => { e.currentTarget.style.background = T.text; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.text; }}
          style={{
            display: 'block', width: '100%', textAlign: 'center',
            border: `1px solid ${T.text}`, padding: 14, fontSize: 13,
            textTransform: 'uppercase', letterSpacing: '0.05em',
            background: 'transparent', color: T.text,
            transition: 'all 0.2s', marginTop: 24, cursor: 'pointer', fontFamily: T.font,
          }}
        >{showFull ? 'Show less' : 'See more'}</button>
      </div>
    </section>
  );
};

export default ExperienceSection;
