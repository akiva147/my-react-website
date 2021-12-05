const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const home = require("./routes/Home");
const academicWriting = require("./routes/AcademicWriting");
const photoAlbum = require("./routes/PhotoAlbum");
const resume = require("./routes/Resume");
const rickRolled = require("./routes/RickRolled");

app.use("/", home);
app.use("/academicwriting", academicWriting);
app.use("/photoAlbum", photoAlbum);
app.use("/resume", resume);
app.use("/rickrolled", rickRolled);

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
