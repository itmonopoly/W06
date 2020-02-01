var io = require("socket.io")(7777);

io.on("connection", function(socket) {
	//socket.emit("fromServer", "Hello from server");

	socket.on("fromClient", function(message) {
		io.emit("fromServer", message);
	})
})