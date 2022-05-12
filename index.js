const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is running on Docker in AWS");
});

app.get("/me", (req, res) => {
  res.send("Hi I am Colin");
});

app.listen(5000, () => {
  console.log("listening");
});
