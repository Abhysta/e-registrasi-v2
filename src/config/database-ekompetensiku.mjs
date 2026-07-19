import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "aysta123",
  database: "e_kompetensiku",
  waitForConnections: true,
  connectionLimit: 10,
});

export { pool };
