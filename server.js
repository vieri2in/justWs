const http = require("node:http");
const webSocket = require("ws");
const server = http.createServer((req, res) => {
  res.end("I am connected");
});
const wss = new webSocket.WebSocketServer({ server });
// happens before handshakes
wss.on("headers", (headers, res) => {
  console.log(headers);
});
// happens after handshakes
wss.on("connection", (ws, req) => {
  //   console.log(req);
  ws.send("Welcom to websocket server!!");
  ws.on("message", (data) => {
    console.log(data.toString("utf-8"));
  });
});
server.listen(9000, () => {
  console.log("Server is listening on port: 9000");
});
