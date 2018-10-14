import { createServer } from 'http';
import { readFile } from 'fs';
import { extname as _extname, resolve } from 'path';

const Port = process.env.PORT || 3000;

createServer((request, response) => {
  let filePath = `./dist${request.url}`;

  if (filePath === './dist/') {
    filePath = resolve(__dirname, '../../dist/index.html');
  }

  // get the extension
  const extname = String(_extname(filePath)).toLowerCase();

  // mimetypes for processing different file format
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.svg': 'application/image/svg+xml',
  };

  // get the appropriate content type for income request
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // read file being requested from the server
  readFile(filePath, (error, content) => {
    if (error) {
      console.log(error);
      response.writeHead(500);
      response.end(`An error (${error.code}) has occurred in the following file ${filePath}...\n`);
      return response.end();
    }
    response.writeHead(200, { 'Content-Type': contentType });
    return response.end(content, 'utf-8');
  });
}).listen(Port);

console.log(`server is listening on port: ${Port}`);
