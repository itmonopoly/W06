var EventEmmiter = require("events");
var events = new EventEmmiter();

events.on("greeting", function(data) {
	console.log(`It's work: ${data}`); // It's work: alex
})

events.emit("greeting", "alex");


// task.add("Погулять с собакой", function() {

// })

// task.add("Погулять с собакой");

// events.on("add-task", function(data) {
	
// })