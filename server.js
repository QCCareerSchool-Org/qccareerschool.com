const express = require('express');
const next = require('next');
const { parse } = require('url');
const xml = require('xml');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/sitemap.xml', (req, res) => {
    res.header('Content-type', 'text/xml');
    res.send(xml({ urlset: [
      { _attr: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' } },
    ] }));
  });

  server.get('*', (req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    handle(req, res, parsedUrl);
  });

  server.listen(3000, err => {
    if (err) { throw err; }
    console.log('> Ready on http://localhost:3000');
  });
}).catch(err => {
  console.error(err.stack);
  process.exit(1);
});
