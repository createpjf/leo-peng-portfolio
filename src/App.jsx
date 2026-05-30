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
import { navItems } from './data/siteContent';

const App = () => {
  const [activeNav, setActiveNav] = useState('Services');
  const [showFull, setShowFull] = useState(false);
  useIntercom(import.meta.env.VITE_INTERCOM_APP_ID || 'm0eitavw');

  // Highlight the nav item for whichever section is in view while scrolling.
  const spySections = useMemo(
    () => navItems.map((label) => ({ id: label.toLowerCase(), label })),
    [],
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
