import { parseFrontmatter } from './markdown.js';
import { renderMarkdown } from './mdRenderer.js';

const modules = import.meta.glob('/src/content/projects/*.md', { as: 'raw', eager: true });

function toProject(path, raw) {
  const { data, body } = parseFrontmatter(raw);
  return {
    name: data.name || 'Project',
    github: data.github || '',
    image: data.image || '',
    tech: Array.isArray(data.tech) ? data.tech : [],
    order: Number(data.order ?? 0),
    html: renderMarkdown(body)
  };
}

export const projects = Object.entries(modules)
  .map(([p, raw]) => toProject(p, raw))
  .sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));

