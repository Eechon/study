/**
 * 业务逻辑层
 *
 */

const fs = require("fs");

let controller = {// 读取静态资源，如果静态资源是css，就加头，
  if (req.url.endsWith(".css")) {
    res.setHeader("Content-Type", "text/css;charset=utf-8");
  }
  fs.readFile(__dirname + req.url, (err, data) => {
    if (err) console.log(err);
    res.end(data);
  });};


  module.exports=controller;