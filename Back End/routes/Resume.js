const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).send("<h1>Resume</h1>");
});

module.exports = router;
