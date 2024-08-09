const { createServer } = require("node:http");
const nodemailer = require("nodemailer");

const hostName = "127.0.0.1";
const port = 3000;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "temptest144@gmail.com",
    pass: "jeus xpwe ayjz ryxj",
  },
});

const mailOptions = {
  from: "temptest144@gmail.com",
  to: "hemelorten7@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else console.log("Mail send" + info.response);
});

const server = createServer((req, res) => {
  res.write();
  res.end();
});

server.listen(port, hostName, () => {
  console.log(`The server is running at https://${hostName}:${port}`);
});
