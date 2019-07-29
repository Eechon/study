const http = require("http");
const queryString = require("querystring");
const server = http.createServer();
const fs = require("fs");
server.listen(8080, () => {
  console.log("http://127.0.0.1:8080");
});

server.on("require", (req, res) => {
  if (req.url.startsWith("/assets")) {
    // 读取静态资源，如果静态资源是css，就加头，
    if (req.url.endsWith(".css")) {
      res.setHeader("Content-Type", "text/css;charset=utf-8");
    }
    fs.readFile(__dirname + req.url, (err, data) => {
      if (err) console.log(err);
      res.end(data);
    });
  } else if (req.url === "/views/add.html") {
    fs.readFile("./views/add.html", (err, data) => {
      /* 如果是add.html ，这个页面是没有动态数据的，所以直接读取就好了 */
      if (err) console.log(err);
      res.end(data);
    });
  } else if (req.url === "/addNewHero" && req.method === "POST") {
    // post传输数据是一块一块传输的，所以需要和并到一起
    let data = "";
    req.on("data", chunck => {
      //注册一个data时间， 这个事件是正在接受数据事件
      // 把每次接收到的数据，合并到一起
      data += chunck;
    });
    req.on("end", () => {
      // 先前data事件得到的数据是一个url编码的格式，需要解析成对象
      data = queryString.parse(data);
      fs.readFile("./data/heros.json", "utf-8", (err, content) => {
        if (err) console.log(err);
        let arr = JSON.parse(content);
        let id = arr[0].id;
        for (let i = 1; i < arr.length; i++) {
          if (arr[i].id > id) {
            id = arr[i].id;
          }
        }
        data.id = id + 1;
        // 数据合并
        arr.push(data);
        let jsonStr = JSON.stringify(arr);
        // 写入文件
        fs.writeFile("./data/heros.json", jsonStr, "utf-8", err => {
          if (err) {
          } else {
            let result = JSON.stringify({ code: 200, msg: "新增成功" });
            res.end(result);
          }
        });
      });
    });
  }
}); /* end require */
