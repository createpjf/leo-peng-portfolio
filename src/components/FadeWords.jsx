import React from 'react';
import useInView from '../hooks/useInView';

/**
 * FadeWords — section titles reveal word-by-word with fade + slide up.
 * Inspired by React Bits' ScrollReveal / SplitText, zero dependencies.
 *
 * @param {string}  text      — the text to animate
 * @param {number}  delay     — ms between each word (default 60)
 * @param {string}  className — optional className for the wrapper
 * @param {Object}  style     — optional inline styles for the wrapper
 * @param {string}  tag       — wrapper element tag (default 'h2')
 * @param {number}  duration  — transition duration in ms (default 500)
 */
const FadeWords = ({
  text = '',
  delay = 80,
  className = '',
  style = {},
  tag: Tag = 'h2',
  duration = 800,
}) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const words = text.split(' ');

  return (
    <Tag ref={ref} className={className} style={{ ...style, display: 'flex', flexWrap: 'wrap' }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${i * delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${i * delay}ms`,
            willChange: inView ? 'auto' : 'opacity, transform',
          }}
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  );
};

export default FadeWords;
