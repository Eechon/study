/**
 * 服务器代码，创建服务器
 */
const http = require("http");
const server = http.createServer();
const fs = require("fs");
server.listen(8080, () => {
  console.log("服务器已开启，");
});
server.on("request", (req, res) => {
  if (req.url.startsWith("./assets") || req.url.startsWith("./views")) {
    // 处理css请求的响应头
    if (req.url.endsWith(".css")) {
      res.setHeader("Content-Type", "text/css");
    }
    fs.readFile("./0727" + req.url, (err, data) => {
      // 不写throw是因为，throw会中断服务器
      if (err) console.log(err);
      res.end(data);
    });
  } else {
    if (req.url === "./getAllHeros") {
      fs.readFile("./data/heros.json", (err, data) => {
        res.end(data);
      });
    }
  }
});
