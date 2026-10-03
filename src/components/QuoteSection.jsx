import BlurReveal from './BlurReveal';
import { useLocale } from '../i18n/LocaleContext';

const QuoteSection = () => {
  const { locale, content } = useLocale();
  const { personalInfo } = content;

  return (
  <section className="quote-section">
    <BlurReveal
      key={locale}
      text={personalInfo.quote}
      tag="p"
      delay={60}
      blurAmount={10}
      duration={700}
      animateBy="words"
      className="quote-text"
    />
    <p className="quote-attribution">{personalInfo.quoteAttribution}</p>
  </section>
  );
};

export default QuoteSection;
