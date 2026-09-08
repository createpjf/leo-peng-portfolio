import React, { useEffect, useState } from 'react';
import FadeWords from './FadeWords';
import useInView from '../hooks/useInView';
import { useLocale } from '../i18n/LocaleContext';

import { coverCopy } from '../data/siteContent';
const coverColors = { botanic: '#9dff35', 'six-health': '#ff6339', goleta: '#7f91ff', 'retail-os': '#36ddd2', andlight: '#ff6339' };

const ProjectCover = ({ project, locale }) => {
  const lines = coverCopy[locale][project.id];
  if (!lines) return <img src={project.heroImg} alt={project.title} loading="lazy" decoding="async" className="project-image" />;
  return <div className="project-cover" role="img" aria-label={lines.join(' · ')} style={{ '--cover-accent': coverColors[project.id] }}>
    <div className="project-cover-visual">
      <img src={project.heroImg} alt="" loading="lazy" decoding="async"
        className={project.id === 'andlight' ? 'project-cover-screen' : 'project-cover-art'} />
    </div>
    <div className="project-cover-copy" aria-hidden="true">
      <span className="project-cover-year">{project.year}</span>
      <div>{lines.map((line, i) => <span className={i === 1 ? 'project-cover-accent' : ''} key={line}>{line}</span>)}</div>
    </div>
  </div>;
};

const WorkCard = ({ title, category, year, children, href, action }) => {
  const { ref, inView } = useInView({ threshold: 0.15 });
  return (
    <a
      ref={ref}
      className="work-card"
      href={href || undefined}
      target={href?.startsWith('https:') ? '_blank' : undefined}
      rel="noopener noreferrer"
      style={{
        display: 'flex', flexDirection: 'column', cursor: href ? 'pointer' : 'default',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        textDecoration: 'none', color: 'inherit',
      }}
    >
      <div className="work-thumb">
        <div className="work-thumb-img">{children}</div>
      </div>
      <div className="work-card-body">
        <div className="work-card-heading">
          <h3>{title}</h3>
          <span className="work-year">{year}</span>
        </div>
        <p>{category}</p>
        <span className="project-action">{action} <span aria-hidden="true">↗</span></span>
      </div>
    </a>
  );
};

const WorksSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [columns, setColumns] = useState(3);
  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 768px)');
    const tablet = window.matchMedia('(max-width: 900px)');
    const update = () => setColumns(mobile.matches ? 1 : tablet.matches ? 2 : 3);
    update();
    mobile.addEventListener('change', update);
    tablet.addEventListener('change', update);
    return () => {
      mobile.removeEventListener('change', update);
      tablet.removeEventListener('change', update);
    };
  }, []);
  const { content, locale } = useLocale();
  const { projects, ui } = content;
  const featuredIds = ['botanic', 'retail-os', 'andlight', 'goleta'];
  const featured = featuredIds.map(id => projects.find(p => p.id === id));
  const other = projects.filter(p => !featuredIds.includes(p.id));

  return (
  <section id="work" className="section-pad">
    <FadeWords text={ui.sections.work} className="section-title" />
    {[featured, other.slice(0, columns), other.slice(columns)].map((group, index) => <React.Fragment key={index}>
    {index === 1 && <h3 className="more-work-title">{ui.moreWork}</h3>}
    <div id={index === 2 ? 'more-work-remainder' : undefined}
      inert={index === 2 && !expanded ? '' : undefined}
      aria-hidden={index === 2 && !expanded ? true : undefined}
      className={index === 2 ? `more-work-remainder${expanded ? ' is-expanded' : ''}` : undefined}>
    <div className={index === 0 ? 'works-grid works-grid--featured' : 'works-grid'}>
      {group.map((p) => (
        <WorkCard key={p.id} title={p.title} category={p.category} year={p.year}
          action={p.href ? ui.viewProject : ui.discussProject}
          href={p.href || `mailto:${content.personalInfo.email}?subject=${encodeURIComponent(p.title)}`}>
          <ProjectCover project={p} locale={locale} />
        </WorkCard>
      ))}
    </div>
    </div>
    </React.Fragment>)}
    <div className="more-work-controls">
      <button type="button" className="secondary-action" aria-expanded={expanded} aria-controls="more-work-remainder"
        onClick={event => {
          if (expanded) {
            document.querySelector('.more-work-title')?.scrollIntoView({ block: 'start', behavior: 'instant' });
            event.currentTarget.focus({ preventScroll: true });
          }
          setExpanded(value => !value);
        }}>
        {expanded ? ui.collapseWork : ui.expandWork} <span aria-hidden="true">{expanded ? '↑' : '↓'}</span>
      </button>
    </div>
  </section>
  );
};

export default WorksSection;
