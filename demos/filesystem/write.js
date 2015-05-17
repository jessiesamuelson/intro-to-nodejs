var fs = require("fs");

fs.writeFile(__dirname + "/dog.txt", "woof!", {
	encoding: "utf-8"
}, function(err) {
	if (err) {
		throw err;
	}
	console.log("file saved!");
});


// for reading files synchronously

// try {
// 	var output = fs.readFileSync(path);
// } catch (err) {
//
// }
