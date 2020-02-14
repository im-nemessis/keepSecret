const express = require("express");
const app = express();

const bodyparser = require("body-parser");

app
  .route("/")
  .get((req, res) => {
    res.send("'/secret/get' post route");
  })
  .post((req, res) => {
    res.send("'/secret/get' post route");
  });

module.exports = app;
