const express = require("express");
const router = express.Router();
let academic_writing = require("../data");

router.get("/", async (req, res) => {
  res.status(200).send(await JSON.stringify(academic_writing));
});

module.exports = router;
