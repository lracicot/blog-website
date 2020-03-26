const server = require('./app');



server.listen(3000, (err) => {
  if (err) throw err
  console.log('> Ready on http://localhost:3000')
})
