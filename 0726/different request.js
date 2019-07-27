const http = require("http");
const server = http.createServer();
server.listen(8080, "127.0.0.1", () => {
  console.log("服务器已经开启，可以通过");
});
server.on("request", (req, res) => {
  res.setHeader("Content-Type", "text/html;charset=utf-8");

  if (req.url === "/index.html") {
    res.end("<h1>主页</h1>");
  } else if (req.url === "/list.html") {
    let html = `<h1>列表页</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    `;
    res.end(html);
  } else if (req.url === "/detail.html") {
    res.end("<h1>详情页</h1>");
  } else {
    res.end("404");
  }
});
