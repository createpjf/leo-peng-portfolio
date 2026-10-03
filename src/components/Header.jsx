import React, { useState, useEffect, useRef } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import LanguageSwitch from './LanguageSwitch';
import scrollToSection, { setSectionHash } from '../utils/scrollToSection';
import focusTarget from '../utils/focusTarget';

const Header = ({ activeNav, onNavigate }) => {
  const { content } = useLocale();
  const { navItems, personalInfo, ui } = content;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const overlayRef = useRef(null);
  // Section to focus once the mobile menu has closed (and the page is no
  // longer inert); otherwise focus returns to the menu toggle.
  const pendingFocusRef = useRef(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close on Escape; move focus into the menu on open and back to the
  // toggle on close so keyboard users aren't stranded. The page behind the
  // menu is made inert so Tab can't wander into hidden content.
  useEffect(() => {
    if (!menuOpen) return;
    const toggleButton = menuButtonRef.current;
    const background = document.querySelectorAll('.skip-link, main, footer');
    background.forEach((el) => el.setAttribute('inert', ''));
    const onKeyDown = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKeyDown);
    const firstLink = overlayRef.current?.querySelector('a');
    firstLink?.focus();
    return () => {
      background.forEach((el) => el.removeAttribute('inert'));
      document.removeEventListener('keydown', onKeyDown);
      const target = pendingFocusRef.current;
      pendingFocusRef.current = null;
      if (target) focusTarget(target);
      else toggleButton?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  // Scroll to the section and move focus there, so keyboard and screen-reader
  // users continue from the section rather than from the nav link.
  const handleNav = (e, item) => {
    e.preventDefault();
    onNavigate(item.id);
    const el = document.getElementById(item.id);
    if (el) {
      scrollToSection(el);
      setSectionHash(item.id);
      if (menuOpen) pendingFocusRef.current = el;
      else focusTarget(el);
    }
    setMenuOpen(false);
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
              className="nav-link"
              onClick={e => handleNav(e, item)}
              aria-current={activeNav === item.id ? 'location' : undefined}
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
            aria-current={activeNav === item.id ? 'location' : undefined}
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
