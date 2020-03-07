var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var routers = require("./routers/routers")
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded());

app.get("/", routers.home.get);
app.get("/products", routers.products.get);
app.get("/products/:id", routers.products.id.get);
app.post("/products", routers.products.post);
app.get("*", routers.all.get);

app.listen(666);