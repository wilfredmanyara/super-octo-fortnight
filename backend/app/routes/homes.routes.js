module.exports = app => {
    const homes = require("../controllers/homes.controllers.js");

    var router = require("express").Router();

    //Retrieve All Houses
    router.get("/", homes.findAll);

    app.use("/api/homes", router);
}