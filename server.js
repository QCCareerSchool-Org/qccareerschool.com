const express = require('express');
const next = require('next');
const { parse } = require('url');
const xml = require('xml');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = 80;

app.prepare().then(() => {
  const server = express();

  server.get('/sitemap.xml', (req, res) => {
    res.header('Content-type', 'text/xml');
    res.send(xml({ urlset: [
      { _attr: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' } },
    ] }));
  });

  server.get('/profile', (req, res) => {
    if (req.query.id) {
      const id = parseInt(req.query.id, 10);
      res.redirect(`/profiles/${id}`);
      return;
    }
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  })

  server.get('*', (req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    handle(req, res, parsedUrl);
  });

  server.listen(port, err => {
    if (err) { throw err; }
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch(err => {
  console.error(err.stack);
  process.exit(1);
});
