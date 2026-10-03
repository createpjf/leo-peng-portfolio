import React from 'react';
import FadeWords from './FadeWords';
import useInView from '../hooks/useInView';
import { useLocale } from '../i18n/LocaleContext';

// Card width: 1 column below 600px, 2 up to 1024px, 3 above (see .works-grid).
const THUMB_SIZES = '(max-width: 599px) 100vw, (max-width: 1024px) 50vw, 33vw';
const thumbSrcSet = (src, width = 1600) => {
  const variant = (w) => `${src.replace(/\.webp$/, `-${w}.webp`)} ${w}w`;
  return `${variant(960)}, ${variant(1200)}, ${src} ${width}w`;
};

const WorkCard = ({ title, category, year, children, idx, href, newTabLabel }) => {
  const { ref, inView } = useInView({ threshold: 0.15 });
  // Projects without a link render as a plain block (not an <a> with no href);
  // the hover zoom/border in index.css only targets a.work-card.
  const Tag = href ? 'a' : 'div';
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <Tag
      ref={ref}
      {...linkProps}
      className={`work-card reveal${inView ? ' is-visible' : ''}`}
      style={{ '--reveal-delay': `${idx * 0.1}s` }}
    >
      <div className="work-thumb">
        <div className="work-thumb-img">{children}</div>
      </div>
      <div className="work-meta">
        <div>
          <h3 className="work-title">{title}</h3>
          <span className="work-category">{category}</span>
        </div>
        <span className="work-year">{year}</span>
      </div>
      {href && <span className="sr-only">{newTabLabel}</span>}
    </Tag>
  );
};

const WorksSection = () => {
  const { content } = useLocale();
  const { projects, ui } = content;

  return (
  <section id="work" className="section-pad section-pad--compact section-muted">
    <FadeWords key={ui.sections.work} text={ui.sections.work} className="section-title section-title--tight" />
    <div className="works-grid">
      {projects.map((p, i) => (
        <WorkCard key={p.id} title={p.title} category={p.category} year={p.year} idx={i} href={p.href} newTabLabel={ui.opensInNewTab}>
          <img
            src={p.heroImg}
            srcSet={thumbSrcSet(p.heroImg, p.heroWidth)}
            sizes={THUMB_SIZES}
            alt="" loading="lazy" decoding="async"
          />
        </WorkCard>
      ))}
    </div>
  </section>
  );
};

export default WorksSection;
