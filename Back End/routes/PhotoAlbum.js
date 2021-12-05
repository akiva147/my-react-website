const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).send("<h1>Photo albun</h1>");
});

module.exports = router;
