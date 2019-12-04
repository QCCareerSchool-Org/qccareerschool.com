const path = require('path');
const fs = require('fs').promises;
const xml = require('xml');

async function walk(dir, fileList) {
  const files = (await fs.readdir(dir)).filter(file => !file.startsWith('_') && !file.startsWith('['));
  fileList = fileList || [];
  const promises = files.map(async file => {
    const stat = await fs.stat(path.join(dir, file));
    if (stat.isDirectory()) {
      fileList = await walk(path.join(dir, file), fileList);
    } else if (file.startsWith('index.')) {
      fileList.push(dir);
    } else {
      fileList.push(path.join(dir, file));
    }
  });
  await Promise.all(promises);
  return fileList;
}

async function getFiles() {
  const basePath = path.join(__dirname, 'src', 'pages');
  const pages = await walk(basePath)
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

getFiles().then(files => {
  return fs.writeFile(path.join(__dirname, 'public', 'sitemap.xml'), xml(createSitemap('https://www.qccareerschool.com', files)));
});