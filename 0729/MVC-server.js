/**
 * 分层思想：
 *  1js负责开启服务器
 *  1js负责判断请求
 *  1js负责处理请求和返回请求
 *  1js负责读写json文件
 */

const http = require("http");
const server = http.createServer();

// 引入router路由层
const router = require("./MVC-router.js");

server.listen(8080, () => {
  console.log("http://127.0.0.1:8080");
});

server.on("request", (req, res) => {
  // console.log("server");
  router(req, res);
}); /* end require */
