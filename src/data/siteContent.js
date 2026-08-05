const socialLinks = [
  { label: 'Twitter / X', href: 'https://x.com/createpjf' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/leopeng2023/' },
  { label: 'GitHub', href: 'https://github.com/createpjf' },
];

const serviceShared = [
  { id: 'film', num: '01', iconType: 'video' },
  { id: 'fde', num: '02', iconType: 'code' },
  { id: 'growth', num: '03', iconType: 'marketing' },
  { id: 'commerce', num: '04', iconType: 'commerce' },
];

const experienceShared = [
  { id: 1, logo: '/logo-flock.png' },
  { id: 2, logo: '/logo-netease.png' },
  { id: 3, logo: '/logo-buidlerdao.png' },
  { id: 4, logo: '/logo-ogilvy.svg' },
];

const extraExperienceShared = [{ id: 5 }];

const projectShared = [
  {
    id: 'botanic', year: '2026', href: 'https://botanic-canvas.vercel.app/',
    heroImg: { en: '/botanic-agent-hero-en.webp', zh: '/botanic-agent-hero.webp' },
  },
  {
    id: 'six-health', year: '2026',
    heroImg: { en: '/six-health-agent-hero-en.webp', zh: '/six-health-agent-hero.webp' },
  },
  {
    id: 'goleta', year: '2026',
    heroImg: { en: '/goleta-agent-hero-en.webp', zh: '/goleta-agent-hero.webp' },
  },
  {
    id: 'retail-os', year: '2026',
    heroImg: { en: '/retail-system-hero-en.webp', zh: '/retail-system-hero.webp' },
  },
  { id: 'routebox', year: '2026', href: 'https://api.routebox.dev/', heroImg: '/routebox-hero.webp' },
  { id: 'suber', year: '2026', href: 'https://github.com/createpjf/suber-macos', heroImg: '/suber-hero.webp' },
  {
    id: 'openclaw', year: '2026', href: 'https://github.com/createpjf/openclaw-flock-api-platform',
    heroImg: '/openclaw-hero.webp',
  },
  { id: 'cleo', year: '2026', href: 'https://github.com/createpjf/cleo-dev', heroImg: '/cleo-hero.webp' },
  { id: 'guizhou-fc', year: '2026', href: 'https://www.guizhou-fc.com/', heroImg: '/guizhoufc-hero.webp' },
  {
    id: 'brand-film', year: '2024', href: 'https://www.youtube.com/watch?v=ntZSYRKRlbg',
    heroImg: '/film-hero.webp',
  },
  {
    id: 'agent-worlds', year: '2025',
    href: 'https://mp.weixin.qq.com/s/D6x7-5p8Inb_acqhCSp4CA?scene=1', heroImg: '/article-hero.webp',
  },
];

const writingShared = [
  { id: 'crypto-ai', date: '2026-02-16', href: 'https://x.com/createpjf/status/2023264735240630697', source: 'X' },
  { id: 'agent-tollbooth', date: '2026-02-14', href: 'https://x.com/createpjf/status/2022588570356322421', source: 'X' },
  { id: 'singularity', date: '2026-02-08', href: 'https://x.com/createpjf/status/2020470911623708861', source: 'X' },
  {
    id: 'communication-theory', date: '2025-03',
    href: 'https://mp.weixin.qq.com/s/D6x7-5p8Inb_acqhCSp4CA?scene=1', source: 'WeChat',
  },
];

const copy = {
  en: {
    meta: {
      title: 'Leo Peng — Forward Deployed Engineer',
      description: 'Leo Peng is a Forward Deployed Engineer and Creative Technologist building production-ready AI systems across retail, health, creative production, and developer tooling.',
      socialDescription: 'Turning complex industry needs into production-ready AI systems—from discovery and architecture to delivery.',
      ogLocale: 'en_US',
      jobTitle: 'Forward Deployed Engineer',
      knowsAbout: ['Forward Deployed Engineering', 'AI Systems', 'Solution Architecture', 'Retail Technology', 'Health Technology'],
      workLocation: 'Shanghai',
    },
    personalInfo: {
      name: 'Leo Peng',
      title: 'Forward Deployed Engineer · Creative Technologist',
      heroSubtitle: 'UCI Film & Media · Ogilvy & NetEase Alumni · FDE at FLock.io',
      heroBio: [
        'I lead creative work from film production to new media. Across Ogilvy, NetEase, and E-CHÉRIE, I have built cross-disciplinary brand systems with a sharp, minimalist visual language.',
        'At FLock.io, I work as a Forward Deployed Engineer, turning complex industry needs into production-ready AI systems. I take projects from discovery and solution design through prototyping, integration, and delivery across retail, health, creative production, developer tooling, and privacy-preserving AI.',
      ],
      heroHeadline: ['Stories. Code.', 'Things that ', 'move', 'people.'],
      heroSubtags: 'Film · AI Systems · Industry Delivery',
      quote: '“The best work grows where intuition meets structure.”',
      quoteAttribution: '— Leo Peng',
      currentStatus: 'Open to new projects.',
      email: 'leo@flock.io',
      locations: 'Shanghai · Hong Kong · Remote',
      footerBio: 'Storytelling meets engineering. Based in Shanghai, working globally.',
    },
    expertisePills: [
      { label: 'FDE', desc: 'Embedded product discovery, solution architecture, integration, and production delivery.' },
      { label: 'AI Systems', desc: 'Agent workflows, model routing, full-stack prototyping, and local-first tooling.' },
      { label: 'Industry Delivery', desc: 'Tailored products for retail, health, creative production, and enterprise operations.' },
    ],
    navItems: [
      { id: 'services', label: 'Services' },
      { id: 'writing', label: 'Writing' },
      { id: 'work', label: 'Work' },
      { id: 'experience', label: 'Experience' },
      { id: 'contact', label: 'Contact' },
    ],
    services: {
      film: { title: 'Brand Content & AI Production', desc: 'From brand films and product videos to AI content workflows, I help businesses produce high-quality content at scale—already deployed across fashion and cross-border e-commerce.', tags: ['Brand Film', 'AIGC Workflows', 'Content at Scale'] },
      fde: { title: 'AI Agents & Business Systems', desc: 'I work inside the business to build proprietary agents and production systems—from discovery and solution design to integration and launch.', tags: ['AI Agents', 'Solution Design', 'End-to-End Delivery'] },
      growth: { title: 'Growth & Strategy', desc: 'Through GEO, content strategy, and marketing agents, I build proprietary knowledge bases and business ontologies that turn brand content, industry expertise, and customer engagement into a scalable growth system.', tags: ['GEO', 'Content & Marketing Agents', 'Knowledge Bases & Ontologies'] },
      commerce: { title: 'E-Commerce & Retail', desc: 'For cross-border commerce and omnichannel retail, I build agents and business systems that connect products, customers, stores, and operational data—supporting practical AI transformation.', tags: ['Cross-Border', 'Omnichannel Retail', 'Retail Agents'] },
    },
    experience: {
      1: { date: '2023 — Present', role: 'Forward Deployed Engineer (FDE)', company: 'FLock.io — Privacy-Preserving AI', type: 'Full-time' },
      2: { date: '2023', role: 'Game Product Operations', company: 'NetEase', type: 'Internship' },
      3: { date: '2022 — 2024', role: 'Community Manager', company: 'BuidlerDAO & SpringX Accelerator', type: 'Full-time' },
      4: { date: '2021 — 2022', role: 'Advertising Strategist', company: 'Ogilvy', type: 'Agency' },
      5: { date: '2017 — 2019', role: 'Documentary Producer', company: 'Independent — Film & Media', type: 'Freelance' },
    },
    projects: {
      botanic: { title: 'Retail Marketing AIGC Agent', category: 'Botanic Canvas · Creative Production · AI' },
      'six-health': { title: 'Personal Health Management Agent', category: 'Six Health OS · Health Intelligence · AI' },
      goleta: { title: 'Goleta Coding Agent', category: 'Developer Tools · AI · Local-First' },
      'retail-os': { title: 'Unified Retail Operations Platform', category: 'Data Center · Membership · Community' },
      routebox: { title: 'RouteBox', category: 'Smart Routing · AI · API' },
      suber: { title: 'Suber', category: 'Productivity · macOS · App' },
      openclaw: { title: 'OpenClaw FLock Plugin', category: 'Developer Tools · AI · Plugin' },
      cleo: { title: 'Cleo Multi-Agent System', category: 'AI · Orchestration · Multi-Agent' },
      'guizhou-fc': { title: 'Guizhou Athletic F.C.', category: 'Website · Sports · Brand' },
      'brand-film': { title: 'Brand Film', category: 'Film · Direction · Brand' },
      'agent-worlds': { title: 'Building Agent Worlds from Communication Theory', category: 'Writing · Research · Multi-Agent' },
    },
    writings: {
      'crypto-ai': { title: 'The Cryptoeconomics of Open-Source AI', desc: 'How token incentives can coordinate and govern open-source AI.' },
      'agent-tollbooth': { title: 'In the Agent Fast Lane, Models Are the Tollbooths', desc: 'How model API pricing shapes the agent ecosystem.' },
      singularity: { title: 'The Singularity Is Not a Point, but Three Ceilings', desc: 'Compute, data, and alignment as AGI’s three constraints.' },
      'communication-theory': { title: 'Building Agent Worlds from Communication Theory', desc: 'A communication-theory framework for multi-agent collaboration.' },
    },
    ui: {
      sections: { services: 'How I Help Businesses.', writing: 'Writing.', work: 'Selected Work.', experience: 'Experience.' },
      status: 'Status', expertise: 'Expertise', viewResume: 'View résumé', seeMore: 'See more', showLess: 'Show less',
      socials: 'Socials', sayHello: 'Say hello', copyright: '© {year} {name}. All rights reserved.',
      mainNavigation: 'Main navigation', siteNavigation: 'Site navigation', toggleMenu: 'Toggle menu',
      languageSwitcher: 'Language', switchToChinese: 'Switch to Chinese', switchToEnglish: 'Switch to English',
      heroImageAlt: 'Leo Peng portfolio hero',
    },
  },
  zh: {
    meta: {
      title: 'Leo Peng — AI 行业落地工程师（FDE）',
      description: 'Leo Peng 是一名 AI 行业落地工程师（FDE）与创意技术人，面向零售、健康、创意生产和开发者工具，打造可上线、可集成、可交付的 AI 系统。',
      socialDescription: '从需求梳理和方案架构，到原型、集成与上线，把复杂的行业需求落成真正可用的 AI 系统。',
      ogLocale: 'zh_CN',
      jobTitle: 'AI 行业落地工程师（FDE）',
      knowsAbout: ['AI 行业落地', 'AI 系统', '方案架构', '零售科技', '健康科技'],
      workLocation: '上海',
    },
    personalInfo: {
      name: 'Leo Peng',
      title: 'AI 行业落地工程师（FDE）',
      heroSubtitle: 'FLock.io FDE · 创意技术人 · UCI 电影与媒体',
      heroBio: [
        '我横跨影像制作、新媒体与品牌传播，曾在奥美、网易及 E-CHÉRIE 参与从创意到交付的完整流程，用克制的视觉语言连接内容、产品与商业。',
        '目前在 FLock.io 担任 FDE，面向零售、健康、创意生产、开发者工具与隐私保护 AI 等场景，把复杂需求转化为可上线的 AI 系统，并推进需求梳理、方案设计、原型验证、系统集成与最终交付。',
      ],
      heroHeadline: ['创意落地。', '让 AI ', '解决', '真实问题。'],
      heroSubtags: '影像 · AI 系统 · 行业交付',
      quote: '“最好的作品，生长在直觉与秩序交汇的地方。”',
      quoteAttribution: '— Leo Peng',
      currentStatus: '承接新的行业项目。',
      email: 'leo@flock.io',
      locations: '上海 · 香港 · 远程',
      footerBio: '把叙事、设计与工程连接起来，立足上海，面向全球。',
    },
    expertisePills: [
      { label: 'FDE', desc: '深入业务现场，完成需求梳理、方案架构、系统集成与生产交付。' },
      { label: 'AI 系统', desc: '设计 Agent 工作流、模型路由、全栈原型与本地优先工具。' },
      { label: '行业交付', desc: '为零售、健康、创意生产与企业运营打造定制化产品。' },
    ],
    navItems: [
      { id: 'services', label: '服务' },
      { id: 'writing', label: '写作' },
      { id: 'work', label: '项目' },
      { id: 'experience', label: '经历' },
      { id: 'contact', label: '联系' },
    ],
    services: {
      film: { title: '品牌内容与 AI 生产', desc: '从品牌影片、产品视频到 AI 内容生产工作流，帮助企业实现高质量内容的批量化生产；相关方案已落地于服装时尚与跨境电商领域。', tags: ['品牌影像', 'AIGC 工作流', '规模化生产'] },
      fde: { title: 'AI Agent 与业务系统', desc: '深入业务现场，为企业搭建专属 Agent 与业务系统，从需求梳理、方案设计到系统集成和上线交付，推动 AI 真正进入业务流程。', tags: ['AI Agent', '方案架构', '全栈交付'] },
      growth: { title: '增长与策略', desc: '围绕 GEO、内容策略与营销 Agent，为企业搭建专属知识库与业务本体，让品牌内容、行业经验和客户触达形成可持续增长的智能系统。', tags: ['GEO', '内容策略与营销 Agent', '企业知识库与业务本体'] },
      commerce: { title: '电商与零售', desc: '围绕跨境电商与线下新零售场景，搭建连接商品、会员、门店和经营数据的智能体与业务系统，推动零售业务的 AI 转型。', tags: ['跨境电商', '新零售', '零售 Agent'] },
    },
    experience: {
      1: { date: '2023 — 至今', role: 'AI 行业落地工程师（FDE）', company: 'FLock.io — 隐私保护 AI', type: '全职' },
      2: { date: '2023', role: '游戏产品运营', company: '网易', type: '实习' },
      3: { date: '2022 — 2024', role: '社区运营', company: 'BuidlerDAO 与 SpringX 加速器', type: '全职' },
      4: { date: '2021 — 2022', role: '广告策略', company: '奥美', type: '广告代理' },
      5: { date: '2017 — 2019', role: '纪录片制片人', company: '独立创作 — 影像与媒体', type: '自由职业' },
    },
    projects: {
      botanic: { title: '电商零售营销 AIGC Agent', category: 'Botanic Canvas · 创意生产 · AI' },
      'six-health': { title: '个人健康管理 Agent', category: 'Six Health OS · 健康智能 · AI' },
      goleta: { title: 'Goleta Coding Agent', category: '开发者工具 · AI · 本地优先' },
      'retail-os': { title: '零售行业三端系统', category: '经营数据 · 会员服务 · 内容社区' },
      routebox: { title: 'RouteBox 智能路由', category: '模型路由 · AI · API' },
      suber: { title: 'Suber 日历效率工具', category: '效率工具 · macOS · 应用' },
      openclaw: { title: 'OpenClaw FLock 插件', category: '开发者工具 · AI · 插件' },
      cleo: { title: 'Cleo 多智能体系统', category: 'AI · 编排 · 多智能体' },
      'guizhou-fc': { title: '贵州竞技足球俱乐部官网', category: '网站 · 体育 · 品牌' },
      'brand-film': { title: '品牌影片', category: '影像 · 导演 · 品牌' },
      'agent-worlds': { title: '从传播学构建 Agent 世界', category: '写作 · 研究 · 多智能体' },
    },
    writings: {
      'crypto-ai': { title: '开源 AI 的加密经济学', desc: '用代币激励协调开源 AI 的协作与治理。' },
      'agent-tollbooth': { title: 'Agent 高速时代，模型是它的收费站', desc: '模型 API 定价如何塑造 Agent 生态。' },
      singularity: { title: '奇点不是一个点，而是三层天花板', desc: '从算力、数据与对齐拆解 AGI 的三重瓶颈。' },
      'communication-theory': { title: '从传播学构建 Agent 世界', desc: '用传播学框架设计多智能体协作系统。' },
    },
    ui: {
      sections: { services: '我能帮企业做什么。', writing: '思考与写作。', work: '精选项目。', experience: '工作经历。' },
      status: '当前状态', expertise: '专业能力', viewResume: '查看履历', seeMore: '查看更多', showLess: '收起经历',
      socials: '社交平台', sayHello: '联系我', copyright: '© {year} {name}。保留所有权利。',
      mainNavigation: '主导航', siteNavigation: '网站导航', toggleMenu: '打开或关闭菜单',
      languageSwitcher: '语言切换', switchToChinese: '切换为中文', switchToEnglish: '切换为英文',
      heroImageAlt: 'Leo Peng 个人作品集主视觉',
    },
  },
};

const resolveRecords = (shared, localized, locale) => shared.map((item) => ({
  ...item,
  heroImg: typeof item.heroImg === 'object' ? item.heroImg[locale] : item.heroImg,
  ...localized[item.id],
}));

export const getSiteContent = (requestedLocale = 'en') => {
  const locale = requestedLocale === 'zh' ? 'zh' : 'en';
  const localized = copy[locale];

  return {
    ...localized,
    services: resolveRecords(serviceShared, localized.services, locale),
    experienceData: resolveRecords(experienceShared, localized.experience, locale),
    extraExperience: resolveRecords(extraExperienceShared, localized.experience, locale),
    projects: resolveRecords(projectShared, localized.projects, locale),
    writings: resolveRecords(writingShared, localized.writings, locale),
    socialLinks,
  };
};
