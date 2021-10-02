const db = require("../models");
const Users = db.Users;
const bcrypt = require("bcrypt");
const {
    NotFoundError,
    BadRequestError,
    UnauthorizedError
} = require("../../expressError");
const userRegisterSchema = require("../schemas/userRegister.json");
const userAuthSchema = require("../schemas/userAuth.json");

const { BCRYPT_WORK_FACTOR } = require("../../config.js");
const jsonschema = require("jsonschema");
const { createToken } = require("../helpers/token");

//Create a New User
exports.create = async (req, res) => {

    const validator = jsonschema.validate(req.body, userRegisterSchema);
    if (!validator.valid) {
        const errs = validator.errors.map(e => e.stack);
        throw new BadRequestError(errs);
    }

    let hashedPassword = await bcrypt.hash(req.body.password, BCRYPT_WORK_FACTOR);

    const newUser = new Users({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hashedPassword,
                isAdmin: false
    })
    const token = createToken(newUser)

    newUser.save(newUser)
        .then(data => {
            res.status(201).send({ token });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occured while creating user"
            })
        })
}

exports.authenticate = async (req, res, next) => {

    const validator = jsonschema.validate(req.body, userAuthSchema);
    if (!validator.valid) {
        const errs = validator.errors.map(e => e.stack);
        throw new BadRequestError(errs);
    };

    const { email, password } = req.body;

    let user = await Users.findOne({
        email: email
    });

    if(user) {
        const isValid = await bcrypt.compare(password, user.password)
        if (isValid === true) {
            delete user[password];
            const token = createToken(user);
            return res.status(200).json({ token });
        } else {
            next(new UnauthorizedError());
        }
    }

    next(new NotFoundError());

}