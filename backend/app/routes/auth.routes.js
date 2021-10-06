module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Authenticate a User During Login
  router.post("/token", users.authenticate);

  // Register a user during SignUp
  router.post("/register", users.create);

  app.use("/api/auth", router);
};
