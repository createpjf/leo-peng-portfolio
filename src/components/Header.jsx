import React from 'react';
import T from '../data/theme';
import { navItems, personalInfo } from '../data/siteContent';

const Header = ({ activeNav, setActiveNav }) => (
  <header className="site-header" style={{
    height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 40px', position: 'sticky', top: 0,
    background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
    zIndex: 100, borderBottom: `1px solid ${T.border}`,
  }}>
    <div style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-0.01em' }}>{personalInfo.name}</div>
    <nav className="site-nav" style={{ display: 'flex', gap: 24, fontSize: 13 }}>
      {navItems.map(item => (
        <a key={item} href={`#${item.toLowerCase()}`}
          className="nav-link"
          onClick={e => { e.preventDefault(); setActiveNav(item); }}
          style={{
            color: activeNav === item ? T.text : T.textSec,
            fontWeight: activeNav === item ? 500 : 400,
          }}
        >{item}</a>
      ))}
    </nav>
  </header>
);

export default Header;
