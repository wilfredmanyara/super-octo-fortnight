


// const jsonschema = require("jsonschema");

// const Users = require("../models/user.model");
// const express = require("express");
// const router = new express.Router();
// const { createToken } = require("../helpers/token");
// const userAuthSchema = require("../schemas/userAuth.json");
// const userRegisterSchema = require("../schemas/userRegister.json");
// const { BadRequestError } = require("../../expressError");

// POST to /auth/token with { username, password }

// router.post("/token", async function (req, res, next) {
//     const validator = jsonschema.validate(req.body, userAuthSchema);
//     if (!validator.valid) {
//         const errs = validator.errors.map(e => e.stack);
//         throw new BadRequestError(errs);
//     };

//     const { username, password } = req.body;
//     const user = await Users.authenticate(username, password);
//     const token = createToken(user);
//     return res.json({ token });
// });



module.exports = app => {
    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();

    //Retrieve All Houses
    router.post("/token", users.authenticate);

    //Post To Register
    router.post("/register", users.create);

    app.use("/api/auth", router);
}