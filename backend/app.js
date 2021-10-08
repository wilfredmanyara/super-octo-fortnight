const express = require("express");
const cors = require("cors");
const { NotFoundError } = require("./expressError");
const { authenticateJWT } = require("./app/middleware/auth");
const morgan = require("morgan");
const db = require('./db')
const app = express();

var corsOptions = {
    origin: "http://localhost:3000",
};

//register middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(authenticateJWT);

//register routes
require("./app/routes/auth.routes")(app);
require("./app/routes/homes.routes")(app);
require("./app/routes/users.routes")(app);

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

module.exports = app;