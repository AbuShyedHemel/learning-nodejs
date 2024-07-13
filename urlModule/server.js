const { createServer } = require("node:http");
const url = require("node:url");
const add = "http://localhost:8080/default.htm?year=2017&month=february";
const q = url.parse(add, true);

console.log("Hostname:", q.hostname);
console.log("Protocol", q.protocol);
console.log("Protocol", q.port);
console.log(q.query);
