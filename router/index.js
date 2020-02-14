const express = require("express");
const router = express.Router();
var secretModule = require("./secret");

router.use("/secret", secretModule);

router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
