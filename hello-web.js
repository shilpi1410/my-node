// hello-web.js

const http = require("http");

const PORT = 4000;
const HOST = "0.0.0.0"; // listen on all network interfaces

const server = http.createServer((req, res) => {
  res.statusCode = 200;                        // HTTP status: 200 OK
  res.setHeader("Content-Type", "text/html");  // Tell browser it's HTML
  res.end("Hello World.... from Stonetusker — where ideas take shape.!!!!\n");
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

