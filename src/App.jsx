import React, { useMemo, useState } from 'react';
import T from './data/theme';
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

const App = () => {
  const { content } = useLocale();
  const [activeNav, setActiveNav] = useState('services');
  const [showFull, setShowFull] = useState(false);
  useIntercom(import.meta.env.VITE_INTERCOM_APP_ID || 'm0eitavw');

  // Highlight the nav item for whichever section is in view while scrolling.
  const spySections = useMemo(
    () => content.navItems.map(({ id }) => ({ id, label: id })),
    [content.navItems],
  );
  useScrollSpy(spySections, setActiveNav);

  return (
    <div style={{ fontFamily: T.font, backgroundColor: T.bg, color: T.text, lineHeight: 1.5, overflowX: 'hidden' }}>
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />
      <main>
        <HeroSection />
        <ServicesSection />
        <WritingSection />
        <WorksSection />
        <ExperienceSection showFull={showFull} setShowFull={setShowFull} />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
