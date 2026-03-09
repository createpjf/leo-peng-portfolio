import React from 'react';
import T from '../data/theme';
import { personalInfo, socialLinks } from '../data/siteContent';
import useInView from '../hooks/useInView';

const Footer = () => {
  const linkHover = (e, enter) => {
    e.currentTarget.style.color = enter ? '#fff' : 'rgba(255,255,255,0.7)';
  };
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <footer ref={ref} id="contact" className="section-pad" style={{
      background: T.bgDark, color: 'rgba(255,255,255,0.7)', padding: '80px 40px 40px',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
    }}>
      <div className="footer-grid" style={{
        paddingBottom: 48, borderBottom: `1px solid ${T.borderDk}`, marginBottom: 24,
      }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 16 }}>{personalInfo.name}</div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, maxWidth: 300 }}>
            {personalInfo.footerBio}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', marginBottom: 4 }}>Socials</span>
          {socialLinks.map(item => (
            <a key={item.label} href={item.href}
              onClick={e => { if (item.href === '#') e.preventDefault(); }}
              onMouseEnter={e => linkHover(e, true)}
              onMouseLeave={e => linkHover(e, false)}
              style={{ fontSize: 13, transition: 'color 0.2s' }}
            >{item.label}</a>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', marginBottom: 4 }}>Say Hello</span>
          <a href={`mailto:${personalInfo.email}`}
            onMouseEnter={e => linkHover(e, true)}
            onMouseLeave={e => linkHover(e, false)}
            style={{ fontSize: 13, transition: 'color 0.2s' }}
          >{personalInfo.email}</a>
        </div>
      </div>

      <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
        <span>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
        <span>{personalInfo.locations}</span>
      </div>
    </footer>
  );
};

export default Footer;
