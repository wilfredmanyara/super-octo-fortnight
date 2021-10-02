module.exports = app => {
    const homes = require("../controllers/homes.controllers.js");
    // const { ensureCorrectUserOrAdmin, ensureAdmin } = require("../middleware/auth");

    var router = require("express").Router();

    //Retrieve All Houses
    router.get("/", homes.findAll);

    //Post to A Home
    router.post("/", homes.create);

    app.use("/api/homes", router);
}