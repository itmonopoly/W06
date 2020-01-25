var fs = require("fs");

// read

fs.readFile("orange.txt", "utf-8", function(err, data) {
	console.log("ЧТЕНИЕ АПЕЛЬСИНА")
	console.log(data);
})

var apple = fs.readFileSync("apple.txt", "utf-8");

console.log(apple)

// write

fs.writeFileSync("apple.txt", "Яблоко");

fs.writeFile("orange.txt", "Апельсин", function(err) {
	console.log("ЗАПИСЬ АПЕЛЬСИНА")
	if(err) {

	}
})

