import React from 'react';
import T from '../data/theme';
import { personalInfo } from '../data/siteContent';

const QuoteSection = () => (
  <section className="quote-section" style={{ padding: '80px 40px', textAlign: 'center', borderBottom: `1px solid ${T.border}` }}>
    <p style={{
      fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 400, fontStyle: 'italic',
      lineHeight: 1.4, maxWidth: 680, margin: '0 auto 20px', letterSpacing: '-0.02em', color: T.text,
    }}>
      {personalInfo.quote}
    </p>
    <p style={{ fontSize: 13, color: T.textSec }}>{personalInfo.quoteAttribution}</p>
  </section>
);

export default QuoteSection;
