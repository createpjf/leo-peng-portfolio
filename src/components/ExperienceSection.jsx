import React, { useState } from 'react';
import FadeWords from './FadeWords';
import useInView from '../hooks/useInView';
import { useLocale } from '../i18n/LocaleContext';

const ExpRow = ({ item, isLast, idx }) => {
  const { ref, inView } = useInView({ threshold: 0.15 });
  return (
  <div
    ref={ref}
    className={`exp-row reveal${inView ? ' is-visible' : ''}${isLast ? ' exp-row--last' : ''}`}
    style={{ '--reveal-delay': `${idx * 0.1}s` }}
  >
    <span className="exp-date">{item.date}</span>
    <div>
      <h3 className="exp-role">{item.role}</h3>
      <span className="exp-company">
        {item.logo && <img src={item.logo} alt="" loading="lazy" decoding="async" className="exp-logo" />}
        {item.company}
      </span>
    </div>
    <span className="exp-type-badge tag-chip">{item.type}</span>
  </div>
  );
};

const ExperienceSection = () => {
  const { content } = useLocale();
  const { experienceData, extraExperience, ui } = content;
  const [showFull, setShowFull] = useState(false);
  const baseCount = experienceData.length;

  return (
    <section id="experience" className="section-pad section-divider">
      <FadeWords key={ui.sections.experience} text={ui.sections.experience} className="section-title" />
      <div className="exp-list">
        {/* Base items — always visible */}
        {experienceData.map((item, i) => (
          <ExpRow
            key={item.id}
            item={item}
            idx={i}
            isLast={!showFull && i === baseCount - 1}
          />
        ))}

        {/* Extra items — animated expand/collapse; inert while collapsed so
            screen readers and Tab skip the visually hidden rows */}
        <div
          id="experience-extra"
          className={`exp-extra${showFull ? ' is-open' : ''}`}
          inert={showFull ? undefined : ''}
          aria-hidden={showFull ? undefined : true}
        >
          <div className="exp-extra-inner">
            {extraExperience.map((item, i) => (
              <ExpRow
                key={item.id}
                item={item}
                idx={baseCount + i}
                isLast={i === extraExperience.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="exp-list">
        <button
          type="button"
          className="exp-toggle"
          onClick={() => setShowFull(!showFull)}
          aria-expanded={showFull}
          aria-controls="experience-extra"
        >{showFull ? ui.showLess : ui.seeMore}</button>
      </div>
    </section>
  );
};

export default ExperienceSection;
