/**
 * app.js通常：
 * 1.开服务器
 * 2.注册中间件
 * 3.设置默认的模版引擎
 */
const express = require("express");
// const fs = require("fs");
// 引入路由层
const router = require("./router");
const app = express();

app.listen(8080, () => {
  console.log("服务器已经启动app.js");
});

app.use("/assets", express.static("assets"));

app.set("view engine", "ejs");

// app.get("/index", (req, res) => {
//   fs.readFile("./data/heros.json", "utf-8", (err, data) => {
//     if (err) console.log(err);
//     let arr = JSON.parse(data);
//     // 使用express提供的渲染方法渲染
//     res.render("index", { arr });
//   });
// });

// 注册中间件
app.use(router);
