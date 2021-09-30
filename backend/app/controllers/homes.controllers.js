const db = require("../models");
const Homes = db.Homes;

//find all homes in DB
exports.findAll = (req, res) => {
    const address = req.query.address;
    var condition = address ? {address: { $regex: new RegExp(address), $options: "i"}} : {};

    Homes.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while retrivieng homes data"
            });
        });

};