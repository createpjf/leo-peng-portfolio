/**
 * ============================================================
 *  网站内容配置 — 修改这个文件即可更新网站上的所有文字内容
 *  Site Content Config — Edit this file to update all text
 * ============================================================
 */

/* ─── 个人信息 / Personal Info ─── */
export const personalInfo = {
  name: 'Leo Peng',
  title: 'Creative Technologist',
  tagline: 'I turn ideas into products. Storytelling meets engineering, across cultures and platforms.',
  heroHeadline: ['Stories. Code.', 'Things that ', 'move', 'people.'],  // 第二行的斜体词用第3个元素
  heroSubtags: 'Video · Code · Marketing',
  quote: '"The best work happens when you stop separating the art from the system."',
  quoteAttribution: '— Leo Peng',
  currentStatus: 'Open to new projects.',
  email: 'leo@flock.io',
  locations: 'Shanghai · Hong Kong · Remote',
  footerBio: 'Storytelling meets engineering. Shanghai, working globally.',
};

/* ─── 专业领域标签 / Expertise Pills ─── */
export const expertisePills = [
  { label: 'Film', desc: 'Cinematic storytelling with 4A precision—from lens to high-end VFX.' },
  { label: 'Code', desc: 'Building enterprise-grade tools and developer experiences through "Vibe Coding."' },
  { label: 'Growth', desc: 'Scaling AI ecosystems and developer communities through strategic, accelerator-led growth.' },
];

/* ─── 默认选中的标签 / Default Selected Pills ─── */
export const defaultSelectedPills = ['Film', 'Code', 'Growth'];

/* ─── 导航项 / Navigation Items ─── */
export const navItems = ['Services', 'Writing', 'Work', 'Experience', 'Contact'];

/* ─── 服务列表 / Services ─── */
export const services = [
  {
    num: '01',
    title: 'Film & Motion',
    desc: 'From concept to final cut. Brand films, product stories, social content.',
    tags: ['Directing', 'Editing', 'Motion'],
    iconType: 'video',
  },
  {
    num: '02',
    title: 'Code & AI',
    desc: 'Full-stack prototyping, multi-agent systems, and tools that think with you.',
    tags: ['React', 'Python', 'AI Agents'],
    iconType: 'code',
  },
  {
    num: '03',
    title: 'Growth & Strategy',
    desc: 'Content strategy, community building, and bilingual campaigns that land.',
    tags: ['Content', 'Community', 'Bilingual'],
    iconType: 'marketing',
  },
];

/* ─── 工作经历 / Experience ─── */
export const experienceData = [
  { id: 1, date: '2023 — Present', role: 'Head of Operations & Creative', company: 'FLock.io — Decentralized AI', type: 'Full-time' },
  { id: 2, date: '2023', role: 'Game Product Operation', company: 'NetEase', type: 'Internship' },
  { id: 3, date: '2021 — 2023', role: 'Community Manager', company: 'BuidlerDAO & SpringX Accelerator', type: 'Full-time' },
  { id: 4, date: '2019 — 2021', role: 'Advertising Strategist', company: 'Ogilvy', type: 'Agency' },
];

/* ─── 更多经历（点击展开） / Extra Experience ─── */
export const extraExperience = [
  { id: 5, date: '2017 — 2019', role: 'Documentary Producer', company: 'Independent — Film & Media', type: 'Freelance' },
  { id: 6, date: '2013 — 2015', role: 'Freelance Videographer', company: 'Self-employed', type: 'Freelance' },
];

/* ─── 精选项目 / Selected Projects ─── */
export const projects = [
  {
    title: 'RouteBox',
    category: 'Code · AI · API',
    year: '2026',
    href: 'https://api.routebox.dev/',
    thumbnailType: 'api',
  },
  {
    title: 'Suber',
    category: 'Code · macOS · App',
    year: '2026',
    href: 'https://github.com/createpjf/suber-macos',
    thumbnailType: 'app',
  },
  {
    title: 'OpenClaw FLock Plugin',
    category: 'Code · AI · Plugin',
    year: '2026',
    href: 'https://github.com/createpjf/openclaw-flock-api-platform',
    thumbnailType: 'plugin',
  },
  {
    title: 'Cleo Agent System',
    category: 'Code · AI · Multi-Agent',
    year: '2026',
    href: 'https://github.com/createpjf/cleo-dev',
    thumbnailType: 'agents',
  },
  {
    title: 'Brand Film',
    category: 'Video · Brand',
    year: '2024',
    href: 'https://www.youtube.com/watch?v=ntZSYRKRlbg',
    thumbnailType: 'video',
  },
  {
    title: 'Building Agent Worlds from Communication Theory',
    category: 'Writing · Research',
    year: '2025',
    href: 'https://mp.weixin.qq.com/s/D6x7-5p8Inb_acqhCSp4CA?scene=1',
    thumbnailType: 'article',
  },
];

/* ─── 文章列表 / Writing ─── */
export const writings = [
  {
    title: '开源 AI 的加密经济学',
    date: '2026-02-16',
    href: 'https://x.com/createpjf/status/2023264735240630697',
    source: 'X',
  },
  {
    title: 'Agent 高速时代，模型是它的收费站',
    date: '2026-02-14',
    href: 'https://x.com/createpjf/status/2022588570356322421',
    source: 'X',
  },
  {
    title: '奇点不是一个点，是三层天花板',
    date: '2026-02-08',
    href: 'https://x.com/createpjf/status/2020470911623708861',
    source: 'X',
  },
  {
    title: 'Building Agent Worlds from Communication Theory',
    date: '2025-03',
    href: 'https://mp.weixin.qq.com/s/D6x7-5p8Inb_acqhCSp4CA?scene=1',
    source: 'WeChat',
  },
];

/* ─── 社交链接 / Social Links ─── */
export const socialLinks = [
  { label: 'Twitter / X', href: 'https://x.com/createpjf' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/leopeng2023/' },
  { label: 'GitHub', href: 'https://github.com/createpjf' },
];
