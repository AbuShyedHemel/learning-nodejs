const { createServer } = require("node:http");
const url = require("url");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = "." + q.pathname;
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
