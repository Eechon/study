const http = require("http");
const queryString = require("querystring");
const template = require("art-template");
const server = http.createServer();

const router = require("./MVC-router");

const fs = require("fs");
server.listen(8080, () => {
  console.log("http://127.0.0.1:8080");
});

server.on("require", (req, res) => {
  rooter(req, res);
}); /* end require */
