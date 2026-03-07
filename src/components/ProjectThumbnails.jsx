import React from 'react';

/**
 * 项目缩略图 — 浅色背景 + 深色线条图案
 * Project Thumbnails — Dark-on-light SVG graphics (2:1 ratio)
 */
const ProjectThumbnails = {
  /* RouteBox — API 路由拓扑 */
  api: (
    <svg width="240" height="120" viewBox="0 0 400 200">
      <circle cx="80" cy="100" r="16" fill="rgba(0,0,0,0.08)" />
      <line x1="96" y1="100" x2="180" y2="100" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
      <circle cx="180" cy="100" r="6" fill="rgba(0,0,0,0.1)" />
      <line x1="186" y1="100" x2="260" y2="60" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
      <line x1="186" y1="100" x2="260" y2="100" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
      <line x1="186" y1="100" x2="260" y2="140" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
      <circle cx="280" cy="60" r="12" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
      <circle cx="280" cy="100" r="12" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
      <circle cx="280" cy="140" r="12" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
      <line x1="292" y1="60" x2="330" y2="60" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
      <line x1="292" y1="100" x2="330" y2="100" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <line x1="292" y1="140" x2="330" y2="140" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
    </svg>
  ),

  /* Suber — macOS 窗口 + 日历网格 */
  app: (
    <svg width="240" height="120" viewBox="0 0 400 200">
      <rect x="90" y="30" width="220" height="140" rx="8" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
      <line x1="90" y1="55" x2="310" y2="55" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
      <circle cx="106" cy="43" r="4" fill="#ff5f57" opacity="0.7" />
      <circle cx="120" cy="43" r="4" fill="#febc2e" opacity="0.7" />
      <circle cx="134" cy="43" r="4" fill="#28c840" opacity="0.7" />
      {[0,1,2,3].map(r => [0,1,2,3,4].map(c => (
        <rect key={`${r}-${c}`} x={110 + c * 36} y={68 + r * 24} width="24" height="16" rx="2"
          fill={r === 1 && c === 2 ? 'rgba(0,0,0,0.12)' : 'rgba(0,0,0,0.03)'}
          stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />
      )))}
    </svg>
  ),

  /* OpenClaw FLock Plugin — 双向 API 对接 */
  plugin: (
    <svg width="240" height="120" viewBox="0 0 400 200">
      <rect x="70" y="60" width="90" height="80" rx="8" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
      <rect x="240" y="60" width="90" height="80" rx="8" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
      <rect x="85" y="80" width="60" height="6" rx="2" fill="rgba(0,0,0,0.1)" />
      <rect x="85" y="94" width="45" height="6" rx="2" fill="rgba(0,0,0,0.07)" />
      <rect x="85" y="108" width="52" height="6" rx="2" fill="rgba(0,0,0,0.05)" />
      <rect x="255" y="80" width="60" height="6" rx="2" fill="rgba(0,0,0,0.1)" />
      <rect x="255" y="94" width="45" height="6" rx="2" fill="rgba(0,0,0,0.07)" />
      <rect x="255" y="108" width="52" height="6" rx="2" fill="rgba(0,0,0,0.05)" />
      <line x1="160" y1="95" x2="240" y2="95" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" strokeDasharray="6 4" />
      <polygon points="236,91 244,95 236,99" fill="rgba(0,0,0,0.18)" />
      <line x1="160" y1="105" x2="240" y2="105" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" strokeDasharray="6 4" />
      <polygon points="164,101 156,105 164,109" fill="rgba(0,0,0,0.12)" />
    </svg>
  ),

  /* Cleo — 多 Agent 星形网络 */
  agents: (
    <svg width="240" height="120" viewBox="0 0 400 200">
      <circle cx="200" cy="100" r="10" fill="rgba(0,0,0,0.12)" />
      <circle cx="130" cy="60" r="8" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="1.5" />
      <circle cx="270" cy="60" r="8" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
      <circle cx="130" cy="140" r="8" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
      <circle cx="270" cy="140" r="8" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
      <line x1="192" y1="94" x2="136" y2="64" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
      <line x1="208" y1="94" x2="264" y2="64" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
      <line x1="192" y1="106" x2="136" y2="136" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <line x1="208" y1="106" x2="264" y2="136" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <line x1="130" y1="68" x2="130" y2="132" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
      <line x1="270" y1="68" x2="270" y2="132" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
      <line x1="138" y1="60" x2="262" y2="60" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
      <line x1="138" y1="140" x2="262" y2="140" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
    </svg>
  ),

  /* Brand Film — 宽银幕 + 播放 */
  video: (
    <svg width="240" height="120" viewBox="0 0 400 200">
      <rect x="60" y="50" width="280" height="100" rx="4" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
      <line x1="60" y1="62" x2="340" y2="62" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
      <line x1="60" y1="138" x2="340" y2="138" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
      <polygon points="185,82 185,118 220,100" fill="rgba(0,0,0,0.15)" />
      <circle cx="200" cy="100" r="28" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
    </svg>
  ),

  /* Article — 文章排版布局 */
  article: (
    <svg width="240" height="120" viewBox="0 0 400 200">
      <rect x="100" y="35" width="200" height="130" rx="4" fill="rgba(0,0,0,0.03)" />
      <rect x="120" y="52" width="120" height="8" rx="2" fill="rgba(0,0,0,0.15)" />
      <rect x="120" y="70" width="160" height="5" rx="1" fill="rgba(0,0,0,0.08)" />
      <rect x="120" y="82" width="145" height="5" rx="1" fill="rgba(0,0,0,0.06)" />
      <rect x="120" y="94" width="155" height="5" rx="1" fill="rgba(0,0,0,0.06)" />
      <rect x="120" y="106" width="100" height="5" rx="1" fill="rgba(0,0,0,0.05)" />
      <rect x="115" y="122" width="4" height="28" rx="1" fill="rgba(0,0,0,0.12)" />
      <rect x="128" y="125" width="130" height="4" rx="1" fill="rgba(0,0,0,0.06)" />
      <rect x="128" y="135" width="110" height="4" rx="1" fill="rgba(0,0,0,0.05)" />
      <rect x="128" y="145" width="90" height="4" rx="1" fill="rgba(0,0,0,0.04)" />
    </svg>
  ),
};

export default ProjectThumbnails;
