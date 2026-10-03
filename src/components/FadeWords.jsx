import React from 'react';
import useInView from '../hooks/useInView';

/**
 * FadeWords — section titles reveal word-by-word with fade + slide up.
 * Inspired by React Bits' ScrollReveal / SplitText, zero dependencies.
 * The animation itself lives in index.css (.fade-word); this component only
 * sets the per-word timing and toggles .is-visible.
 *
 * @param {string}  text      — the text to animate
 * @param {number}  delay     — ms between each word (default 80)
 * @param {string}  className — optional className for the wrapper
 * @param {Object}  style     — optional inline styles for the wrapper
 * @param {string}  tag       — wrapper element tag (default 'h2')
 * @param {number}  duration  — transition duration in ms (default 800)
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

  // Each word is a flex item (block-level), which some screen readers read
  // one per line — expose the whole text once and hide the animated words.
  return (
    <Tag
      ref={ref}
      className={`fade-words ${className}${inView ? ' is-visible' : ''}`}
      style={{ ...style, '--word-duration': `${duration}ms` }}
    >
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <span key={i} aria-hidden="true" className="fade-word" style={{ '--word-delay': `${i * delay}ms` }}>
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
};

export default FadeWords;
