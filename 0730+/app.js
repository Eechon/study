/**
 * app.js一般实现
 * 1.开服务器
 * 2.注册中间件
 * 3.设置模版引擎
 */
// 这里express代替之前的http来搭建服务器
const express = require("express");
// const router = require.Router();
// app.js中不用router功能，router.js再引入
const router = require("./router");
// 创建app对象
const app = express();
app.listen(8080, () => {
  console.log("服务器已经开启，app.js");
});

// express引用静态资源
app.use("/assets", express.static("assets"));

app.set("view engine", "ejs");

// 注册中间件
app.use(router);
