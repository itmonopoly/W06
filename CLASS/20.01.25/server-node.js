var http = require("http");
var fs = require("fs");

http.createServer(handler).listen(7777);

function handler(request, response) {
	response.setHeader("Content-type", "text/html; charset=utf-8");
	
	fs.readFile("apple.txt", "utf-8", (err, data) => {
		response.write(data);
		response.end();
	})
}