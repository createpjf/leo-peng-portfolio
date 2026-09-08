import React, { useState, useEffect, useRef } from 'react';
import T from '../data/theme';
import { useLocale } from '../i18n/LocaleContext';
import LanguageSwitch from './LanguageSwitch';

const Header = ({ activeNav, setActiveNav }) => {
  const { content } = useLocale();
  const { navItems, personalInfo, ui } = content;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const overlayRef = useRef(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close on Escape; move focus into the menu on open and back to the
  // toggle on close so keyboard users aren't stranded.
  useEffect(() => {
    if (!menuOpen) return;
    const toggleButton = menuButtonRef.current;
    const background = [...document.querySelectorAll('main, footer, .chat-launcher')];
    background.forEach(el => { el.inert = true; });
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
      if (e.key !== 'Tab') return;
      const targets = [toggleButton, ...overlayRef.current.querySelectorAll('button, a')];
      const current = targets.indexOf(document.activeElement);
      e.preventDefault();
      targets[(current + (e.shiftKey ? -1 : 1) + targets.length) % targets.length]?.focus({ preventScroll: true });
    };
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    document.addEventListener('keydown', onKeyDown);
    const firstLink = overlayRef.current?.querySelector('a');
    firstLink?.focus({ preventScroll: true });
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
      background.forEach(el => { el.inert = false; });
      toggleButton?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  const handleNav = (e, item) => {
    e.preventDefault();
    setActiveNav(item.id);
    setMenuOpen(false);
    const el = document.getElementById(item.id);
    if (el) {
      window.history.pushState(null, '', `#${item.id}`);
      el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header className="site-header">
        <div className="site-brand">{personalInfo.name}</div>

        {/* Desktop nav */}
        <div className="header-actions">
        <nav className="site-nav desktop-nav" role="navigation" aria-label={ui.mainNavigation}>
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`}
              className={item.id === 'contact' ? 'nav-link nav-contact' : 'nav-link'}
              onClick={e => handleNav(e, item)}
              aria-current={activeNav === item.id ? 'true' : undefined}
              style={{
                color: activeNav === item.id ? T.text : T.textSec,
                fontWeight: activeNav === item.id ? 500 : 400,
              }}
            >{item.label}</a>
          ))}
        </nav>
        <LanguageSwitch className="desktop-language-switch" />
        </div>

        {/* Mobile hamburger button */}
        <button
          ref={menuButtonRef}
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={ui.toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <div className="hamburger-icon">
            <span className="hamburger-bar" style={{
              transformOrigin: 'center',
              transform: menuOpen ? 'translateY(6.25px) rotate(45deg)' : 'none',
            }} />
            <span className="hamburger-bar" style={{
              opacity: menuOpen ? 0 : 1,
            }} />
            <span className="hamburger-bar" style={{
              transformOrigin: 'center',
              transform: menuOpen ? 'translateY(-6.25px) rotate(-45deg)' : 'none',
            }} />
          </div>
        </button>
      </header>

      {/* Mobile fullscreen overlay menu */}
      <div
        ref={overlayRef}
        id="mobile-menu"
        className="mobile-menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label={ui.siteNavigation}
        aria-hidden={!menuOpen}
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}>
        <LanguageSwitch className="mobile-language-switch" tabIndex={menuOpen ? 0 : -1} />
        {navItems.map((item, i) => (
          <a key={item.id} href={`#${item.id}`}
            className="mobile-menu-link"
            onClick={e => handleNav(e, item)}
            tabIndex={menuOpen ? 0 : -1}
            aria-current={activeNav === item.id ? 'true' : undefined}
            style={{
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: menuOpen ? 1 : 0,
              transition: `all 0.3s ease ${i * 0.05}s`,
            }}
          >{item.label}</a>
        ))}
      </div>
    </>
  );
};

export default Header;
