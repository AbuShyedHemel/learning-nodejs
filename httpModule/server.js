const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;
const dt = require("./myModule");

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write(req.url);
  res.end();
  hey
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
