import React, { useCallback, useMemo, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import WorksSection from './components/WorksSection';
import WritingSection from './components/WritingSection';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';
import useIntercom from './hooks/useIntercom';
import useScrollSpy from './hooks/useScrollSpy';
import { useLocale } from './i18n/LocaleContext';
import focusTarget from './utils/focusTarget';

const App = () => {
  const { content } = useLocale();
  // null while the hero is in view so no nav item is highlighted.
  const [activeNav, setActiveNav] = useState(null);
  useIntercom(import.meta.env.VITE_INTERCOM_APP_ID || 'm0eitavw');

  // Highlight the nav item for whichever section is in view while scrolling.
  // The hero ('intro') maps to null so scrolling back to the top clears it.
  const spySections = useMemo(
    () => [{ id: 'intro', label: null }, ...content.navItems.map(({ id }) => ({ id, label: id }))],
    [content.navItems],
  );
  const holdActive = useScrollSpy(spySections, setActiveNav);

  // A nav click highlights its target right away and keeps it while the page
  // scrolls there.
  const navigateTo = useCallback((id) => {
    setActiveNav(id);
    holdActive();
  }, [holdActive]);

  return (
    <div className="app">
      <a
        href="#main"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          const main = document.getElementById('main');
          main?.scrollIntoView({ block: 'start' });
          focusTarget(main);
        }}
      >{content.ui.skipToContent}</a>
      <Header activeNav={activeNav} onNavigate={navigateTo} />
      <main id="main">
        <HeroSection onNavigate={navigateTo} />
        <ServicesSection />
        <WorksSection />
        <WritingSection />
        <ExperienceSection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
