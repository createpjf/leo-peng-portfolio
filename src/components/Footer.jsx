import React from 'react';
import T from '../data/theme';
import { personalInfo, socialLinks } from '../data/siteContent';
import useInView from '../hooks/useInView';

const Footer = () => {
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
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: 300 }}>
            {personalInfo.footerBio}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span className="footer-eyebrow">Socials</span>
          {socialLinks.map(item => (
            <a key={item.label} href={item.href}
              className="footer-link"
              target="_blank" rel="noopener noreferrer"
              onClick={e => { if (item.href === '#') e.preventDefault(); }}
              style={{ fontSize: 13 }}
            >{item.label}</a>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span className="footer-eyebrow">Say Hello</span>
          <a href={`mailto:${personalInfo.email}`}
            className="footer-link"
            style={{ fontSize: 13 }}
          >{personalInfo.email}</a>
        </div>
      </div>

      <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
        <span>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
        <span>{personalInfo.locations}</span>
      </div>
    </footer>
  );
};

export default Footer;
