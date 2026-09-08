/**
 * ============================================================
 *  Typography scale — single source of truth for font sizes.
 *  Values are rem so text honours the user's browser font-size
 *  setting (WCAG 1.4.4). At the default 16px root, 0.8125rem = 13px.
 *
 *  Label sizes floor at 11px for legibility; section titles sit at
 *  24px, one step above the 15px item titles.
 *
 *  References --fs-* in src/index.css; edit the scale there only.
 * ============================================================
 */

const fontSize = {
  xs: 'var(--fs-xs)',
  sm: 'var(--fs-sm)',
  base: 'var(--fs-base)',
  md: 'var(--fs-md)',
  lg: 'var(--fs-lg)',
  xl: 'var(--fs-xl)',
  '2xl': 'var(--fs-2xl)',
  '3xl': 'var(--fs-3xl)',
  '4xl': 'var(--fs-4xl)',
  '5xl': 'var(--fs-5xl)',
};

export default fontSize;
