/* 
  学习使用node.js搭服务器
*/
// 搭建服务器的第一步：引入http模块
const http = requier("http");
// 创建一个服务器
// http.createServer([options],[listener])
// 连个参数都可选，就可以先不管，一般都是使用默认值就行
const server = http.createServer();
// 给服务器绑定ip和端口
// server.listen(端口,ip,回到函数)
server.listen(8080, "127.0.0.1", () => {
  console.log("服务器已经启动了");
});
// 告诉服务器，要接收用户发送过来的请求
// 给server注册一个浏览器请求服务器事件
// server.on(事件类型,回调函数)
server.on("request", (req, res) => {
  // req是request的缩写，是一个请求对象，里面有请求的所有信息
  // res是response的缩写，是一个响应对象，里面有响应的所有信息
  console.log("有请求进来了");

  // 设置响应头能解决中文乱码的问题，但是需要在返回请求之前设定
  res.setHeader("Content-Type", "text/html;charset=utf-8");

  // 给浏览器返回一点数据
  res.end("你好");
}); /* end request */
