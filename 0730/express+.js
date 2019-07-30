const express = require("express");
const fs = require("fs");
const app = express();

app.listen(8080, () => {
  console.log("服务器已经启动express");
});

app.use("/views", express.static("views"));
app.use("/assets", express.static("assets"));

app.set("view engine", "ejs");

app.get("/index", (req, res) => {
  fs.readFile("./data/heros.json", "utf-8", (err, data) => {
    if (err) console.log(err);
    let arr = JSON.parse(data);
    // 使用express提供的渲染方法渲染
    res.render("index", { arr });
  });
});
