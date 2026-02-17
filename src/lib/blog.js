import { parseFrontmatter, slugFromPath } from './markdown.js';
import { renderMarkdown } from './mdRenderer.js';

// Eagerly import all Markdown files in blog folder as raw strings
const modules = import.meta.glob('/src/content/blog/*.md', { as: 'raw', eager: true });

function toPost(path, raw) {
  const { data, body } = parseFrontmatter(raw);
  const slug = slugFromPath(path);
  return {
    slug,
    title: data.title || slug,
    draft: data.draft === true,
    html: renderMarkdown(body),
  };
}

export const posts = Object.entries(modules)
  .map(([path, raw]) => toPost(path, raw))
  // You can filter drafts here if desired
  .sort((a, b) => a.title.localeCompare(b.title));
