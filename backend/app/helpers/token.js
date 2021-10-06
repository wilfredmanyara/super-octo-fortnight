const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../../config");

/** Sign the token and return it */

function createToken(user) {
  let payload = {
    email: user.email,
    isAdmin: user.isAdmin || false,
  };

  return jwt.sign(payload, SECRET_KEY);
}

module.exports = { createToken };
