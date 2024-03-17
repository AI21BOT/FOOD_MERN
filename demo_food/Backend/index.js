const express = require("express");
const app = express();
const mongoDB = require("./db.js");

const PORT = 3000;
mongoDB();

app.get("/", (req, res) => {
  res.send("HEllo");
});

app.listen(PORT, (req, res) => {
  console.log(`PORT run ${PORT}`);
});
