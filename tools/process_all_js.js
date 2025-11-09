const fs = require('fs');
const path = require('path');

// Caminho raiz do workspace (uma pasta acima desta ferramenta)
const root = path.resolve(__dirname, '..');
const out = path.join(__dirname, 'js_manifest.json');

const results = [];

function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items) {
    const full = path.join(dir, it.name);
    // ignorar a própria pasta tools de saída
    if (full === out) continue;
    if (it.isDirectory()) {
      walk(full);
    } else if (it.isFile() && full.endsWith('.js')) {
      try {
        const content = fs.readFileSync(full, 'utf8');
        results.push({ path: full, size: content.length });
      } catch (e) {
        results.push({ path: full, error: String(e) });
      }
    }
  }
}

walk(root);
fs.writeFileSync(out, JSON.stringify({ generatedAt: new Date().toISOString(), count: results.length, files: results }, null, 2));
console.log('Manifest criado em', out, 'arquivos .js encontrados:', results.length);
