import React, { useState, useRef, useEffect } from 'react';
import T from '../data/theme';
import { personalInfo, expertisePills, credentialsLine, heroBio } from '../data/siteContent';

const PillWithTooltip = ({ pill }) => {
  const [hover, setHover] = useState(false);
  const timer = useRef(null);
  const enter = () => { clearTimeout(timer.current); setHover(true); };
  const leave = () => { timer.current = setTimeout(() => setHover(false), 120); };
  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={() => setHover(h => !h)}
    >
      <div className="pill-tooltip" style={{
        position: 'absolute', bottom: 'calc(100% + 12px)', left: '50%',
        transform: `translateX(-50%) translateY(${hover ? '0' : '4px'})`,
        background: '#000', color: '#fff',
        fontSize: 12, lineHeight: 1.55, padding: '10px 16px',
        borderRadius: 10, pointerEvents: 'none',
        width: 240, textAlign: 'center',
        opacity: hover ? 1 : 0,
        transition: 'opacity 0.2s ease, transform 0.2s ease',
        letterSpacing: '-0.01em',
        zIndex: 10,
      }}>
        {pill.desc}
        <div style={{
          position: 'absolute', top: '100%', left: '50%',
          transform: 'translateX(-50%)',
          width: 0, height: 0,
          borderLeft: '7px solid transparent',
          borderRight: '7px solid transparent',
          borderTop: '7px solid #000',
        }} />
      </div>
      <div
        className="pill-item"
        style={{
          border: `1px solid ${T.border}`,
          padding: '10px 24px', fontSize: 13, borderRadius: 3,
          cursor: 'default', transition: 'all 0.25s ease',
          background: hover ? '#000' : 'transparent',
          color: hover ? '#fff' : T.text,
          borderColor: hover ? '#000' : T.border,
        }}
      >{pill.label}</div>
    </div>
  );
};

const HeroSection = () => {
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onEnd = () => setVideoEnded(true);
    v.addEventListener('ended', onEnd);
    return () => v.removeEventListener('ended', onEnd);
  }, []);

  return (
    <section className="hero-grid">
      {/* Left — dark panel */}
      <div className="hero-dark" style={{
        background: T.bgDark, color: '#fff', display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end', padding: '96px 48px 48px', position: 'relative', overflow: 'hidden',
      }}>
        {/* Poster image (revealed when video fades out) */}
        <img
          src="/hero-poster.jpg" alt="Leo Peng portfolio hero"
          className="hero-video"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', zIndex: 0,
          }}
        />
        {/* Background video */}
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay muted playsInline
          aria-label="Background video" role="presentation"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', zIndex: 0,
            opacity: videoEnded ? 0 : 1,
            transition: 'opacity 1s ease',
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.8) 100%)',
        }} />

        <h1 style={{
          fontSize: 'clamp(48px, 6vw, 76px)', fontWeight: 600, lineHeight: 1.08,
          letterSpacing: '-0.04em', marginBottom: 20, position: 'relative', zIndex: 2,
          animation: 'fadeUp 1.2s cubic-bezier(0.16,1,0.3,1) forwards',
        }}>
          {personalInfo.heroHeadline[0]}<br />{personalInfo.heroHeadline[1]}<em style={{ fontStyle: 'italic' }}>{personalInfo.heroHeadline[2]}</em><br />{personalInfo.heroHeadline[3]}
        </h1>
        <p className="hero-subtags" style={{
          fontSize: 13, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em',
          fontWeight: 400, position: 'relative', zIndex: 2, textTransform: 'uppercase',
          animation: 'fadeUp 1.2s cubic-bezier(0.16,1,0.3,1) 0.35s forwards', opacity: 0,
        }}>
          {personalInfo.heroSubtags}
        </p>
        <div style={{
          position: 'relative', zIndex: 2, fontSize: 11, textTransform: 'uppercase',
          letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)',
          display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto',
          animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.7s forwards', opacity: 0,
        }}>
          <div className="scroll-line" style={{ height: 1, background: 'rgba(255,255,255,0.2)' }} />
          Scroll to explore
        </div>
      </div>

      {/* Right — info panel */}
      <div className="hero-info" style={{ padding: '80px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 3 }}>
        <h2 style={{
          fontSize: 42, fontWeight: 500, letterSpacing: '-0.03em',
          lineHeight: 1.1, marginBottom: 12,
          animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.2s forwards', opacity: 0,
        }}>{personalInfo.title}</h2>

        {/* Credentials line */}
        <p style={{
          fontSize: 13, fontWeight: 600, color: T.text, letterSpacing: '-0.01em',
          marginBottom: 20,
          animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.4s forwards', opacity: 0,
        }}>
          {credentialsLine}
        </p>

        {/* Bio */}
        <div className="hero-bio" style={{
          marginBottom: 32,
          animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.55s forwards', opacity: 0,
        }}>
          <p style={{ fontSize: 14, color: T.textSec, lineHeight: 1.7, marginBottom: 12 }}>
            {heroBio[0]}
          </p>
          <p className="hero-bio-secondary" style={{ fontSize: 14, color: T.textSec, lineHeight: 1.7 }}>
            {heroBio[1]}
          </p>
        </div>

        {/* Status */}
        <div style={{ marginBottom: 24, animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.7s forwards', opacity: 0 }}>
          <span style={{
            display: 'block', marginBottom: 8, textTransform: 'uppercase',
            letterSpacing: '0.05em', fontSize: 11, fontWeight: 500, color: T.textSec,
          }}>Status</span>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
            <span className="status-dot" style={{
              width: 20, height: 20, borderRadius: '50%',
              backgroundColor: T.accent, border: `1px solid ${T.accent}`,
              display: 'inline-block', marginRight: 8, flexShrink: 0,
            }} />
            <span style={{ fontSize: 13 }}>{personalInfo.currentStatus}</span>
          </div>
        </div>

        {/* Expertise */}
        <div style={{ marginBottom: 24, animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.85s forwards', opacity: 0 }}>
          <span style={{
            display: 'block', marginBottom: 8, textTransform: 'uppercase',
            letterSpacing: '0.05em', fontSize: 11, fontWeight: 500, color: T.textSec,
          }}>Expertise</span>
          <div className="pill-row" style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
            {expertisePills.map(pill => (
              <PillWithTooltip key={pill.label} pill={pill} />
            ))}
          </div>
        </div>

        <a href="https://www.linkedin.com/in/leopeng2023/" target="_blank" rel="noopener noreferrer" style={{
          marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: 16, fontWeight: 500, padding: '12px 0',
          borderBottom: `1px solid ${T.text}`, background: 'none',
          color: T.text, width: 'fit-content', transition: 'opacity 0.2s',
          animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 1.0s forwards', opacity: 0,
        }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.6'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >
          View Resume &rarr;
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
