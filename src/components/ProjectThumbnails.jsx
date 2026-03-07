import React from 'react';

/**
 * 项目缩略图 — 根据 type 返回对应 SVG 图形
 * Project Thumbnails — Returns SVG based on type
 */
const ProjectThumbnails = {
  video: (
    <svg width="180" height="180" viewBox="0 0 200 200">
      <rect x="30" y="50" width="140" height="100" rx="6" fill="#333" />
      <polygon points="85,75 85,125 130,100" fill="#f0f0f0" />
    </svg>
  ),
  agents: (
    <svg width="180" height="180" viewBox="0 0 200 200">
      <circle cx="100" cy="90" r="40" fill="none" stroke="#333" strokeWidth="2" />
      <circle cx="80" cy="110" r="40" fill="none" stroke="#666" strokeWidth="2" />
      <circle cx="120" cy="110" r="40" fill="none" stroke="#999" strokeWidth="2" />
    </svg>
  ),
  article: (
    <svg width="180" height="180" viewBox="0 0 200 200">
      <rect x="50" y="30" width="100" height="140" rx="4" fill="#333" />
      <line x1="65" y1="60" x2="135" y2="60" stroke="#f0f0f0" strokeWidth="2" />
      <line x1="65" y1="80" x2="125" y2="80" stroke="#f0f0f0" strokeWidth="2" opacity="0.6" />
      <line x1="65" y1="100" x2="130" y2="100" stroke="#f0f0f0" strokeWidth="2" opacity="0.6" />
      <line x1="65" y1="120" x2="110" y2="120" stroke="#f0f0f0" strokeWidth="2" opacity="0.4" />
    </svg>
  ),
};

export default ProjectThumbnails;
