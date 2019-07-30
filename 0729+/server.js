/**
 * 服务器
 *
 */

//  引入http模块
const http = require("http");
// 使用http模块中的createServer()创建web服务器
const server = http.createServer();

// 引入router层
const router = require("./router.js");

server.listen(8080, () => {
  console.log("http://127.0.0.1:8080");
});
server.on("request", (req, res) => {
  router(req, res);
});
