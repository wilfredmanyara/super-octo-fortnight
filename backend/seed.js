const csv = require("csv-parser");
const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("./config.js");
const db = require("./app/models");
const Homes = db.Homes;

//Read in housing data
fs.createReadStream("./seed_data/redfin_data.csv")
  .pipe(csv())
  .on("data", (row) => {
    // Call mongoclient and insert
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("hearth");
      var homeToInsert = new Homes(row);

      // console.log(homeToInsert);
      dbo.collection("houses").insertOne(homeToInsert, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
  })
  .on("end", () => {
    console.log("CSV file has been processed");
  });

// Read in User data
fs.createReadStream("./seed_data/user_data.csv")
  .pipe(csv())
  .on("data", (row) => {
    // Call mongoclient and insert
    MongoClient.connect(url, async function (err, db) {
      if (err) throw err;
      var dbo = db.db("hearth");
      var myObj = row;
      myObj.password = await bcrypt.hash(myObj.password, BCRYPT_WORK_FACTOR);
      myObj.isAdmin = true;
      console.log("User to insert: ");
      console.log(myObj);

      dbo.collection("users").insertOne(myObj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
  })
  .on("end", () => {
    console.log("CSV file has been processed");
  });
