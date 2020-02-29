const http = require("http");

const requestListener = (req, res) => {
  console.dir(req, { depth: 0 });
  console.dir(res, { depth: 0 });
  res.write("Hello Test\n");
  res.end();
};

const server = http.createServer();

server.on("request", requestListener);

server.listen(8080, () => {
  console.log("SERVER IS LISTENING ON PORT, http://localhost:8080");
});
