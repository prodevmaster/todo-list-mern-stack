const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const router = require("./routes/router.js");
const app = express();
// define vars
require("dotenv").config();
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 3001;
// handle the modules for the app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(router);
// Handle the server running

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("database connected!");
    app.listen(PORT);
  })
  .catch((e) => {
    console.log("cannot connect to the database!");
    console.log(e.message);
  });
