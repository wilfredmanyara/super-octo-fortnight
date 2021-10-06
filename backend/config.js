require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret-key-dev";

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

module.exports = {
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};
