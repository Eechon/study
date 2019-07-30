/**
 * 1.引入express
 * 2.调用Router方法，创建一个router对象
 * 3.使用router，代替app对象实现所有请求监听
 * 4.把router对象暴露出去
 */

// const fs = require("fs");
// 引入controller
const controller = require("./controller");

const express = require("express");
const router = express.Router();

// 使用router 对象，代替app对象实现所有请求监听
router.get("/index", (req, res) => {
  // fs.readFile("./data/heros.json", "utf-8", (err, data) => {
  //   if (err) console.log(err);
  //   let arr = JSON.parse(data);
  //   // 使用express提供的渲染方法渲染
  //   res.render("index", { arr });
  // });
  controller.getIndex(req, res);
});

module.exports = router;
