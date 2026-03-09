import React from 'react';
import T from '../data/theme';
import { personalInfo } from '../data/siteContent';
import BlurReveal from './BlurReveal';

const QuoteSection = () => (
  <section className="quote-section" style={{ padding: '80px 40px', textAlign: 'center', borderBottom: `1px solid ${T.border}` }}>
    <BlurReveal
      text={personalInfo.quote}
      tag="p"
      delay={60}
      blurAmount={10}
      duration={700}
      animateBy="words"
      style={{
        fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 400, fontStyle: 'italic',
        lineHeight: 1.4, maxWidth: 680, margin: '0 auto 20px', letterSpacing: '-0.02em', color: T.text,
        justifyContent: 'center',
      }}
    />
    {/* attribution removed per request */}
  </section>
);

export default QuoteSection;
