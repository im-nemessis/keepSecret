const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const md5 = require("md5");
const morgan = require("morgan");
// const mongoose = require("mongoose");

const app = express();

const port = process.env.port || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, console.log("listening on port 3000"));
