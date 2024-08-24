const mySql = require("mysql");

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  connection.query("CREATE DATABASE mydb", (err, result) => {
    if (err) throw err;
    console.log("Database created");
  });
});
