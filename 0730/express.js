const express = require("express");
const app = express();
app.listen(8080, () => {
  console.log("服务器已经启动，express");
});

// 处理静态资源
// 如果使用这个方法写静态资源，在访问的时候，是不需要带上指定的文件夹的
// app.use(express.static('views'));
// app.use(express.static('assets'));

// 如果使用下面的方式实现静态资源处理，就需要带上指定目录了
// app.use(url前面所需的文件夹名称,指定的静态资源目录);
app.use("/views", express.static("views"));
app.use("/assets", express.static("assets"));
// 其实这两个方法是一样的，因为前面的参数是可选的

app.get("/", (req, res) => {
  res.send("hello,world");
  /* 
    res.send这是express提供的方法，已经设置好了请求头，
    如果直接用原来的res.end是会乱码的
  */
});
