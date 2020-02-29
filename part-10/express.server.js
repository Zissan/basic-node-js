const express = require("express");

const server = express();

server.set("view engine", "ejs");

server.get("/", (req, res) => {
  res.render("home");
});

server.get("/about", (req, res) => {
  res.render("aboutus");
});

server.get("/contact", (req, res) => {
  res.render("contactus");
});

server.listen(8080, () => {
  console.log(`Server is listening on http://localhost:8080`);
});
