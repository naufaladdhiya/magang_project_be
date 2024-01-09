require("dotenv").config();

const DB_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT;
const IMGBB_API_KEY = process.env.IMGBB_API_KEY;
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  DB_URL,
  PORT,
  IMGBB_API_KEY,
  JWT_SECRET,
};
