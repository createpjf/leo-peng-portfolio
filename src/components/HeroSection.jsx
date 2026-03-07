import React, { useState } from 'react';
import T from '../data/theme';
import { personalInfo, expertisePills } from '../data/siteContent';

const PillWithTooltip = ({ pill }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Apple-style tooltip */}
      <div style={{
        position: 'absolute', bottom: 'calc(100% + 12px)', left: '50%',
        transform: `translateX(-50%) translateY(${hover ? '0' : '4px'})`,
        background: '#fff', color: T.text,
        fontSize: 12, lineHeight: 1.55, padding: '10px 16px',
        borderRadius: 10, pointerEvents: 'none',
        boxShadow: '0 2px 20px rgba(0,0,0,0.10), 0 0 0 0.5px rgba(0,0,0,0.06)',
        width: 260, textAlign: 'center',
        opacity: hover ? 1 : 0,
        transition: 'opacity 0.2s ease, transform 0.2s ease',
        letterSpacing: '-0.01em',
        zIndex: 10,
      }}>
        {pill.desc}
        {/* Arrow */}
        <div style={{
          position: 'absolute', top: '100%', left: '50%',
          transform: 'translateX(-50%)',
          width: 0, height: 0,
          borderLeft: '7px solid transparent',
          borderRight: '7px solid transparent',
          borderTop: '7px solid #fff',
          filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.06))',
        }} />
      </div>
      <div
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

const HeroSection = () => (
  <section className="hero-grid">
    {/* Left — dark panel */}
    <div className="hero-dark" style={{
      background: T.bgDark, color: '#fff', display: 'flex', flexDirection: 'column',
      justifyContent: 'flex-end', padding: '96px 48px 48px', position: 'relative', overflow: 'hidden',
    }}>
      <div className="geo-1" style={{ position:'absolute', top:'10%', right:'15%', width:200, height:200, border:'1px solid rgba(255,255,255,0.06)', borderRadius:'50%' }} />
      <div className="geo-2" style={{ position:'absolute', top:'35%', left:'10%', width:120, height:120, border:'1px solid rgba(255,255,255,0.06)' }} />
      <div className="geo-3" style={{ position:'absolute', top:'20%', right:'40%', width:80, height:80, border:'1px solid rgba(255,255,255,0.08)', borderRadius:'50%' }} />

      <h1 style={{
        fontSize: 'clamp(48px, 6vw, 76px)', fontWeight: 500, lineHeight: 1.05,
        letterSpacing: '-0.03em', marginBottom: 24, position: 'relative', zIndex: 1,
        animation: 'fadeUp 0.7s ease forwards',
      }}>
        {personalInfo.heroHeadline[0]}<br />{personalInfo.heroHeadline[1]}<em style={{ fontStyle:'italic' }}>{personalInfo.heroHeadline[2]}</em><br />{personalInfo.heroHeadline[3]}
      </h1>
      <p style={{
        fontSize: 13, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em',
        marginBottom: 48, position: 'relative', zIndex: 1, textTransform: 'uppercase',
        animation: 'fadeUp 0.7s ease 0.1s forwards', opacity: 0,
      }}>
        {personalInfo.heroSubtags}
      </p>
      <div style={{
        position: 'relative', zIndex: 1, fontSize: 11, textTransform: 'uppercase',
        letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)',
        display: 'flex', alignItems: 'center', gap: 8,
        animation: 'fadeUp 0.7s ease 0.2s forwards', opacity: 0,
      }}>
        <div className="scroll-line" style={{ height: 1, background: 'rgba(255,255,255,0.2)' }} />
        Scroll
      </div>
    </div>

    {/* Right — info panel */}
    <div className="hero-info" style={{ padding: '80px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

      <h2 style={{
        fontSize: 42, fontWeight: 500, letterSpacing: '-0.03em',
        lineHeight: 1.1, marginBottom: 8,
        animation: 'fadeUp 0.7s ease forwards',
      }}>{personalInfo.name}</h2>

      <p style={{
        fontSize: 15, color: T.textSec, lineHeight: 1.6, maxWidth: 440, marginBottom: 40,
        animation: 'fadeUp 0.7s ease 0.1s forwards', opacity: 0,
      }}>
        {personalInfo.tagline}
      </p>

      {/* Status */}
      <div style={{ marginBottom: 24, animation: 'fadeUp 0.7s ease 0.2s forwards', opacity: 0 }}>
        <span style={{
          display: 'block', marginBottom: 8, textTransform: 'uppercase',
          letterSpacing: '0.05em', fontSize: 11, fontWeight: 500, color: T.textSec,
        }}>Status</span>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
          <span style={{
            width: 24, height: 24, borderRadius: '50%',
            backgroundColor: T.accent, border: `1px solid ${T.accent}`,
            display: 'inline-block', marginRight: 8,
          }} />
          <span style={{ fontSize: 13 }}>{personalInfo.currentStatus}</span>
        </div>
      </div>

      {/* Expertise */}
      <div style={{ marginBottom: 24, animation: 'fadeUp 0.7s ease 0.3s forwards', opacity: 0 }}>
        <span style={{
          display: 'block', marginBottom: 8, textTransform: 'uppercase',
          letterSpacing: '0.05em', fontSize: 11, fontWeight: 500, color: T.textSec,
        }}>Expertise</span>
        <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
          {expertisePills.map(pill => (
            <PillWithTooltip key={pill.label} pill={pill} />
          ))}
        </div>
      </div>

      <a href="#" style={{
        marginTop: 40, display: 'inline-flex', alignItems: 'center', gap: 8,
        fontSize: 16, fontWeight: 500, padding: '12px 0',
        borderBottom: `1px solid ${T.text}`, background: 'none',
        color: T.text, width: 'fit-content', transition: 'opacity 0.2s',
        animation: 'fadeUp 0.7s ease 0.4s forwards', opacity: 0,
      }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.6'; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        onClick={e => e.preventDefault()}
      >
        View Resume →
      </a>
    </div>
  </section>
);

export default HeroSection;
