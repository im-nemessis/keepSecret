const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Secret = require("../../../models/secret ");
// const route = express.Router();
const bodyparser = require("body-parser");

app
  .route("/")
  .get((req, res) => {
    mongoose.connect("mongodb://localhost:27017/UserSecretDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const secret = new Secret({
      name: "shubham",

      username: "nemessis",

      password: "xyz",

      secret: "i loves xylo"
    });

    secret.save();
    console.log("saved !!");
    res.send("'/secret/add' add route");
  })

  .post((req, res) => {
    res.send("'/secret/add' post route");
  });

module.exports = app;
