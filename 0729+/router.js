/**
 * 路由层：判断请求，把请求发送给不同的控制器
 */

//  引入处理请求的controller
const controller = require("./controller.js");

/**
 *
 * @param {object} req 请求对象
 * @param {object} res 响应对象
 */
let router = function(req, res) {
  // 判断请求的地址，分发请求
  // 处理页面中的静态资源
  if (req.url.startsWith("/assets")) {
    controller.staticResource(req, res);
  }
  // 处理主页
  else if (req.url === "/views/index.html") {
    controller.getIndexHtml(req, res);
  }
  // 处理add页面
  else if (req.url === "/views/add.html") {
    controller.getAddHtml(req, res);
  }
  // 处理增加英雄请求
  else if (req.url === "/addNewHero" && req.method === "POST") {
    controller.addNewHero(req, res);
  }
};

// 模块出口
module.exports = router;
