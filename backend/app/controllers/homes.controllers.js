const db = require("../models");
const Homes = db.Homes;

//Create a New Home
exports.create = (req, res) => {
    //validate address
    if (!req.body.address) {
        res.status(400).send({message: "You must include an address"})
        return;
    }

    const home = new Homes(
        {
            saleType: req.body.saleType,
            soldDate: req.body.soldDate,
            propertyType: req.body.propertyType,
            address: req.body.address,
            city: req.body.city,
            stateOrProvince: req.body.stateOrProvince,
            zipOrPostalCode: req.body.zipOrPostalCode,
            price: req.body.price,
            beds: req.body.beds,
            baths: req.body.baths,
            location: req.body.location,
            squareFeet: req.body.squareFeet,
            lotSize: req.body.lotSize,
            yearBuilt: req.body.yearBuilt,
            daysOnMarket: req.body.daysOnMarket,
            pricePerSquareFoot: req.body.pricePerSquareFoot,
            hoaPerMonth: req.body.hoaPerMonth,
            status: req.body.status,
            nextOpenHouseStartTime: req.body.nextOpenHouseStartTime,
            nextOpenHouseEndTime: req.body.nextOpenHouseEndTime,
            url: req.body.url,
            source: req.body.source,
            mlsNumber: req.body.mlsNumber,
            favorite: req.body.favorite,
            interested: req.body.interested,
            latitude: req.body.latitude,
            longtitude: req.body.longtitude
        }
    )

    home.save(home)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error encountered while creating the home"
            });
        });
};

//find all homes in DB
exports.findAll = (req, res) => {
    console.log("MADE IT TO FIND ALL HOMES CONTROLLER")
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