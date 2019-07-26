const http = require("http");

const server = http.createServer();
// 给服务器绑定ip和端口
// server.listen(端口,ip,回调函数)
server.listen(8080, "127.0.0.1", () => {
  console.log("服务器已经启动");
});
// 给服务器注册浏览器请求服务事件

server.on("request", (req, res) => {
  // req是

  console.log("有请求进来了");
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.end("你好");
});
