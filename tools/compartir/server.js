const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 4173;
const appRoot = path.join(__dirname, 'app');
const mimeTypes = {
  '.css': 'text/css; charset=utf-8', '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2', '.png': 'image/png', '.webp': 'image/webp'
};

http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  const candidate = path.resolve(appRoot, pathname === '/' ? 'index.html' : `.${pathname}`);
  const filePath = candidate.startsWith(appRoot) && fs.existsSync(candidate)
    ? candidate
    : path.join(appRoot, 'index.html');

  response.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath)] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(response);
}).listen(port, '127.0.0.1', () => {
  console.log(`Catálogo de Versiones disponible en http://127.0.0.1:${port}`);
});
