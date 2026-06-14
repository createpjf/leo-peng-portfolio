/**
 * ============================================================
 *  Typography scale — single source of truth for font sizes.
 *  Values are rem so text honours the user's browser font-size
 *  setting (WCAG 1.4.4). At the default 16px root, 0.8125rem = 13px.
 *
 *  Label sizes floor at 11px for legibility; section titles sit at
 *  24px, one step above the 15px item titles.
 *
 *  Mirrors the --fs-* custom properties in src/index.css; edit both
 *  when changing the scale.
 * ============================================================
 */

const fontSize = {
  xs: '0.6875rem', // 11px — smallest label (eyebrows, tags)
  sm: '0.75rem', // 12px — secondary meta
  base: '0.8125rem', // 13px — body / UI default
  md: '0.875rem', // 14px — emphasised body / card meta
  lg: '0.9375rem', // 15px — item titles, lead body
  xl: '1rem', // 16px — resume link
  '2xl': '1.125rem', // 18px — footer brand
  '3xl': '1.5rem', // 24px — section titles
  '4xl': '2rem', // 32px — service numerals
  '5xl': '2.625rem', // 42px — hero name
};

export default fontSize;
