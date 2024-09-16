const mySql = require("mysql");

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "mydb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  const sql =
    "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Table created");
  });
});
