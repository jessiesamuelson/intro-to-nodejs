// Challenge: Write a program that reads the file sonnets.tx
// in this directory. The file contains Shakspeare's 154 sonnets
// seperated by the characters ---. Your program should seperate the
// the sonnets into individual files and save them by number in the
// output directory. Use at .txt file extention with the name.

// Use the Filesystem module: https://nodejs.org/api/fs.html

// BONUS POINTS: Use the roman-numerals package from npm
// to convert each file name to roman numerals. The package is
// already installed in node_modules. You can view the
// documentation here: https://www.npmjs.com/package/roman-numerals

// HINT: In JS you can reference a linebreak with "\t"
// so "some text\t" is the line "some text" followed by a linebreak

var fs = require("fs");
var toRoman = require("roman-numerals").toRoman;
var path = require("path");

fs.readFile(path.resolve(__dirname + "/sonnets.txt"), {
	encoding: "utf-8"
}, function(err, data) {
	if (err) {
		return console.log(err);
	}
	// return console.log(data);
  var sonnets = data.split("---\n");
  // console.log(sonnets[0])

  for (var i = 0; i < sonnets.length; i++){
    fs.writeFile(__dirname + "/sonnets/" + "sonnet" + toRoman(i) + ".txt", sonnets[i], function() {
      console.log("file saved!");
    });
  }
});


// fs.mkdir('/something/', function(e){
// 	if(!e || (e && e.code === 'EEXIST')){
// 			//do something with contents
// 			console.log(e)
// 	} else {
// 			//debug
// 			console.log(e);
// 	}
// });
