const path = require('path');
const fs = require('fs');
const xml = require('xml');

function walk(dir, fileList) {
  const files = fs.readdirSync(dir).filter(file => !file.startsWith('_') && !file.startsWith('['));
  fileList = fileList || [];
  files.forEach(file => {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      fileList = walk(path.join(dir, file), fileList);
    } else if (file.startsWith('index.')) {
      fileList.push(dir);
    } else {
      fileList.push(path.join(dir, file));
    }
  });
  return fileList;
}

function getFiles() {
  const basePath = path.join(__dirname, 'src', 'pages');
  const pages = walk(basePath)
  return pages.map(p => {
    let returnValue = p;
    if (returnValue.startsWith(basePath)) {
      returnValue = returnValue.substring(basePath.length)
    }
    [ '.tsx', '.jsx', '.ts', '.js' ].forEach(ext => {
      if (returnValue.endsWith(ext)) {
        returnValue = returnValue.substring(0, returnValue.indexOf(ext));
      }
    });
    returnValue = returnValue.replace(/\\/g, '/');
    if (returnValue === '') {
      returnValue = '/';
    }
    return returnValue;
  });
}

function createSitemap(basepath, filenames) {
  return { urlset: [
    { _attr: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' } },
    ...filenames.map(f => ({
      url: [
        { loc: basepath + f },
        { priority: 0.5 },
      ],
    })),
  ]};
}

const files = getFiles();
const filename = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(filename, xml(createSitemap('https://www.qccareerschool.com', files)));
