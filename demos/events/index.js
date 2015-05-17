// we need dog to also be able to emit events
var EventEmitter = require("events").EventEmitter;
// util module in node
var util = require("util");
// here this is a keyboard event, stdin by default has events on it
var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding("utf8");

function handler(key) {
	if (key === "j") {
		self.bark();
	}
	else if (key === "q") {
		process.kill(0);
	}
	else {
		process.stdout.write(key);
	}
};

function Dog(name) {
	var self = this;
	// call the super constructor to initialize `this`
	EventEmitter.call(this);
	this.name = name;
	this.bark = function() {
		console.log(self.name + ": bark!");
		self.emit("bark", "foo");
	};

	stdin.on("data", this.handler)

// now the dog function is an instance of the event emitter class
util.inherits(Dog, EventEmitter);

var petey = new Dog("Petey");
var fluffy = new Dog("Fluffy");
var lola = new Dog("Lola");
var drake = new Dog("Drake");
var fido = new Dog("Fido");
var bubble = new Dog("Bubbles");

petey.on("bark", function() {
	console.log("Quiet, Petey!");
	petey.removeListener("data", petey.handler);
});
