const express = require('express');
const compression = require('compression');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// app.prepare()
// .then(() => {
const server = express();
server.use(compression);

server.get('*', (req, res) => {
  return handle(req, res);
});

module.exports = server;
// })
// .catch((ex) => {
//   console.error(ex.stack)
//   process.exit(1)
// })