/**
 * 服务器代码，创建服务器
 */
const http = require("http");
const template = require("art-template");
const server = http.createServer();
const fs = require("fs");
server.listen(8080, () => {
  console.log("服务器已开启，http://127.0.0.1:8080");
});
server.on("request", (req, res) => {
  // 读取静态资源，如css,js,img等
  if (req.url.startsWith("/assets")) {
    // 处理css请求的响应头
    if (req.url.endsWith(".css")) {
      res.setHeader("Content-Type", "text/css");
    }
    fs.readFile("." + req.url, (err, data) => {
      // 不写throw是因为，throw会中断服务器
      if (err) console.log(err);
      res.end(data);
    });
  } else {
    // 处理动态页面逻辑
    if (req.url === "/views/index.html") {
      // 如果是主页的话，就
      fs.readFile(__dirname + "/data/heros.json", "utf-8", (err, data) => {
        // __dirname是获取当前目录
        if (err) console.log(data);
        console.log(data); //验证还是json字符串
        let arr = JSON.parse(data);
        let html = template(__dirname + "/views/index.html", { arr });
        res.end(html);
      });
    } else if (req.url === "/views/add.html") {
      fs.readFile(__dirname + "/views/add.html", (err, data) => {
        // 与上面的不同的是，这里直接读取静态页面就行了，
        console.log(data);
        if (err) console.log(err);
        res.end(data);
      });
    }
    // 是否是添加的请求
    // 约定好,添加接口的名字
    // 还要求必须是post的请求
    if (req.url === "/addHero" && req.method === "GET") {
      // console.log("添加英雄的请求过来了");

      //读取旧数据，转化为数组
      fs.readFile("./data/heros.json", (err, data) => {
        if (err) console.log(err);
        let arr = JSON.parse(data);
        // 创建的新数据缺少一个id。取出旧数据中最大的一个id，id+1为新数据的id
        let id = 0;
        arr.forEach(e => {
          if (e.id > id) {
            id = e.id;
          }
        });

        result.query.id = id + 1;
        arr.push(result.query);
        let jsonStr = JSON.stringify(arr);
        fs.writeFile("./data/heros.json", jsonStr, "utf-8", err => {
          if (err) console.log(err);
          res.end(JSON.stringify({ code: 200, msg: "操作成功" }));
        });
      });
    }
  }
});
