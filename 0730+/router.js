/**
 * express提供了一个专门的routerd对象
 */

const controller = require("./controller");

// 刚刚app.js中没有创建的router对象现在要创建了
const express = require("express");
const router = express.Router();
router.get("/index", (req, res) => {
  controller.getIndex(req, res);
});

module.exports = router;
