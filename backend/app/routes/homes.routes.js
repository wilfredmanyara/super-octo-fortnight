module.exports = app => {
    const homes = require("../controllers/homes.controllers.js");

    var router = require("express").Router();

    //Retrieve All Houses
    router.get("/", homes.findAll);

    //Post to A Home
    router.post("/", homes.create);

    app.use("/api/homes", router);
}