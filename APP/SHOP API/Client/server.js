var http = require("http");
var fs = require("fs");

http.createServer(handler).listen(777);

function handler(req, res){
	var url = req.url;

	if(url === "/") {
		var file = fs.readFileSync("index.html");
		
		res.end(file);
	}

	if(url.includes("/public/")) {
		var file = fs.readFileSync(__dirname + url);

		res.end(file);
	}

	res.end("404");
}