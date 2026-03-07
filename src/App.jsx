import React, { useState } from 'react';
import T from './data/theme';
import { defaultSelectedPills } from './data/siteContent';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import WorksSection from './components/WorksSection';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';

const App = () => {
  const [activeNav, setActiveNav] = useState('Services');
  const [selectedPills, setSelectedPills] = useState(defaultSelectedPills);
  const [showFull, setShowFull] = useState(false);

  const togglePill = (pill) => {
    setSelectedPills(prev =>
      prev.includes(pill) ? prev.filter(p => p !== pill) : [...prev, pill]
    );
  };

  return (
    <div style={{ fontFamily: T.font, backgroundColor: T.bg, color: T.text, lineHeight: 1.5, overflowX: 'hidden' }}>
      <GlobalStyles />
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />
      <main>
        <HeroSection selectedPills={selectedPills} togglePill={togglePill} />
        <ServicesSection />
        <ExperienceSection showFull={showFull} setShowFull={setShowFull} />
        <WorksSection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
