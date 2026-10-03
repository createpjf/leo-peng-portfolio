import React from 'react';
import useInView from '../hooks/useInView';

/**
 * BlurReveal — text reveals word-by-word from blurred+transparent to clear.
 * Inspired by React Bits' BlurText, implemented with pure CSS transitions
 * (.blur-word in index.css; the blur is skipped on small screens there).
 *
 * @param {string}  text         — the text to animate
 * @param {number}  delay        — ms between each word's animation start (default 100)
 * @param {string}  animateBy    — 'words' or 'chars' (default 'words')
 * @param {string}  className    — optional wrapper className
 * @param {Object}  style        — optional wrapper inline styles
 * @param {string}  tag          — wrapper element tag (default 'p')
 * @param {number}  blurAmount   — initial blur in px (default 8)
 * @param {number}  duration     — transition duration in ms (default 1000)
 * @param {string}  direction    — 'up' or 'down' (default 'up')
 */
const BlurReveal = ({
  text = '',
  delay = 100,
  animateBy = 'words',
  className = '',
  style = {},
  tag: Tag = 'p',
  blurAmount = 8,
  duration = 1000,
  direction = 'up',
}) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const segments = animateBy === 'chars' ? text.split('') : text.split(' ');

  // Segments are flex items (block-level), which some screen readers read one
  // per line — expose the whole text once and hide the animated segments.
  return (
    <Tag
      ref={ref}
      className={`blur-words ${className}${inView ? ' is-visible' : ''}`}
      style={{
        ...style,
        '--word-duration': `${duration}ms`,
        '--word-blur': `${blurAmount}px`,
        '--word-offset': direction === 'up' ? '20px' : '-20px',
      }}
    >
      <span className="sr-only">{text}</span>
      {segments.map((segment, i) => (
        <span key={i} aria-hidden="true" className="blur-word" style={{ '--word-delay': `${i * delay}ms` }}>
          {segment}
          {animateBy === 'words' && i < segments.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
};

export default BlurReveal;
