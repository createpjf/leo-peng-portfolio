/**
 * ============================================================
 *  网站内容配置 — 修改这个文件即可更新网站上的所有文字内容
 *  Site Content Config — Edit this file to update all text
 * ============================================================
 */

/* ─── 个人信息 / Personal Info ─── */
export const personalInfo = {
  name: 'Leo Peng',
  title: 'Forward Deployed Engineer · Creative Technologist',
  tagline: 'I turn ideas into products. Storytelling meets engineering, across cultures and platforms.',
  heroSubtitle: 'UCI Film & Media · Ogilvy & NetEase Alumni · FDE at FLock.io',
  heroBio: [
    'Directing the full creative lifecycle\u2014from film production to new media. Built across Ogilvy, NetEase, and E-CH\u00c9RIE. Delivering cross-disciplinary brand communication rooted in high-end minimalism.',
    'Working as a Forward Deployed Engineer (FDE) at FLock.io, translating complex industry needs into production-ready AI systems. I take projects from discovery and solution design through prototyping, integration, and delivery\u2014across retail, health, creative production, developer tooling, and privacy-preserving AI.',
  ],
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
  { label: 'FDE', desc: 'Embedded product discovery, solution architecture, integration, and production delivery.' },
  { label: 'AI Systems', desc: 'Agent workflows, model routing, full-stack prototyping, and local-first tooling.' },
  { label: 'Industry Delivery', desc: 'Tailored products for retail, health, creative production, and enterprise operations.' },
];

/* ─── Hero 核心背景 / Credentials Line ─── */
export const credentialsLine = 'UCI Film & Media · Ogilvy & NetEase Alumni · FDE at FLock.io';

/* ─── 默认选中的标签 / Default Selected Pills ─── */
export const defaultSelectedPills = ['FDE', 'AI Systems', 'Industry Delivery'];

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
    title: 'FDE & AI Systems',
    desc: 'Turning complex industry needs into production-ready AI products—from discovery and architecture to integration and delivery.',
    tags: ['AI Agents', 'Solution Architecture', 'Full-Stack'],
    iconType: 'code',
  },
  {
    num: '03',
    title: 'Growth & Strategy',
    desc: 'Content strategy, community building, and bilingual campaigns that land.',
    tags: ['Content', 'Community', 'Bilingual'],
    iconType: 'marketing',
  },
  {
    num: '04',
    title: 'E-Commerce',
    desc: 'Platform strategy, product page optimization, cross-border commerce, and conversion-focused UX.',
    tags: ['Shopify', 'DTC', 'Cross-border'],
    iconType: 'commerce',
  },
];

/* ─── 工作经历 / Experience ─── */
export const experienceData = [
  { id: 1, date: '2023 — Present', role: 'Forward Deployed Engineer (FDE)', company: 'FLock.io — Privacy-Preserving AI', type: 'Full-time', logo: '/logo-flock.png' },
  { id: 2, date: '2023', role: 'Game Product Operation', company: 'NetEase', type: 'Internship', logo: '/logo-netease.png' },
  { id: 3, date: '2022 — 2024', role: 'Community Manager', company: 'BuidlerDAO & SpringX Accelerator', type: 'Full-time', logo: '/logo-buidlerdao.png' },
  { id: 4, date: '2021 — 2022', role: 'Advertising Strategist', company: 'Ogilvy', type: 'Agency', logo: '/logo-ogilvy.svg' },
];

/* ─── 更多经历（点击展开） / Extra Experience ─── */
export const extraExperience = [
  { id: 5, date: '2017 — 2019', role: 'Documentary Producer', company: 'Independent — Film & Media', type: 'Freelance' },
];

/* ─── 精选项目 / Selected Projects ─── */
export const projects = [
  {
    title: '电商零售营销 AIGC Agent',
    category: 'Botanic Canvas · Code · AI',
    year: '2026',
    href: 'https://botanic-canvas.vercel.app/',
    heroImg: '/botanic-agent-hero.webp',
  },
  {
    title: '个人健康管理 Agent',
    category: 'Six Health OS · Health · AI',
    year: '2026',
    heroImg: '/six-health-agent-hero.webp',
  },
  {
    title: 'Goleta Coding Agent',
    category: 'Code · AI · Local-first',
    year: '2026',
    heroImg: '/goleta-agent-hero.webp',
  },
  {
    title: '零售行业三端系统',
    category: 'Retail · ERP · Mini Program',
    year: '2026',
    heroImg: '/retail-system-hero.webp',
  },
  {
    title: 'RouteBox',
    category: 'Code · AI · API',
    year: '2026',
    href: 'https://api.routebox.dev/',
    heroImg: '/routebox-hero.webp',
  },
  {
    title: 'Suber',
    category: 'Code · macOS · App',
    year: '2026',
    href: 'https://github.com/createpjf/suber-macos',
    heroImg: '/suber-hero.webp',
  },
  {
    title: 'OpenClaw FLock Plugin',
    category: 'Code · AI · Plugin',
    year: '2026',
    href: 'https://github.com/createpjf/openclaw-flock-api-platform',
    heroImg: '/openclaw-hero.webp',
  },
  {
    title: 'Cleo Agent System',
    category: 'Code · AI · Multi-Agent',
    year: '2026',
    href: 'https://github.com/createpjf/cleo-dev',
    heroImg: '/cleo-hero.webp',
  },
  {
    title: 'Guizhou Athletic F.C.',
    category: 'Code · Website Building',
    year: '2026',
    href: 'https://www.guizhou-fc.com/',
    heroImg: '/guizhoufc-hero.webp',
  },
  {
    title: 'Brand Film',
    category: 'Video · Brand',
    year: '2024',
    href: 'https://www.youtube.com/watch?v=ntZSYRKRlbg',
    heroImg: '/film-hero.webp',
  },
  {
    title: 'Building Agent Worlds from Communication Theory',
    category: 'Writing · Research',
    year: '2025',
    href: 'https://mp.weixin.qq.com/s/D6x7-5p8Inb_acqhCSp4CA?scene=1',
    heroImg: '/article-hero.webp',
  },
];

/* ─── 文章列表 / Writing ─── */
export const writings = [
  {
    title: '开源 AI 的加密经济学',
    desc: '用代币经济激励开源AI协作与治理',
    date: '2026-02-16',
    href: 'https://x.com/createpjf/status/2023264735240630697',
    source: 'X',
  },
  {
    title: 'Agent 高速时代，模型是它的收费站',
    desc: '模型API定价如何塑造Agent生态格局',
    date: '2026-02-14',
    href: 'https://x.com/createpjf/status/2022588570356322421',
    source: 'X',
  },
  {
    title: '奇点不是一个点，是三层天花板',
    desc: '从算力、数据到对齐，拆解AGI三重瓶颈',
    date: '2026-02-08',
    href: 'https://x.com/createpjf/status/2020470911623708861',
    source: 'X',
  },
  {
    title: 'Building Agent Worlds from Communication Theory',
    desc: '用传播学框架构建多Agent协作系统',
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
