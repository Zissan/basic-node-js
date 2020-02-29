const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("HELLO WORLD\n");
});

server.listen(8080, () => {
  console.log(`Server is listening on http://localhost:8080`);
});
