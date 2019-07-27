// 搭建静态页面的服务器

const http = require("http");
const fs = require("fs");
const server = http.createServer();
server.listen(8080, "127.0.0.1", () => {
  console.log("服务器已经开启");
});
server.on("request", (req, res) => {
  // 判断不同的请求地址，返回不同的页面
  if (req.url === "/index.html") {
    // 判断是不是请求index.html页面，是的话读取views中的index.html文件
    fs.readFile("./0726/views/index.html", (err, data) => {
      if (err) throw err;
      res.end(data);
    }); /* end readfile */
  } else if (req.url === "/list.html") {
    fs.readFile("./0726/views/list.html", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (req.url === "/detail.html") {
    fs.readFile("./0726/views/detail.html", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (req.url === "/assets/css/list.css") {
    fs.readFile("./0726/assets/css/list.css", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (req.url === "/assets/js/list.js") {
    fs.readFile("./0726/assets/js/list.js", (err, data) => {
      if (err) throw err;
      // 其实返回给浏览器的内容不推荐转换为字符串转换在返回 —— 因为服务器发数据发送给浏览器的过程中，是要把这些所有的数据，先序列化 —— 转换为字节 —— buffer
      res.end(data);
    });
  } else if (req.url === "/assets/images/1.jpg") {
    fs.readFile("./0726/assets/images/1.jpg", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else {
    res.end("404");
  }
}); /* end request */
