/**
 * ============================================================
 *  设计主题 — 修改颜色和字体
 *  Design Theme — Edit colors and fonts here
 * ============================================================
 */

const theme = {
  bg:       '#ffffff',
  bgSec:    '#f0f0f0',
  bgDark:   '#0a0a0a',
  text:     '#111111',
  textSec:  '#666666',
  textLt:   '#707070',
  accent:   '#000000',
  border:   '#e5e5e5',
  borderDk: '#222222',
  // Latin faces first so English keeps its look; Chinese glyphs then fall
  // through to a Simplified Chinese face per platform (macOS / iOS, older
  // macOS, Windows, Android / Linux) instead of whatever the browser picks.
  font:     "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, "
          + "'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans SC', 'Noto Sans CJK SC', 'Source Han Sans SC', sans-serif",
};

export default theme;
