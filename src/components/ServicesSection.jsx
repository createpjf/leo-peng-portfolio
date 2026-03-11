import React, { useState } from 'react';
import T from '../data/theme';
import { services } from '../data/siteContent';
import ServiceIcons from './ServiceIcons';
import FadeWords from './FadeWords';
import useInView from '../hooks/useInView';
import ScrollReveal from './ScrollReveal';

const ServicesSection = () => {
  const [hovered, setHovered] = useState(null);
  const { ref: gridRef, inView } = useInView({ threshold: 0.1 });
  return (
    <section id="services" className="section-pad" style={{ padding: '80px 40px', borderBottom: `1px solid ${T.border}` }}>
      <FadeWords text="What I Do." style={{ fontSize: 20, fontWeight: 500, marginBottom: 40, letterSpacing: '-0.01em' }} />
      <div ref={gridRef} className="services-grid" style={{ background: T.border, border: `1px solid ${T.border}` }}>
        {services.map((s, i) => (
          <ScrollReveal key={s.num} delay={`${i * 0.1}s`} style={{ height: '100%' }}>
          <div
            className="service-card"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? '#fafafa' : T.bg,
              padding: '48px 24px', display: 'flex', flexDirection: 'column', height: '100%',
              transition: `background 0.3s ease, opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
              cursor: 'default',
              position: 'relative', overflow: 'hidden',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <span style={{ fontSize: 32, fontWeight: 300, color: T.textLt, marginBottom: 24, lineHeight: 1 }}>{s.num}</span>
            <div style={{
              width: 48, height: 48, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: T.bgSec, borderRadius: 3,
            }}>{ServiceIcons[s.iconType]}</div>
            <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: 8 }}>{s.title}</h3>
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
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
