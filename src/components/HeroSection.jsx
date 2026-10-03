import React, { useState, useRef, useEffect } from 'react';
import PillWithTooltip from './PillWithTooltip';
import { useLocale } from '../i18n/LocaleContext';
import prefersReducedMotion, { REDUCED_MOTION_QUERY } from '../utils/prefersReducedMotion';

// Visitors with Data Saver on skip the ~1.2 MB intro video (poster only).
const prefersSaveData = () => typeof navigator !== 'undefined' && navigator.connection?.saveData === true;

// Headline words fade up one after another, 80ms apart.
const wordDelay = (i) => ({ '--word-delay': `${i * 0.08}s` });

const HeroSection = () => {
  const { content } = useLocale();
  const { personalInfo, expertisePills, ui } = content;
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);
  // Reduced-motion and Data Saver users get the static poster only.
  const [videoRemoved, setVideoRemoved] = useState(() => prefersReducedMotion() || prefersSaveData());

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onEnd = () => setVideoEnded(true);
    v.addEventListener('ended', onEnd);
    return () => v.removeEventListener('ended', onEnd);
  }, []);

  // Turning reduced motion on mid-playback swaps straight to the poster.
  useEffect(() => {
    const mq = window.matchMedia(REDUCED_MOTION_QUERY);
    const onChange = (e) => { if (e.matches) setVideoRemoved(true); };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Remove video element from DOM after fade-out completes (frees GPU layer)
  useEffect(() => {
    if (!videoEnded) return;
    const timer = setTimeout(() => setVideoRemoved(true), 2800); // 2.5s transition + buffer
    return () => clearTimeout(timer);
  }, [videoEnded]);

  return (
    <section id="intro" className="hero-grid">
      {/* Left — dark panel */}
      <div className="hero-dark">
        {/* Poster image (revealed when video fades out) */}
        <img
          src="/hero-poster.jpg" alt={ui.heroImageAlt}
          className="hero-video"
          fetchPriority="high"
          decoding="async"
        />
        {/* Background video — removed from DOM after fade-out to free GPU */}
        {!videoRemoved && (
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay muted playsInline
            aria-hidden="true"
            style={{
              opacity: videoEnded ? 0 : 1,
              transition: 'opacity 2.5s ease',
            }}
          >
            <source src="/hero.webm" type="video/webm" />
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        )}
        {/* Dark gradient overlay */}
        <div className="hero-overlay" />

        {/* Headline copy is English in both locales. Screen readers get the
            whole phrase once; the per-word animation spans are hidden. */}
        <h1 key={content.meta.ogLocale} lang="en">
          <span className="sr-only">
            {[personalInfo.heroHeadline[0], `${personalInfo.heroHeadline[1]}${personalInfo.heroHeadline[2]}`, personalInfo.heroHeadline[3]]
              .map((line) => line.trim()).join(' ')}
          </span>
          {/* Line 1 — staggered word-by-word fadeUp */}
          {personalInfo.heroHeadline[0].split(' ').map((w, i) => (
            <span key={`l1-${i}`} aria-hidden="true" className="hero-word" style={wordDelay(i)}>{w}&nbsp;</span>
          ))}
          <br />
          {/* Line 2 — optional prefix + italic word */}
          {personalInfo.heroHeadline[1].trim().split(' ').filter(Boolean).map((w, i) => (
            <span key={`l2-${i}`} aria-hidden="true" className="hero-word" style={wordDelay(i + 2)}>{w}&nbsp;</span>
          ))}
          <em aria-hidden="true" className="hero-word" style={wordDelay(4)}>{personalInfo.heroHeadline[2]}</em>
          <br />
          {/* Line 3 */}
          {personalInfo.heroHeadline[3].split(' ').map((w, i) => (
            <span key={`l3-${i}`} aria-hidden="true" className="hero-word" style={wordDelay(i + 5)}>{w}&nbsp;</span>
          ))}
        </h1>
        <p className="hero-subtags">{personalInfo.heroSubtags}</p>
      </div>

      {/* Right — info panel */}
      <div className="hero-info">
        <h2>{personalInfo.title}</h2>

        {/* Subtitle — 经历背景线 */}
        <p className="hero-subtitle">{personalInfo.heroSubtitle}</p>

        {/* Bio paragraphs */}
        <div className="hero-bio">
          {personalInfo.heroBio.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>

        {/* Status */}
        <div className="hero-status">
          <span className="eyebrow">{ui.status}</span>
          <div className="hero-status-row">
            <span className="status-dot" />
            <span className="hero-status-text">{personalInfo.currentStatus}</span>
          </div>
        </div>

        {/* Expertise */}
        <div className="hero-expertise">
          <span className="eyebrow">{ui.expertise}</span>
          <div className="pill-row">
            {expertisePills.map(pill => (
              <PillWithTooltip key={pill.label} pill={pill} />
            ))}
          </div>
        </div>

        <a href="https://www.linkedin.com/in/leopeng2023/" target="_blank" rel="noopener noreferrer" className="resume-link">
          {ui.viewResume} <span className="resume-arrow" aria-hidden="true">&rarr;</span>
          <span className="sr-only">{ui.opensInNewTab}</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
