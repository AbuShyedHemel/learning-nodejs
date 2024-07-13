const { createServer } = require("node:http");
const fileSystem = require("node:fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  //   fileSystem.appendFile(
  //     "index.txt",
  //     "Hey This is file appendFile method",
  //     (err) => {
  //       if (err) throw err;
  //       console.log("Saved!");
  //     }
  //   );
  //   fileSystem.open("index.txt", "w", (err) => {
  //     if (err) throw err;
  //     console.log("Open");
  //   });
  ////replace txt//////
  //   fileSystem.writeFile("index.txt", "Hello from write File", (err) => {
  //     if (err) throw err;
  //     res.statusCode = 200;
  //     res.setHeader("Content-Type", "text/plain");
  //     res.write("Replacing existing text to new text :)");
  //     return res.end();
  //   });
  /////rename file/////
  fileSystem.rename("index.txt", "test.txt", () => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("File name changed!");
    return res.end();
  });
  /////For Delete file /////////
  //   fileSystem.unlink("index.txt", () => {
  //     res.statusCode = 200;
  //     res.setHeader("Content-Type", "text/plain");
  //     res.write("File Deleted");
  //     return res.end();
  //   });
  ///// For read file /////////
  //   fileSystem.readFile("index.txt", (err, data) => {
  //     res.statusCode = 200;
  //     res.setHeader("Content-Type", "text/plain");
  //     res.write(data);
  //     return res.end();
  //   });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
