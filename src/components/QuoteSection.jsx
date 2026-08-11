import T from '../data/theme';
import F from '../data/typography';
import BlurReveal from './BlurReveal';
import { useLocale } from '../i18n/LocaleContext';

const QuoteSection = () => {
  const { locale, content } = useLocale();
  const { personalInfo } = content;

  return (
  <section className="quote-section" style={{ padding: '80px 40px', textAlign: 'center', borderBottom: `1px solid ${T.border}` }}>
    <BlurReveal
      key={locale}
      text={personalInfo.quote}
      tag="p"
      delay={60}
      blurAmount={10}
      duration={700}
      animateBy="words"
      style={{
        fontSize: 'clamp(1.375rem, 3vw, 2.25rem)', fontWeight: 400, fontStyle: 'italic',
        lineHeight: 1.4, maxWidth: 680, margin: '0 auto 20px', letterSpacing: '-0.02em', color: T.text,
        justifyContent: 'center',
      }}
    />
    <p style={{
      fontSize: F.md, color: T.textLt, fontWeight: 400, marginTop: 16, letterSpacing: '0.02em',
    }}>{personalInfo.quoteAttribution}</p>
  </section>
  );
};

export default QuoteSection;
