var url = "https://api.instagram.com/v1/media/popular?client_id=6571a0547b8b487a81b5ebf51b913b12"
// var https = require("https");
//
// https.get(url, function(res) {
// 	var photos = "";
// 	res.on("data", function(chunk) {
// 		// console.log("data")
// 		photos += chunk.toString();
// 		// process.stdout.write(chunk);
// 	});
// 	res.on("end", function() {
// 		// console.log("end")
// 		console.log(JSON.parse(photos));
// 	});
// });


var request = require("request");

console.log(request.get(url));
