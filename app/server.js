const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Azure AKS Terraform DevOps Project Running Successfully");
});

server.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
