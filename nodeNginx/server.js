const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;
const server = http.createServer((req, res) => {
  res.data("ssss");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
