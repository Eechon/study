const express = require("express");
const app = express();
app.listen(8080, () => {
  console.log("服务器已经启动，express");
});

app.use("/views", express.stratic("views"));
app.use("/assets"), express.static("assets ");

app.get("/", (req, res) => {
  res.send("hello,world");
});
