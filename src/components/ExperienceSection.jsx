import React, { useState } from 'react';
import T from '../data/theme';
import { experienceData, extraExperience } from '../data/siteContent';

const ExperienceSection = ({ showFull, setShowFull }) => {
  const items = showFull ? [...experienceData, ...extraExperience] : experienceData;
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="experience" className="section-pad" style={{ padding: '80px 40px', borderBottom: `1px solid ${T.border}` }}>
      <h2 style={{ fontSize: 20, fontWeight: 500, marginBottom: 40, letterSpacing: '-0.01em' }}>Experience.</h2>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        {items.map((item, i) => (
          <div key={item.id}
            className="exp-row"
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{
              padding: '24px 0', paddingLeft: hoveredIdx === i ? 8 : 0,
              borderBottom: i < items.length - 1 ? `1px solid ${T.border}` : 'none',
              transition: 'padding-left 0.3s ease',
            }}
          >
            <span style={{ fontSize: 13, fontVariantNumeric: 'tabular-nums', color: T.textSec }}>{item.date}</span>
            <div>
              <span style={{ fontSize: 15, fontWeight: 500, display: 'block', marginBottom: 2 }}>{item.role}</span>
              <span style={{ fontSize: 13, color: T.textSec, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                {item.logo && <img src={item.logo} alt="" style={{ width: 18, height: 18, borderRadius: 3, objectFit: 'contain' }} />}
                {item.company}
              </span>
            </div>
            <span className="exp-type-badge" style={{
              fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em',
              padding: '4px 12px', border: `1px solid ${T.border}`, borderRadius: 3, color: T.textSec,
            }}>{item.type}</span>
          </div>
        ))}
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
