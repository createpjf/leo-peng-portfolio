import React from 'react';
import T from '../data/theme';
import { personalInfo, expertisePills } from '../data/siteContent';

const HeroSection = ({ selectedPills, togglePill }) => (
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
        Scroll to explore
      </div>
    </div>

    {/* Right — info panel */}
    <div className="hero-info" style={{ padding: '80px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ fontSize: 12, color: T.textLt, marginBottom: 40 }}>
        Home <span style={{ margin: '0 6px', opacity: 0.4 }}>&rsaquo;</span>
        Profile <span style={{ margin: '0 6px', opacity: 0.4 }}>&rsaquo;</span>
        Overview
      </div>

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
        }}>Current Status</span>
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
          {expertisePills.map(pill => {
            const active = selectedPills.includes(pill);
            return (
              <div key={pill}
                onClick={() => togglePill(pill)}
                onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = '#000'; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = T.border; }}
                style={{
                  border: `1px solid ${active ? '#000' : T.border}`,
                  padding: '10px 24px', fontSize: 13, borderRadius: 3,
                  cursor: 'pointer', transition: 'all 0.2s ease',
                  background: active ? '#000' : 'transparent',
                  color: active ? '#fff' : T.text,
                }}
              >{pill}</div>
            );
          })}
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
        Download Resume (PDF)
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transition: 'transform 0.3s ease' }}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  </section>
);

export default HeroSection;
