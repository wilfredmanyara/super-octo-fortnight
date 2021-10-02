const db = require("../models");
const Users = db.Users;
const bcrypt = require("bcrypt");
const {
    NotFoundError,
    BadRequestError,
    UnauthorizedError
} = require("../../expressError");

const { BCRYPT_WORK_FACTOR } = require("../../config.js");

//Create a New User
exports.create = (req, res) => {

    let hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const newUser = new Users({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hashedPassword,
                isAdmin: req.body.isAdmin
    })

    newUser.save(newUser)
        .then(data => {
            // res.send(data);
            return data;
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occured while creating user"
            })
        })
}