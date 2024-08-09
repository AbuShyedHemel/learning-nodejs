const { createServer } = require("node:http");
const formidable = require("formidable");
var fs = require("node:fs");

const hostName = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  if (req.url == "/fileupload") {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      const oldpath = files.filetoupload?.[0].filepath;
      console.log(oldpath);
      const newpath = "./" + files.filetoupload?.[0].originalFilename;
      fs.rename(oldpath, newpath, (err) => {
        // if (err) throw err;
        console.log(err);
        res.write("File uploaded and moved!");
        res.end();
      });
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<form action="fileupload" method="post" enctype="multipart/form-data"><input type="file" name="filetoupload"><br><input type="submit"> </form>'
    );
    return res.end();
  }
});

server.listen(port, hostName, () => {
  console.log(`The server is running at http://${hostName}:${port}/`);
});
