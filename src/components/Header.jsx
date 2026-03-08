import React, { useState, useEffect } from 'react';
import T from '../data/theme';
import { navItems, personalInfo } from '../data/siteContent';

const Header = ({ activeNav, setActiveNav }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (e, item) => {
    e.preventDefault();
    setActiveNav(item);
    setMenuOpen(false);
    const el = document.getElementById(item.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className="site-header" style={{
        height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', position: 'sticky', top: 0,
        background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
        zIndex: 100, borderBottom: `1px solid ${T.border}`,
      }}>
        <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>{personalInfo.name}</div>

        {/* Desktop nav */}
        <nav className="site-nav desktop-nav" style={{ display: 'flex', gap: 24, fontSize: 13 }}>
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="nav-link"
              onClick={e => handleNav(e, item)}
              style={{
                color: activeNav === item ? T.text : T.textSec,
                fontWeight: activeNav === item ? 500 : 400,
              }}
            >{item}</a>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            padding: 8, marginRight: -8, position: 'relative', zIndex: 200,
          }}
        >
          <div style={{
            width: 20, height: 14, position: 'relative',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <span style={{
              display: 'block', height: 1.5, background: T.text, borderRadius: 1,
              transition: 'all 0.3s ease', transformOrigin: 'center',
              transform: menuOpen ? 'translateY(6.25px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', height: 1.5, background: T.text, borderRadius: 1,
              transition: 'all 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', height: 1.5, background: T.text, borderRadius: 1,
              transition: 'all 0.3s ease', transformOrigin: 'center',
              transform: menuOpen ? 'translateY(-6.25px) rotate(-45deg)' : 'none',
            }} />
          </div>
        </button>
      </header>

      {/* Mobile fullscreen overlay menu */}
      <div className="mobile-menu-overlay" style={{
        position: 'fixed', inset: 0, zIndex: 99,
        background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 0, opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none',
        transition: 'opacity 0.3s ease',
      }}>
        {navItems.map((item, i) => (
          <a key={item} href={`#${item.toLowerCase()}`}
            onClick={e => handleNav(e, item)}
            style={{
              fontSize: 28, fontWeight: 400, letterSpacing: '-0.02em',
              color: activeNav === item ? T.text : T.textSec,
              padding: '14px 0',
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: menuOpen ? 1 : 0,
              transition: `all 0.3s ease ${i * 0.05}s`,
            }}
          >{item}</a>
        ))}
      </div>
    </>
  );
};

export default Header;
