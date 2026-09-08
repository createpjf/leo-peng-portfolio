import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { getSiteContent } from '../src/data/siteContent.js';

const server = await createServer({ configFile: false, plugins: [react()], server: { middlewareMode: true }, appType: 'custom' });
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
try {
  const { renderPage } = await server.ssrLoadModule('/scripts/render-page.jsx');
  const template = await readFile('dist/index.html', 'utf8');
  for (const marker of ['<html lang="en">', '<div id="root"></div>', '<link rel="canonical"', '<script type="application/ld+json">']) {
    assert.ok(template.includes(marker), `Prerender template is missing ${marker}`);
  }
  for (const locale of ['en', 'zh']) {
    const { meta, personalInfo, socialLinks } = getSiteContent(locale);
    const url = `https://createpjf.com/${locale}/`;
    let html = template.replace('<html lang="en">', `<html lang="${locale === 'zh' ? 'zh-CN' : 'en'}">`)
      .replace(/<title>.*?<\/title>/, `<title>${escape(meta.title)}</title>`)
      .replace('<div id="root"></div>', `<div id="root" data-locale="${locale}">${renderPage(locale)}</div>`)
      .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" /><link rel="alternate" hreflang="en" href="https://createpjf.com/en/" /><link rel="alternate" hreflang="zh-CN" href="https://createpjf.com/zh/" /><link rel="alternate" hreflang="x-default" href="https://createpjf.com/" />`);
    const values = { description: meta.description, 'og:title': meta.title, 'og:description': meta.socialDescription, 'og:locale': meta.ogLocale, 'og:locale:alternate': locale === 'zh' ? 'en_US' : 'zh_CN', 'og:url': url, 'twitter:title': meta.title, 'twitter:description': meta.socialDescription };
    html = html.replace(/<meta (name|property)="([^"]+)" content="[^"]*"\s*\/>/g, (tag, attr, key) => values[key] ? `<meta ${attr}="${key}" content="${escape(values[key])}" />` : tag);
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: personalInfo.name, jobTitle: meta.jobTitle, url, email: personalInfo.email, sameAs: socialLinks.map(s => s.href), knowsAbout: meta.knowsAbout, workLocation: { '@type': 'Place', name: meta.workLocation } }).replaceAll('<', '\\u003c')}</script>`);
    await mkdir(`dist/${locale}`, { recursive: true });
    await writeFile(`dist/${locale}/index.html`, html);
    if (locale === 'en') await writeFile('dist/index.html', html);
  }
} finally {
  await server.close();
}
