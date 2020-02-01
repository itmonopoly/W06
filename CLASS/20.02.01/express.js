var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser")
var app = express();

app.use(bodyParser.urlencoded({ extended: true })) // middleware

app.listen(7777);

app.get("/post", function(request, response) {
	response.send("<h2>All posts</h2>");
})

app.get("/post/:id", function(request, response) {
	response.send(`Post ${request.params.id}`);
})

app.get("/form", function(request, response) {
	var form = fs.readFileSync("form.html", "utf-8");

	response.send(form);
})

app.post("/registration", function(request, response) {
	console.log(request.body) // благодаря bodyParser { login: 'a', password: 'a' }

	response.send(`User ${request.body.login} is registered `);
})