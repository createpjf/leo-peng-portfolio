import React from 'react';
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
    <footer ref={ref} id="contact" className={`section-pad site-footer reveal${inView ? ' is-visible' : ''}`}>
      <div className="footer-grid">
        <div>
          <div className="footer-name">{personalInfo.name}</div>
          <p className="footer-bio">{personalInfo.footerBio}</p>
        </div>

        <div className="footer-col">
          <span className="footer-eyebrow">{ui.socials}</span>
          {socialLinks.map(item => (
            <a key={item.label} href={item.href}
              className="footer-link"
              target="_blank" rel="noopener noreferrer"
            >{item.label}<span className="sr-only"> {ui.opensInNewTab}</span></a>
          ))}
        </div>

        <div className="footer-col">
          <span className="footer-eyebrow">{ui.sayHello}</span>
          <a href={`mailto:${personalInfo.email}`} className="footer-link">{personalInfo.email}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{copyright}</span>
        <span>{personalInfo.locations}</span>
      </div>
    </footer>
  );
};

export default Footer;
