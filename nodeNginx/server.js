const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("welcome to root page");
  } else if (req.url === "/login") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("welcome to login page");
  } else {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 not found");
  }
});

server.listen(port, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
