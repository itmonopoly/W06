var fs = require("fs");

module.exports = {
	get(req, res) {
		res.setHeader('Content-Type', 'application/json');
		res.send(fs.readFileSync("../products.json"));
	},
	post(req, res) {
		var file = fs.readFileSync("../products.json");
		var products = JSON.parse(file);
		
		products.push(req.body);
		fs.writeFileSync("../products.json", JSON.stringify(products));
		console.log(req.body);
		res.send();
	},
	id: {
		get() {
			var file = fs.readFileSync("../products.json");
			var products = JSON.parse(file);
			
			if(products[req.params.id]){
				res.send(products[req.params.id]);
			}else{
				res.send(404);
			}
		}
	}
}

// get: function() {

// }