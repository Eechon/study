const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");
const app = express();

app.listen(8080, () => {
  console.log("服务已开启http://127.0.0.1:8080");
});
// 静态资源
app.use("/assets", express.static("assets"));
// 设置模版引擎
app.set("view engine", "ejs");
// 注册body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));

// 最后引入router
app.use(router);
