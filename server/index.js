require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRouter = require("./routes/api");


app.use("/api", apiRouter);
app.use("/", express.static(path.resolve(__dirname + "/../client/build"), {
  cacheControl: false
}));


module.exports = app;

