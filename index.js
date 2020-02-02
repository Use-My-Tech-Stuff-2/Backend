const server = require('./api/server.js');

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`\n=== listening on ${PORT} ===\n`);
});