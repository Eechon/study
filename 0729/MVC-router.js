/**
 * 路由层：判断请求，发送给不同的控制器
 *
 */

// 处理请求代码封装进 controller里面，这就不用引入queryString，引入controller
// const queryString = require("querystring");
const controller = requure("./MVC-controller.js");

let router = function(req, res) {
  if (req.url.startsWith("/assets")) {
    controller.staticResource(req, res);
  } else if (req.url === "/views/add.html") {
    controller.getAddHtml(req, res);
  } else if (req.url === "/views/index.html") {
    controller.getIndexHtml(req, res);
  } else if (req.url === "/addNewHero" && req.method === "POST") {
    controller.addNewHero(req, res);
  }
};

module.exports = router;
