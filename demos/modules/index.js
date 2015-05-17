<<<<<<< HEAD
var foo = require("./foo");
var bar = require("./bar");

// var http = require('http')
//
// setInterval(function() {
// 	console.log(foo());
// }, 1000);

console.log(foo);


=======
var bar = require("./bar");

>>>>>>> b32e3cbd04bc48bf061a1c812ce87bc689bb2bb8
function delay(time) {
	var d1 = new Date();
	var d2 = new Date();
	while (d2.valueOf() < d1.valueOf() + time) {
		d2 = new Date();
	}
}

<<<<<<< HEAD
for (var i = 0; i < 5; i++){
	console.log(bar());
	delay(2000);
}
=======
for (var i = 0; i < 5; i++) {
	console.log(bar());
	delay(2000);
}
>>>>>>> b32e3cbd04bc48bf061a1c812ce87bc689bb2bb8
