const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "https://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models")

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        usUnifiedTopology: true
    })
    .then(() => {
        console.log("connected to database");
    })
    .catch(err => {
        console.log("Error: Cannot connect to the database...see: ", err);
        process.exit();
    });

// Test Route For Server
app.get("/", (req, res) => {
    res.json({message: "Welcome to the backend server"});
});

require("./app/routes/homes.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`)
})