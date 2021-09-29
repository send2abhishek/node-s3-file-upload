const app = require("./index");

const http = require("http");

const server = http.createServer(app);

server.listen(3001, () => {
  console.log("server has been started at port 3001");
});
