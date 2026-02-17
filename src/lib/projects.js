import { renderMarkdown } from './mdRenderer.js';

// Load single file: /src/content/projects.md
const projModule = import.meta.glob('/src/content/projects.md', { as: 'raw', eager: true });
const raw = Object.values(projModule)[0] || '';

function parseKey(line) {
  const m = line.match(/^([A-Za-z]+):\s*(.*)$/);
  return m ? { key: m[1].toLowerCase(), value: m[2].trim() } : null;
}

function parseList(val) {
  if (!val) return [];
  return val.split(',').map(s => s.trim()).filter(Boolean);
}

function parseProjects(raw) {
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
    items.push({
      name,
      github: meta.github || '',
      image: meta.image || '',
      tech: parseList(meta.tech),
      order: Number(meta.order ?? 0),
      html: renderMarkdown(body)
    });
  }
  return items.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
}

export const projects = parseProjects(raw);
