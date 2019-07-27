const http = require("http");
const fs = require("fs");

const server = http.createServer();
server.listen(8080, "127.0.0.1", () => {
  console.log("封装静态资源处理,服务器已开启");
});
server.on("request", (req, res) => {
  // console.log("./0726" + req.url);
  if (req.url.indexOf("/assets") === 0 || req.url.startsWith("/views")) {
    if (req.url.endsWith(".css")) {
      // 如果是css文件加一个响应头
      res.setHeader("Content-Type", "text/css");
    }
    // console.log("./0726" + req.url);
    fs.readFile("./0726" + req.url, (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  }
});
