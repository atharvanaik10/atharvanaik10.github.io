import { renderMarkdown } from './mdRenderer.js';

// Load single file: /src/content/research.md
const researchModule = import.meta.glob('/src/content/research.md', { as: 'raw', eager: true });
const raw = Object.values(researchModule)[0] || '';

function parseKey(line) {
  const m = line.match(/^([A-Za-z]+):\s*(.*)$/);
  return m ? { key: m[1].toLowerCase(), value: m[2].trim() } : null;
}

function parseResearch(raw) {
  const text = (raw || '').replace(/^\uFEFF/, '').trim();
  if (!text) return [];
  const blocks = text.split(/\n(?=###\s+)/);
  const items = [];
  for (const block of blocks) {
    const lines = block.split(/\r?\n/);
    if (!/^###\s+/.test(lines[0])) continue;
    const name = lines[0].replace(/^###\s+/, '').trim();
    let i = 1;
    const meta = {};
    while (i < lines.length && lines[i].trim() !== '') {
      const kv = parseKey(lines[i]);
      if (kv) meta[kv.key] = kv.value;
      i++;
    }
    while (i < lines.length && lines[i].trim() === '') i++;
    const body = lines.slice(i).join('\n');
    const linkSpec = meta.links || meta.buttons || '';
    let links = [];
    if (linkSpec) {
      // Prefer Markdown-style links: [Label](URL)
      const md = /\[([^\]]+)\]\(([^)]+)\)/g;
      let m;
      while ((m = md.exec(linkSpec))) {
        const label = (m[1] || '').trim();
        const url = (m[2] || '').trim();
        if (label && url) links.push({ label, url });
      }
      // Fallback to Label|URL comma-separated pairs for backward compatibility
      if (links.length === 0) {
        links = linkSpec
          .split(',')
          .map((e) => e.trim())
          .filter(Boolean)
          .map((pair) => {
            const [label, url] = pair.split('|').map((s) => (s || '').trim());
            return label && url ? { label, url } : null;
          })
          .filter(Boolean);
      }
    }
    items.push({
      name,
      role: meta.role || '',
      location: meta.location || '',
      period: meta.period || '',
      order: Number(meta.order ?? 0),
      tech: (meta.tech || meta.skills || '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      links,
      html: renderMarkdown(body)
    });
  }
  return items.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
}

export const researchItems = parseResearch(raw);
