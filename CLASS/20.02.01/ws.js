const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 7777 });

wss.on('connection', function(ws) {
  ws.on("message", function(message) {
    console.log(message)
  })

  ws.send("Hello from server");
});