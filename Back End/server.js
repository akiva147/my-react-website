const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const posts = require("./routes/Posts");

const home = require("./routes/Home");
const academicWriting = require("./routes/AcademicWriting");
const photoAlbum = require("./routes/PhotoAlbum");
const resume = require("./routes/Resume");
const rickRolled = require("./routes/RickRolled");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () => {
  console.log("Database connected");
});

app.use(express.json());
app.use(cors());
app.use("/posts", posts);
app.use("/", home);
app.use("/academicwriting", academicWriting);
app.use("/photoAlbum", photoAlbum);
app.use("/resume", resume);
app.use("/rickrolled", rickRolled);

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
