var fs = require("fs");

module.exports = {
	get(req, res) {
		var file = fs.readFileSync(__dirname + "/../img/" + req.params.name);

		res.send(file);
	}
}