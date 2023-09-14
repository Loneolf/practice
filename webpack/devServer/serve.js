const http = require("http");

http.createServer((req, res) => {
  res.statusCode = 200;
  console.log(req.url)
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!");
}).listen(9000, () => {
    console.log('服务已开启')
});