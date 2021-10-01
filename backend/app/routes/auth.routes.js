


const jsonschema = require("jsonschema");

const User = require("../models/user.model");
const express = require("express");
const router = new express.Router();
const { createToken } = require("../helpers/token");
const userAuthSchema = require("../schemas/userAuth.json");
const userRegisterSchema = require("../schemas/userRegister.json");
const { BadRequestError } = require("../../expressError");

// POST to /auth/token with { username, password }

router.post("/token", async function (req, res, next) {
    const validator = jsonschema.validate(req.body, userAuthSchema);
    if (!validator.valid) {
        const errs = validator.errors.map(e => e.stack);
        throw new BadRequestError(errs);
    };

    const { username, password } = req.body;
    const user = await User.authenticate(username, password);
    const token = createToken(user);
    return res.json({ token });
});

// POST to auth/register: { user } => { token }

router.post("/register", async function (req, res, next) {
    const validator = jsonschema.validate(req.body, userRegisterSchema);
    if (!validator.valid) {
        const errs = validator.errors.map(e => e.stack);
        throw new BadRequestError(errs);
    }

    const newUser = await User.register({ ...req.body, isAdmin: false});
    const token = createToken(newUser);
    return res.status(201).json({ token });
});

module.exports = router;