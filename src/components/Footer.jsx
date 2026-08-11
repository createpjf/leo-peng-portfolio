import React from 'react';
import T from '../data/theme';
import F from '../data/typography';
import useInView from '../hooks/useInView';
import { useLocale } from '../i18n/LocaleContext';

const Footer = () => {
  const { content } = useLocale();
  const { personalInfo, socialLinks, ui } = content;
  const { ref, inView } = useInView({ threshold: 0.1 });
  const copyright = ui.copyright
    .replace('{year}', new Date().getFullYear())
    .replace('{name}', personalInfo.name);

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
          <div style={{ fontSize: F['2xl'], fontWeight: 500, color: '#fff', marginBottom: 16 }}>{personalInfo.name}</div>
          <p style={{ fontSize: F.base, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: 300 }}>
            {personalInfo.footerBio}
          </p>
        </div>

        <div className="footer-col">
          <span className="footer-eyebrow">{ui.socials}</span>
          {socialLinks.map(item => (
            <a key={item.label} href={item.href}
              className="footer-link"
              target="_blank" rel="noopener noreferrer"
              onClick={e => { if (item.href === '#') e.preventDefault(); }}
              style={{ fontSize: F.base }}
            >{item.label}</a>
          ))}
        </div>

        <div className="footer-col">
          <span className="footer-eyebrow">{ui.sayHello}</span>
          <a href={`mailto:${personalInfo.email}`}
            className="footer-link"
            style={{ fontSize: F.base }}
          >{personalInfo.email}</a>
        </div>
      </div>

      <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', fontSize: F.sm, color: 'rgba(255,255,255,0.5)' }}>
        <span>{copyright}</span>
        <span>{personalInfo.locations}</span>
      </div>
    </footer>
  );
};

export default Footer;
