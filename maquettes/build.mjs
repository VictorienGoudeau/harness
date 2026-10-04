// Convertit les artboards .dc.html du canevas Lumia en pages HTML autonomes.
// Usage : node maquettes/build.mjs  →  maquettes/html/*.html + index.html
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(here, 'source');
const out = path.join(here, 'html');
fs.mkdirSync(out, { recursive: true });

const canvas = JSON.parse(fs.readFileSync(path.join(src, 'canvas.json'), 'utf8'));

for (const file of canvas.order) {
  const p = path.join(src, file);
  if (!fs.existsSync(p)) continue;
  let html = fs.readFileSync(p, 'utf8');
  const props = /data-props='([^']*)'/.exec(html);
  let dark = false;
  if (props) {
    try { dark = JSON.parse(props[1].replace(/&#39;/g, "'").replace(/&amp;/g, '&')).theme?.default === 'Sombre'; } catch {}
  }
  const helmet = (/<helmet>([\s\S]*?)<\/helmet>/.exec(html) || [, ''])[1];
  html = html
    .replace(/<helmet>[\s\S]*?<\/helmet>\s*/, '')
    .replace(/\s*<script src="\.\/support\.js"><\/script>/, '')
    .replace(/<script type="text\/x-dc"[\s\S]*?<\/script>\s*/, '')
    .replace(/<\/?x-dc>\s*/g, '')
    .replace(/\{\{\s*themeClass\s*\}\}/g, dark ? 'dark' : '')
    .replace(/href="([A-Za-z0-9_-]+)\.dc\.html"/g, 'href="$1.html"')
    .replace('</head>', `<meta name="viewport" content="width=device-width, initial-scale=1">\n${helmet.trim()}\n</head>`);
  fs.writeFileSync(path.join(out, file.replace('.dc.html', '.html')), html);
}
fs.copyFileSync(path.join(src, 'lumia.css'), path.join(out, 'lumia.css'));
console.log('ok');
