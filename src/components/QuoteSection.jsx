import { useRef, useState, useEffect } from 'react';
import T from '../data/theme';
import { personalInfo } from '../data/siteContent';

const QuoteSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = personalInfo.quote.split(' ');

  return (
    <section
      ref={ref}
      className="quote-section"
      style={{ padding: '80px 40px', textAlign: 'center', borderBottom: `1px solid ${T.border}` }}
    >
      <p style={{
        fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 400, fontStyle: 'italic',
        lineHeight: 1.4, maxWidth: 680, margin: '0 auto', letterSpacing: '-0.02em', color: T.text,
      }}>
        {words.map((word, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              filter: visible ? 'blur(0px)' : 'blur(10px)',
              opacity: visible ? 1 : 0,
              transition: `filter 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.04}s, opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.04}s`,
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </p>
    </section>
  );
};

export default QuoteSection;
