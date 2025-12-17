import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "binongofeb0206",
  database: "my_first-Db",
  waitForConnections: true,
  connectionLimit: 1,
  queueLimit: 0,
});

export default pool;
