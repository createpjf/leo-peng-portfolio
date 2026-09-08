import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import vm from 'node:vm';
import { log } from 'node:console';
import { argv } from 'node:process';
import { getSiteContent } from '../src/data/siteContent.js';

// Exercise the production observer callback with two deliveries before a frame.
const source = readFileSync('src/hooks/useInView.js', 'utf8');
let notify;
let id = 0;
const queue = new Map();
const context = vm.createContext({
  Map,
  IntersectionObserver: class { constructor(callback) { notify = callback; } },
  requestAnimationFrame: callback => { queue.set(++id, callback); return id; },
  cancelAnimationFrame: key => queue.delete(key),
});
vm.runInContext(source.slice(source.indexOf('const observerPool'), source.indexOf('/**\n * Shared IntersectionObserver hook')) + '\nthis.pool = getSharedObserver(.15, "0px");', context);
const seen = [];
context.pool.callbacks.set('A', () => seen.push('A'));
context.pool.callbacks.set('B', () => seen.push('B'));
notify([{ target: 'A', isIntersecting: true }]);
notify([{ target: 'B', isIntersecting: true }]);
for (const callback of queue.values()) callback();
assert.deepEqual(seen, ['A', 'B']);

for (const locale of ['en', 'zh']) {
  const html = readFileSync(`dist/${locale}/index.html`, 'utf8');
  const content = getSiteContent(locale);
  assert.ok(html.includes(`data-locale="${locale}"`));
  assert.ok(html.includes(`<title>${content.meta.title}</title>`));
  assert.ok(html.includes(`rel="canonical" href="https://createpjf.com/${locale}/"`));
  assert.ok(html.includes('hreflang="zh-CN"'));
  assert.ok(html.indexOf('id="work"') < html.indexOf('id="writing"'));
  assert.ok(!html.includes('<video'));
  assert.ok(html.includes('aria-expanded="false" aria-controls="more-work-remainder"'));
  assert.ok(html.includes('id="more-work-remainder" inert="" aria-hidden="true"'));
  assert.ok(html.includes(content.ui.expandWork));
  assert.equal((html.match(/class="work-card"/g) || []).length, content.projects.length);
  const featuredHtml = html.slice(html.indexOf('works-grid--featured'), html.indexOf('more-work-title'));
  for (const id of ['botanic', 'retail-os', 'andlight', 'goleta']) {
    assert.ok(featuredHtml.includes(content.projects.find(p => p.id === id).title.replaceAll('&', '&amp;')));
  }
  for (const paragraph of content.personalInfo.heroBio) assert.ok(html.includes(paragraph.replaceAll('&', '&amp;')));
  for (const project of content.projects) {
    assert.ok(html.includes(project.title.replaceAll('&', '&amp;')), project.id);
    assert.ok(existsSync(`dist${project.heroImg}`), project.heroImg);
    if (!project.href) assert.ok(html.includes(encodeURIComponent(project.title)), 'Project-specific inquiry is missing');
  }
  const data = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(data.jobTitle, content.meta.jobTitle);
}
log('PASS: observer deliveries, bilingual HTML, metadata, assets, project inquiries, and content order');

// Optional live preview check: npm test -- http://127.0.0.1:55181
if (argv[2]) {
  for (const locale of ['en', 'zh']) {
    const response = await fetch(new URL(`/${locale}/`, argv[2]));
    assert.equal(response.status, 200, `${locale} preview route`);
    assert.ok((await response.text()).includes(`data-locale="${locale}"`));
  }
  const image = await fetch(new URL('/hero-poster.jpg', argv[2]));
  assert.equal(image.status, 200, 'Preview asset route');
  assert.ok(image.headers.get('content-type')?.startsWith('image/'));
  log('PASS: live preview locale routes and image response');
}
