// 引入fs
const fs = require("fs");
fs.readFile("./0726/test.txt", "utf-8", function(err, data) {
  if (err) throw err;
  console.log(data);
});

fs.readFile("./0726/test.json", "utf-8", function(err, data) {
  if (err) throw err;
  console.log(data);
});
