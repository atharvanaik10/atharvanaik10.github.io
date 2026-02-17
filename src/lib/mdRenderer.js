// Very small Markdown -> HTML renderer for headings, lists, links, images, paragraphs
// Not a full parser; covers the blog content use-cases here.

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderInline(md) {
  // Images ![alt](src)
  md = md.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_m, alt, src) => {
    const escAlt = escapeHtml(alt);
    const escSrc = src;
    return `<img src="${escSrc}" alt="${escAlt}" class="rounded-xl border border-white/10 shadow-md my-4" />`;
  });
  // Links [text](href)
  md = md.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, text, href) => {
    const escText = escapeHtml(text);
    const escHref = href;
    const ext = /^https?:\/\//.test(escHref) ? ' target="_blank" rel="noreferrer"' : '';
    return `<a href="${escHref}" class="text-primary hover:underline"${ext}>${escText}</a>`;
  });
  return md;
}

export function renderMarkdown(md) {
  if (!md) return '';
  const lines = md.replace(/\r\n?/g, '\n').split('\n');
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Headings
    if (/^###\s+/.test(line)) {
      out.push(`<h3 class="mt-8 mb-3 text-xl font-semibold">${renderInline(escapeHtml(line.replace(/^###\s+/, '')))}</h3>`);
      i++; continue;
    }
    if (/^##\s+/.test(line)) {
      out.push(`<h2 class="mt-10 mb-4 text-2xl font-bold">${renderInline(escapeHtml(line.replace(/^##\s+/, '')))}</h2>`);
      i++; continue;
    }
    if (/^#\s+/.test(line)) {
      out.push(`<h1 class="mt-10 mb-4 text-3xl font-extrabold">${renderInline(escapeHtml(line.replace(/^#\s+/, '')))}</h1>`);
      i++; continue;
    }

    // Fenced code (not used; skip as preformatted)
    if (/^```/.test(line)) {
      const fence = line.slice(0, 3);
      const code = [];
      i++;
      while (i < lines.length && !lines[i].startsWith(fence)) {
        code.push(lines[i]);
        i++;
      }
      i++; // skip closing fence
      out.push(`<pre class="bg-black/40 rounded-lg p-4 overflow-x-auto border border-white/10"><code>${escapeHtml(code.join('\n'))}</code></pre>`);
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(`<li class="my-1">${renderInline(escapeHtml(lines[i].replace(/^\d+\.\s+/, '')))}</li>`);
        i++;
      }
      out.push(`<ol class="list-decimal pl-6 my-4 space-y-1">${items.join('')}</ol>`);
      continue;
    }

    // Unordered list
    if (/^(?:- |\* )/.test(line)) {
      const items = [];
      while (i < lines.length && /^(?:- |\* )/.test(lines[i])) {
        items.push(`<li class="my-1">${renderInline(escapeHtml(lines[i].replace(/^(?:- |\* )/, '')))}</li>`);
        i++;
      }
      out.push(`<ul class="list-disc pl-6 my-4 space-y-1">${items.join('')}</ul>`);
      continue;
    }

    // Blank line -> paragraph break
    if (/^\s*$/.test(line)) { i++; continue; }

    // Paragraph: collect contiguous non-blank lines
    const para = [line];
    i++;
    while (i < lines.length && !/^\s*$/.test(lines[i]) && !/^(?:#|\d+\.\s+|\* |- |```)/.test(lines[i])) {
      para.push(lines[i]);
      i++;
    }
    out.push(`<p class="my-3 leading-7 text-white/85">${renderInline(escapeHtml(para.join(' ')))}</p>`);
  }

  return out.join('\n');
}
