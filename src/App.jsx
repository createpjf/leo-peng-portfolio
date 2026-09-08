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
  const { content, locale } = useLocale();
  const [activeNav, setActiveNav] = useState('services');
  const [showFull, setShowFull] = useState(false);
  const [chatEnabled, setChatEnabled] = useState(false);
  const chatFailed = useIntercom(import.meta.env.VITE_INTERCOM_APP_ID || 'm0eitavw', chatEnabled, locale);

  // Highlight the nav item for whichever section is in view while scrolling.
  const spySections = useMemo(
    () => content.navItems.map(({ id }) => ({ id, label: id })),
    [content.navItems],
  );
  useScrollSpy(spySections, setActiveNav);

  return (
    <div className="editorial-page" style={{ fontFamily: T.font, backgroundColor: T.bg, color: T.text, lineHeight: 1.5 }}>
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorksSection />
        <WritingSection />
        <ExperienceSection showFull={showFull} setShowFull={setShowFull} />
        <QuoteSection />
      </main>
      <Footer />
      {chatFailed ? <a className="chat-launcher" href={`mailto:${content.personalInfo.email}`}>{content.ui.emailMe}</a> : <button className="chat-launcher" onClick={() => {
        setChatEnabled(true);
        if (typeof window.Intercom === 'function') window.Intercom('show');
      }}>{content.ui.chat}</button>}
    </div>
  );
};

export default App;
