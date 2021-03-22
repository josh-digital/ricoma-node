const { createPool } = require("mysql");
const pool = createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Admin@123",
  database: "ricoma-db1",
});

module.exports = pool;
