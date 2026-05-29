import React, { useId, useRef, useState } from 'react';
import T from '../data/theme';

/**
 * Expertise pill with a hover/focus/tap tooltip describing the skill.
 * Rendered as a real <button> so it is keyboard-focusable and the tooltip
 * is exposed to assistive tech via aria-describedby. A short close delay on
 * leave keeps the tooltip stable when the pointer crosses the small gap
 * between pill and bubble.
 */
const PillWithTooltip = ({ pill }) => {
  const [hover, setHover] = useState(false);
  const timer = useRef(null);
  const tooltipId = useId();
  const open = () => { clearTimeout(timer.current); setHover(true); };
  const close = () => { timer.current = setTimeout(() => setHover(false), 120); };
  return (
    <button
      type="button"
      style={{
        position: 'relative', display: 'inline-block',
        background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer',
      }}
      onMouseEnter={open}
      onMouseLeave={close}
      onFocus={open}
      onBlur={close}
      onClick={() => setHover((h) => !h)}
      aria-describedby={tooltipId}
    >
      <span id={tooltipId} role="tooltip" className="pill-tooltip" style={{
        position: 'absolute', bottom: 'calc(100% + 12px)', left: '50%',
        transform: `translateX(-50%) translateY(${hover ? '0' : '4px'})`,
        background: '#000', color: '#fff',
        fontSize: 12, lineHeight: 1.55, padding: '10px 16px',
        borderRadius: 10, pointerEvents: 'none',
        width: 240, textAlign: 'center',
        opacity: hover ? 1 : 0,
        transition: 'opacity 0.2s ease, transform 0.2s ease',
        letterSpacing: '-0.01em',
        zIndex: 10,
      }}>
        {pill.desc}
        <span style={{
          position: 'absolute', top: '100%', left: '50%',
          transform: 'translateX(-50%)',
          width: 0, height: 0,
          borderLeft: '7px solid transparent',
          borderRight: '7px solid transparent',
          borderTop: '7px solid #000',
        }} />
      </span>
      <span
        className="pill-item"
        style={{
          display: 'block',
          border: `1px solid ${T.border}`,
          padding: '10px 24px', fontSize: 13, borderRadius: 3,
          transition: 'all 0.25s ease',
          background: hover ? '#000' : 'transparent',
          color: hover ? '#fff' : T.text,
          borderColor: hover ? '#000' : T.border,
        }}
      >{pill.label}</span>
    </button>
  );
};

export default PillWithTooltip;
