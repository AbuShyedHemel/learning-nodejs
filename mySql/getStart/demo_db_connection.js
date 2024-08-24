const { createPool } = require("mysql");

var con = createPool({
  host: "localhost",
  user: "hemel",
  password: "1234",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});
