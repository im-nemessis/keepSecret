const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("secret home route");
});

router.use("/add", require("./addsecret"));
router.use("/get", require("./getsecret"));

module.exports = router;
