const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).send("<h1>Home page</h1>");
});

module.exports = router;
