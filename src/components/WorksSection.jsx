import React, { useState } from 'react';
import T from '../data/theme';
import FadeWords from './FadeWords';
import useInView from '../hooks/useInView';
import useCanHover from '../hooks/useCanHover';
import F from '../data/typography';
import { useLocale } from '../i18n/LocaleContext';

// Card width: 1 column below 600px, 2 up to 1024px, 3 above (see .works-grid).
const THUMB_SIZES = '(max-width: 599px) 100vw, (max-width: 1024px) 50vw, 33vw';
const thumbSrcSet = (src, width = 1600) => {
  const variant = (w) => `${src.replace(/\.webp$/, `-${w}.webp`)} ${w}w`;
  return `${variant(960)}, ${variant(1200)}, ${src} ${width}w`;
};

const WorkCard = ({ title, category, year, children, idx, href, newTabLabel }) => {
  const [hover, setHover] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.15 });
  const canHover = useCanHover();
  // Projects without a link render as a plain block (not an <a> with no href)
  // and skip the hover zoom/border, so they don't look clickable.
  const Tag = href ? 'a' : 'div';
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};
  const hoverable = Boolean(href) && canHover;
  return (
    <Tag
      ref={ref}
      {...linkProps}
      onMouseEnter={() => hoverable && setHover(true)}
      onMouseLeave={() => hoverable && setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', cursor: href ? 'pointer' : 'default',
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
          <h3 style={{ fontWeight: 500, marginBottom: 4, display: 'block', fontSize: F.lg }}>{title}</h3>
          <span style={{ color: T.textSec, fontSize: F.sm }}>{category}</span>
        </div>
        <span style={{ fontVariantNumeric: 'tabular-nums', fontSize: F.base, color: T.textLt }}>{year}</span>
      </div>
      {href && <span className="sr-only">{newTabLabel}</span>}
    </Tag>
  );
};

const WorksSection = () => {
  const { content } = useLocale();
  const { projects, ui } = content;

  return (
  <section id="work" className="section-pad" style={{ padding: '60px 40px', background: '#fafafa' }}>
    <FadeWords key={ui.sections.work} text={ui.sections.work} className="section-title" style={{ marginBottom: 32 }} />
    <div className="works-grid">
      {projects.map((p, i) => (
        <WorkCard key={p.id} title={p.title} category={p.category} year={p.year} idx={i} href={p.href} newTabLabel={ui.opensInNewTab}>
          <img
            src={p.heroImg}
            srcSet={thumbSrcSet(p.heroImg, p.heroWidth)}
            sizes={THUMB_SIZES}
            alt="" loading="lazy" decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </WorkCard>
      ))}
    </div>
  </section>
  );
};

export default WorksSection;
