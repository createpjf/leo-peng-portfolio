import React, { useState } from 'react';
import T from '../data/theme';
import { services } from '../data/siteContent';
import ServiceIcons from './ServiceIcons';

const ServicesSection = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="services" className="section-pad" style={{ padding: '80px 40px', borderBottom: `1px solid ${T.border}` }}>
      <h2 style={{ fontSize: 20, fontWeight: 500, marginBottom: 40, letterSpacing: '-0.01em' }}>What I Do.</h2>
      <div className="services-grid" style={{ background: T.border, border: `1px solid ${T.border}` }}>
        {services.map((s, i) => (
          <div key={s.num}
            className="service-card"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? '#fafafa' : T.bg,
              padding: '48px 24px', display: 'flex', flexDirection: 'column',
              transition: 'background 0.3s ease', cursor: 'default',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <span style={{ fontSize: 32, fontWeight: 300, color: T.textLt, marginBottom: 24, lineHeight: 1 }}>{s.num}</span>
            <div style={{
              width: 48, height: 48, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: T.bgSec, borderRadius: 3,
            }}>{ServiceIcons[s.iconType]}</div>
            <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 8 }}>{s.title}</div>
            <p style={{ fontSize: 13, color: T.textSec, lineHeight: 1.65 }}>{s.desc}</p>
            <div style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {s.tags.map(t => (
                <span key={t} style={{
                  fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em',
                  padding: '4px 10px', border: `1px solid ${T.border}`, borderRadius: 3, color: T.textSec,
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
