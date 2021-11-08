require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret-key-dev";

const PORT = +process.env.PORT || 3001;

// Use the development database, testing database, or production via env
// variables
function getDatabaseUri() {
  return process.env.NODE_ENV === "test"
    ? "app_test"
    : process.env.DATABASE_URL || "app";
}

// Set bcrypt factor lower during testing
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

console.log("Application Configuration: ".green);
console.log("SECRET_KEY ".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, getDatabaseUri());
console.log("---");

module.exports = {
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
  PORT,
  getDatabaseUri,
};
