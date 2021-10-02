const express = require("express");
const cors = require("cors");

const { NotFoundError } = require("./expressError");

const { authenticateJWT } = require("./app/middleware/auth");
// const authRoutes = require("./app/routes/auth.routes.js");
// const homesRoutes = require("./app/routes/homes.routes.js")
const usersRoutes = require("./app/routes/users.routes.js")

const morgan = require("morgan");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"))
app.use(authenticateJWT)

//register routes
// app.use("/auth", authRoutes);
require("./app/routes/auth.routes")(app);
// app.use("/homes", homesRoutes);
require("./app/routes/homes.routes")(app);
require("./app/routes/users.routes")(app);
// app.use("/users", usersRoutes);

const db = require("./app/models")
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("connected to database");
    })
    .catch(err => {
        console.log("Error: Cannot connect to the database...see: ", err);
        process.exit();
    });

// handle 404 errors
app.use(function (req, res, next) {
    return next(new NotFoundError());
});


// Generic Error Handler
app.use(function (err, req, res, next) {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error: { message, status },
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`)
});