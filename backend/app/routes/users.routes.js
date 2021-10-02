

const jsonschema = require("jsonschema");

const express = require("express");
const { ensureCorrectUserOrAdmin, ensureAdmin } = require("../middleware/auth");
const { BadRequestError } = require("../../expressError");
const User = require("../models/user.model");
const { createToken } = require("../helpers/token");
const userNewSchema = require("../schemas/userNew.json");

const router = express.Router();

// Post a user and return a user and token
// Routes only for admins
router.post("/", ensureAdmin, async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, userNewSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const user = await User.create(req);
        const token = createToken(user);
        return res.status(201).json({ user, token });
    } catch (err) {
        return next(err);
    }
});


// Get users only admins can access this

router.get("/", ensureAdmin, async function (req, res, next) {
    try {
        const users = await User.findAll();
        return res.json({ users });
    } catch (err) {
        return next(err);
    }
});

// GET for a username

router.get("/:username", ensureCorrectUserOrAdmin, async function (req, res, next) {
    try {
        const user = await User.get(req.params.username);
        return res.json({ user });
    } catch (err) {
        return next(err);
    }
});

//Update a user
// Firstname, lastname, password, email

router.patch("/:username", ensureCorrectUserOrAdmin, async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, userUpdateSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const user = await User.update(req.params.username, req.body);
        return res.json({ user });
    } catch (err) {
        return next(err);
    }
})

//Delete a user
router.delete(":/username", ensureCorrectUserOrAdmin, async function (req, res, next) {
    try{
        await User.remove(req.params.username);
        return res.json({ deleted: req.params.username });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;

module.exports = app => {
    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();

    // Admin creation of a user
    router.post("/", ensureAdmin, users.create);

    // Admin get all users
    router.get("/", ensureAdmin, users.getAllUsers);

    // Get a single user
    router.get("/:username", ensureCorrectUserOrAdmin, users.getAUser);

    // Update A User
    router.patch("/:username", ensureCorrectUserOrAdmin, users.updateAUser);

    // Register a user during SignUp
    router.delete("/:username", ensureCorrectUserOrAdmin, users.removeAUser);

    app.use("/api/users", router);
}