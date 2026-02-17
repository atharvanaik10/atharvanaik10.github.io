// Minimal frontmatter parser: expects leading --- block with key: value lines
export function parseFrontmatter(raw) {
  if (!raw) return { data: {}, body: '' };
  const trimmed = raw.replace(/^\uFEFF/, '');
  if (!trimmed.startsWith('---')) {
    return { data: {}, body: trimmed };
  }
  const end = trimmed.indexOf('\n---', 3);
  if (end === -1) return { data: {}, body: trimmed };
  const fm = trimmed.slice(3, end).trim();
  const body = trimmed.slice(end + 4).replace(/^\n+/, '');
  const data = {};
  fm.split(/\r?\n/).forEach((line) => {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (m) {
      const key = m[1].trim();
      let val = m[2].trim();
      if ((val.startsWith("'") && val.endsWith("'")) || (val.startsWith('"') && val.endsWith('"'))) {
        val = val.slice(1, -1);
      }
      if (val === 'true') val = true;
      else if (val === 'false') val = false;
      data[key] = val;
    }
  });
  return { data, body };
}

export function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '');
}

