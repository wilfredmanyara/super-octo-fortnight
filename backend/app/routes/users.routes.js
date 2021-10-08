const { ensureCorrectUserOrAdmin, ensureAdmin } = require("../middleware/auth");

module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Admin creation of a user
  router.post("/", ensureAdmin, users.create);

  // Admin get all users
  router.get("/", ensureAdmin, users.getAllUsers);

  // Get a single user
  router.get("/:email", ensureCorrectUserOrAdmin, users.getAUser);

  // Update A User
  router.patch("/:email", ensureCorrectUserOrAdmin, users.updateAUser);

  // Register a user during SignUp
  router.delete("/:email", ensureCorrectUserOrAdmin, users.removeAUser);

  app.use("/api/users", router);
};
