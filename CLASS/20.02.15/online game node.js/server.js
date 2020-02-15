var io = require("socket.io")(7777);

io.on("connection", socket => {
	socket.on("requestMove", data => {
		socket.emit("move", data) // { x: 100, y: 100 }
	})

	socket.on("moving", data => {
		console.log(data);
	})
})