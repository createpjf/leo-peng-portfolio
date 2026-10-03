import React, { useCallback, useEffect, useId, useRef, useState } from 'react';

/* Minimum distance between the tooltip bubble and the viewport edge
   (.pill-tooltip's max-width in index.css uses 2 × GUTTER) */
const GUTTER = 12;

/* :focus-visible throws in browsers that don't support it (Safari < 15.4) */
const isFocusVisible = (el) => {
  try {
    return el.matches(':focus-visible');
  } catch {
    return true;
  }
};

/**
 * Expertise pill with a hover/focus/tap tooltip describing the skill.
 * Rendered as a real <button> so it is keyboard-focusable and the tooltip
 * is exposed to assistive tech via aria-describedby. The tooltip sits beside
 * the button (not inside it) so it isn't folded into the button's name.
 *
 * - Mouse: opens on hover, with a short close delay on leave so the tooltip
 *   stays stable when the pointer crosses the gap between pill and bubble.
 * - Touch: tap toggles; tapping anywhere else closes it.
 * - Keyboard: opens on focus, Escape closes it.
 *
 * The bubble is centred on the pill, then shifted horizontally so it never
 * runs off the edge of the viewport (re-measured on resize / rotation).
 */
const PillWithTooltip = ({ pill }) => {
  const [open, setOpen] = useState(false);
  const [shift, setShift] = useState(0);
  const timer = useRef(null);
  const pointerType = useRef('');
  const wrapRef = useRef(null);
  const buttonRef = useRef(null);
  const tipRef = useRef(null);
  const tooltipId = useId();

  const place = useCallback(() => {
    const button = buttonRef.current;
    const tip = tipRef.current;
    if (!button || !tip) return;
    const rect = button.getBoundingClientRect();
    const width = tip.offsetWidth;
    const viewport = document.documentElement.clientWidth;
    const left = rect.left + rect.width / 2 - width / 2;
    const maxLeft = Math.max(GUTTER, viewport - GUTTER - width);
    setShift(Math.min(Math.max(left, GUTTER), maxLeft) - left);
  }, []);

  const show = () => {
    clearTimeout(timer.current);
    place();
    setOpen(true);
  };
  const hide = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  // While open, close on Escape or on a tap/click outside the pill, and keep
  // the bubble on-screen if the viewport resizes (e.g. device rotation).
  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', place);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', place);
    };
  }, [open, place]);

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <span ref={wrapRef} className={`pill${open ? ' is-open' : ''}`}>
      <button
        ref={buttonRef}
        type="button"
        className="pill-button"
        onPointerDown={(e) => { pointerType.current = e.pointerType; }}
        // Hover only for real mice — touch fires emulated enter events too.
        onPointerEnter={(e) => { if (e.pointerType === 'mouse') show(); }}
        onPointerLeave={(e) => { if (e.pointerType === 'mouse') hide(); }}
        // Keyboard focus opens it; focus from a click or tap does not.
        onFocus={(e) => { if (isFocusVisible(e.currentTarget)) show(); }}
        onBlur={hide}
        // Mouse users already get the tooltip on hover, so clicks only toggle
        // for touch and keyboard (Enter / Space) activation.
        onClick={() => {
          const type = pointerType.current;
          pointerType.current = '';
          if (type === 'mouse') return;
          if (open) {
            clearTimeout(timer.current);
            setOpen(false);
          } else {
            show();
          }
        }}
        aria-describedby={tooltipId}
      >
        <span className="pill-item">{pill.label}</span>
      </button>
      <span
        ref={tipRef}
        id={tooltipId}
        role="tooltip"
        className="pill-tooltip"
        style={{ transform: `translateX(calc(-50% + ${shift}px)) translateY(${open ? '0' : '4px'})` }}
      >
        {pill.desc}
        {/* Arrow keeps pointing at the pill centre when the bubble is shifted */}
        <span className="pill-tooltip-arrow" style={{ left: `calc(50% - ${shift}px)` }} />
      </span>
    </span>
  );
};

export default PillWithTooltip;
