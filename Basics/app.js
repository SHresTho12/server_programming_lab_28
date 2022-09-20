// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;


const server = http.createServer(function (req, res) {
 
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end("Hello World\n");
});

