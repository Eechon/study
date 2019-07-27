/**
 * 服务器代码，创建服务器
 */
const http = require("http");
const template = require("art-template");
const server = http.createServer();
const fs = require("fs");
server.listen(8080, () => {
  console.log("服务器已开启，http://127.0.0.1:8080");
});
server.on("request", (req, res) => {
  // 读取静态资源，如css,js,img等
  if (req.url.startsWith("/assets")) {
    // 处理css请求的响应头
    if (req.url.endsWith(".css")) {
      res.setHeader("Content-Type", "text/css");
    }
    // console.log(req.url);
    fs.readFile("." + req.url, (err, data) => {
      // 不写throw是因为，throw会中断服务器
      if (err) console.log(err);
      res.end(data);
    });
  } else {
    // 处理动态页面逻辑
    if (req.url === "/views/index.html") {
      // 如果是主页的话，就
      fs.readFile(__dirname + "/data/heros.json", "utf-8", (err, data) => {
        // __dirname是获取当前目录
        if (err) console.log(data);
        console.log(data); //验证还是json字符串
        let arr = JSON.parse(data);
        let html = template(__dirname + "/views/index.html", { arr });
        res.end(html);
      });
    }
  }
});
