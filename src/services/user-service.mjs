import { pool } from "../config/database-ekompetensiku.mjs";
import { ResponseError } from "../error/response-error.js";

const getUserByNIP = async (nip) => {
  const [rows] = await pool.query("SELECT * FROM user WHERE nip = ?", [nip]);

  if (!rows.length) {
    throw new ResponseError(404, "User tidak ditemukan");
  }

  return {
    status: 200,
    data: rows[0],
  };
};

export { getUserByNIP };
