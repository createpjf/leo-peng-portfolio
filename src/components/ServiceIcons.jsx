import React from 'react';
import T from '../data/theme';

/**
 * 服务图标组件 — 根据 iconType 返回对应 SVG
 * Service Icons — Returns SVG based on iconType
 */
const ServiceIcons = {
  video: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={T.text} strokeWidth="1.5">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  ),
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={T.text} strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  marketing: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={T.text} strokeWidth="1.5">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  commerce: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={T.text} strokeWidth="1.5">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
};

export default ServiceIcons;
