import React from 'react';
import ServiceIcons from './ServiceIcons';
import FadeWords from './FadeWords';
import useInView from '../hooks/useInView';
import { useLocale } from '../i18n/LocaleContext';

const ServicesSection = () => {
  const { locale, content } = useLocale();
  const { services, ui } = content;
  // One observer for the grid; the cards reveal together, staggered 100ms.
  const { ref: gridRef, inView } = useInView({ threshold: 0.1 });
  return (
    <section id="services" className="section-pad section-divider">
      <FadeWords key={locale} text={ui.sections.services} className="section-title" />
      <div ref={gridRef} className="services-grid">
        {services.map((s, i) => (
          <div
            key={s.num}
            className={`service-card reveal${inView ? ' is-visible' : ''}`}
            style={{ '--reveal-delay': `${i * 0.1}s` }}
          >
            <span className="service-num">{s.num}</span>
            <div className="service-icon">{ServiceIcons[s.iconType]}</div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
            <div className="service-tags">
              {s.tags.map(t => (
                <span key={t} className="tag-chip tag-chip--sm">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
