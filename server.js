const jsonServer = require('json-server');
const path = require('path');
require('dotenv').config();

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'public', 'db.json'));

const middlewares = jsonServer.defaults({
  static: './build',
});

server.use(middlewares);
server.use('/api', router);

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING ON ${process.env.PORT} port`);
});
