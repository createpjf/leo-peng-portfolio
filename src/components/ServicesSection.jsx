import React from 'react';
import ServiceIcons from './ServiceIcons';
import FadeWords from './FadeWords';
import { useLocale } from '../i18n/LocaleContext';

const ServicesSection = () => {
  const { content } = useLocale();
  const { services, ui, projects } = content;
  const serviceProjects = { film: 'brand-film', fde: 'goleta', commerce: 'retail-os' };
  return (
    <section id="services" className="section-pad">
      <FadeWords text={ui.sections.services} className="section-title" />
      <div className="services-grid">
        {services.map(s => {
          const project = projects.find(p => p.id === serviceProjects[s.id]);
          return <article key={s.id} className={`service-card service-card--${s.id}`}>
            <div className="service-card-top">
              <span className="service-number">{s.num}</span>
              <span className="service-icon" aria-hidden="true">{ServiceIcons[s.iconType]}</span>
            </div>
            {project && <div className="service-media"><img src={project.heroImg} alt={project.title} loading="lazy" decoding="async" /></div>}
            {s.id === 'growth' && <div className="service-media"><img src="/growth-strategy.webp" alt="" width="1983" height="793" loading="lazy" decoding="async" /></div>}
            <div className="service-card-body">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">{s.tags.slice(0, 2).map(tag => <span key={tag} className="tag-chip">{tag}</span>)}</div>
            </div>
          </article>;
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
