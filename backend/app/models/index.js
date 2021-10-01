const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.Homes = require("./homes.model.js")(mongoose);
db.Users = require("./user.model.js")(mongoose);

module.exports = db;