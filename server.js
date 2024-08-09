const { createServer } = require("node:http");
const uc = require("upper-case");

const hostName = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  req.statusCode = 200;
  res.writeHead(404, { "Content-Type": "text/html" });
  res.write(uc("Hello word"));
  res.end();
});

server.listen(port, hostName, () => {
  console.log(`The server is running at http://${hostName}:${port}/`);
});
