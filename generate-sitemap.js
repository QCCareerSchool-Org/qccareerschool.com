const fs = require('fs');
const path = require('path');
const xml = require('xml');

function walk(dir, fileList) {
  const files = fs.readdirSync(dir).filter(file => !file.startsWith('_') && !file.startsWith('['));
  fileList = fileList || [];
  files.forEach(file => {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      fileList = walk(path.join(dir, file), fileList);
    } else if (file.startsWith('index.')) {
      fileList.push({ file: dir, modified: stat.mtime.toISOString() });
    } else {
      fileList.push({ file: path.join(dir, file), modified: stat.mtime.toISOString() });
    }
  });
  return fileList;
}

function getFiles() {
  const basePath = path.join(__dirname, 'src', 'pages');
  const pages = walk(basePath);
  // changes local file to server file
  return pages.map(p => {
    let serverFile = p.file;
    if (serverFile.startsWith(basePath)) {
      serverFile = serverFile.substring(basePath.length);
    }
    [ '.tsx', '.jsx', '.ts', '.js' ].forEach(ext => {
      if (serverFile.endsWith(ext)) {
        serverFile = serverFile.substring(0, serverFile.indexOf(ext));
      }
    });
    serverFile = serverFile.replace(/\\/gu, '/');
    if (serverFile === '') {
      serverFile = '/';
    }
    return { ...p, file: serverFile };
  });
}

function createSitemap(basepath, filenames) {
  return { urlset: [
    { _attr: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' } },
    ...filenames.map(f => ({
      url: [
        { loc: basepath + f.file },
        { lastmod: f.modified },
        { priority: 0.7 },
      ],
    })),
  ] };
}

const files = getFiles();
const filename = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(filename, xml(createSitemap('https://www.qccareerschool.com', files)));
