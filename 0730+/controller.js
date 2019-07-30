const model = require("./model");

let controller = {
  getIndex(req, res) {
    model.getAllHero(arr => {
      res.render("index", { arr });
    });
  }
};

module.exports = controller;
