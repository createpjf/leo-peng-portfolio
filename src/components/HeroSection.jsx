import React, { useState, useRef, useEffect } from 'react';
import T from '../data/theme';
import PillWithTooltip from './PillWithTooltip';
import F from '../data/typography';
import { useLocale } from '../i18n/LocaleContext';
import prefersReducedMotion, { REDUCED_MOTION_QUERY } from '../utils/prefersReducedMotion';

const HeroSection = () => {
  const { content } = useLocale();
  const { personalInfo, expertisePills, ui } = content;
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);
  // Reduced-motion users get the static poster only (no autoplaying video).
  const [videoRemoved, setVideoRemoved] = useState(prefersReducedMotion);

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
        <h1 key={content.meta.ogLocale} lang="en" style={{
          fontSize: 'clamp(3rem, 6vw, 4.75rem)', fontWeight: 600, lineHeight: 1.08,
          letterSpacing: '-0.04em', marginBottom: 20, position: 'relative', zIndex: 2,
          marginTop: 'auto',
        }}>
          <span className="sr-only">
            {[personalInfo.heroHeadline[0], `${personalInfo.heroHeadline[1]}${personalInfo.heroHeadline[2]}`, personalInfo.heroHeadline[3]]
              .map((line) => line.trim()).join(' ')}
          </span>
          {/* Line 1 — staggered word-by-word fadeUp */}
          {personalInfo.heroHeadline[0].split(' ').map((w, i) => (
            <span key={`l1-${i}`} aria-hidden="true" style={{
              display: 'inline-block', opacity: 0,
              animation: `fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s forwards`,
            }}>{w}&nbsp;</span>
          ))}
          <br />
          {/* Line 2 — optional prefix + italic word */}
          {personalInfo.heroHeadline[1].trim().split(' ').filter(Boolean).map((w, i) => (
            <span key={`l2-${i}`} aria-hidden="true" style={{
              display: 'inline-block', opacity: 0,
              animation: `fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) ${(i + 2) * 0.08}s forwards`,
            }}>{w}&nbsp;</span>
          ))}
          <em aria-hidden="true" style={{
            fontStyle: 'italic', display: 'inline-block', opacity: 0,
            animation: `fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) ${4 * 0.08}s forwards`,
          }}>{personalInfo.heroHeadline[2]}</em>
          <br />
          {/* Line 3 */}
          {personalInfo.heroHeadline[3].split(' ').map((w, i) => (
            <span key={`l3-${i}`} aria-hidden="true" style={{
              display: 'inline-block', opacity: 0,
              animation: `fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) ${(i + 5) * 0.08}s forwards`,
            }}>{w}&nbsp;</span>
          ))}
        </h1>
        <p className="hero-subtags" style={{
          fontSize: F.base, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em',
          fontWeight: 400, position: 'relative', zIndex: 2, textTransform: 'uppercase',
          animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.15s forwards', opacity: 0,
        }}>
          {personalInfo.heroSubtags}
        </p>
      </div>

      {/* Right — info panel */}
      <div className="hero-info" style={{ padding: '80px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 3 }}>
        <h2 style={{
          fontSize: F['5xl'], fontWeight: 500, letterSpacing: '-0.03em',
          lineHeight: 1.1, marginBottom: 6,
          animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) forwards',
        }}>{personalInfo.title}</h2>

        {/* Subtitle — 经历背景线 */}
        <p className="hero-subtitle" style={{
          fontSize: F.sm, color: T.textLt, letterSpacing: '0.04em',
          textTransform: 'uppercase', marginBottom: 24, lineHeight: 1.5,
          animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.1s forwards', opacity: 0,
        }}>{personalInfo.heroSubtitle}</p>

        {/* Bio paragraphs */}
        <div className="hero-bio" style={{
          marginBottom: 32,
          animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.2s forwards', opacity: 0,
        }}>
          {personalInfo.heroBio.map((text, i) => (
            <p key={i} style={{
              fontSize: F.lg, color: T.textSec, lineHeight: 1.6,
              marginBottom: i === 0 ? 12 : 0,
            }}>{text}</p>
          ))}
        </div>

        {/* Status */}
        <div style={{ marginBottom: 24, animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.3s forwards', opacity: 0 }}>
          <span className="eyebrow" style={{ marginBottom: 8 }}>{ui.status}</span>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
            <span className="status-dot" style={{
              width: 20, height: 20, borderRadius: '50%',
              backgroundColor: T.accent, border: `1px solid ${T.accent}`,
              display: 'inline-block', marginRight: 8, flexShrink: 0,
            }} />
            <span style={{ fontSize: F.base }}>{personalInfo.currentStatus}</span>
          </div>
        </div>

        {/* Expertise */}
        <div style={{ marginBottom: 24, animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.4s forwards', opacity: 0 }}>
          <span className="eyebrow" style={{ marginBottom: 8 }}>{ui.expertise}</span>
          <div className="pill-row" style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
            {expertisePills.map(pill => (
              <PillWithTooltip key={pill.label} pill={pill} />
            ))}
          </div>
        </div>

        <a href="https://www.linkedin.com/in/leopeng2023/" target="_blank" rel="noopener noreferrer" className="resume-link" style={{
          marginTop: 24, display: 'inline-flex', alignItems: 'center',
          fontSize: F.xl, fontWeight: 500, padding: '12px 0',
          borderBottom: `1px solid ${T.text}`, background: 'none',
          color: T.text, width: 'fit-content',
          animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.5s forwards', opacity: 0,
          transition: 'gap 0.35s cubic-bezier(0.4,0,0.2,1), color 0.3s ease',
        }}
        >
          {ui.viewResume} <span style={{
            display: 'inline-block',
            transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          }}
            className="resume-arrow"
            aria-hidden="true"
          >&rarr;</span>
          <span className="sr-only">{ui.opensInNewTab}</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
