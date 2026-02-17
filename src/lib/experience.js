import { parseFrontmatter } from './markdown.js';
import { renderMarkdown } from './mdRenderer.js';

const modules = import.meta.glob('/src/content/experience/*.md', { as: 'raw', eager: true });

function toExperience(path, raw) {
  const { data, body } = parseFrontmatter(raw);
  return {
    company: data.company || 'Company',
    role: data.role || '',
    location: data.location || '',
    period: data.period || '',
    order: Number(data.order ?? 0),
    html: renderMarkdown(body)
  };
}

export const experiences = Object.entries(modules)
  .map(([p, raw]) => toExperience(p, raw))
  .sort((a, b) => a.order - b.order || a.company.localeCompare(b.company));

