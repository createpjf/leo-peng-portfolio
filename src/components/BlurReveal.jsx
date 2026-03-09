import React from 'react';
import useInView from '../hooks/useInView';

/**
 * BlurReveal — text reveals word-by-word from blurred+transparent to clear.
 * Inspired by React Bits' BlurText, implemented with pure CSS transitions.
 *
 * @param {string}  text         — the text to animate
 * @param {number}  delay        — ms between each word's animation start (default 80)
 * @param {string}  animateBy    — 'words' or 'chars' (default 'words')
 * @param {string}  className    — optional wrapper className
 * @param {Object}  style        — optional wrapper inline styles
 * @param {string}  tag          — wrapper element tag (default 'p')
 * @param {number}  blurAmount   — initial blur in px (default 8)
 * @param {number}  duration     — transition duration in ms (default 600)
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
  const yOffset = direction === 'up' ? 20 : -20;

  return (
    <Tag ref={ref} className={className} style={{ ...style, display: 'flex', flexWrap: 'wrap' }}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            filter: inView ? 'blur(0px)' : `blur(${blurAmount}px)`,
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : `translateY(${yOffset}px)`,
            transition: `filter ${duration}ms cubic-bezier(0.16,1,0.3,1) ${i * delay}ms, opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${i * delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${i * delay}ms`,
            willChange: inView ? 'auto' : 'filter, opacity, transform',
          }}
        >
          {segment}
          {animateBy === 'words' && i < segments.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  );
};

export default BlurReveal;
