const express = require("express");
const router = express.Router();
const createPostTemplate = require("../models/CreatePostModel");

router.post("/", (req, res) => {
  const postCreated = new createPostTemplate({
    header: req.body.header,
    description: req.body.description,
  });
  postCreated
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/", (req, res) => {
  createPostTemplate.find().then((foundPost) => res.json(foundPost));
});

module.exports = router;
