var http = require("http");
var url = require("url");

http.createServer(server).listen(7777);

function server(request, response) {
	var data = url.parse(request.url, true);

	console.log(data) // Url {}
	console.log(request.url) // /

	response.end("");
}