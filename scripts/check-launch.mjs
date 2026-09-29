import { readFileSync } from 'node:fs';
const content = readFileSync(new URL('../src/data/site.ts', import.meta.url), 'utf8');
const configured = /applicationUrl:\s*'https:\/\/[^']+'/.test(content) && /contactEmail:\s*'[^'\s]+@[^'\s]+\.[^'\s]+'/.test(content);
const applicationsOpen = /applicationsOpen:\s*true/.test(content);
if (applicationsOpen && !configured) {
  console.error('Open applications require a verified application URL and team email in src/data/site.ts.');
  process.exit(1);
}
console.log(applicationsOpen ? 'Application configuration present.' : 'Ready to publish with applications closed.');
