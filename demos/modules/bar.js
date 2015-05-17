
var foo = require("./foo")

console.log("Executing bar.js");

module.exports = Date.now();


module.exports = function(){
  return Date.now();
}
=======
module.exports = function() {
	return Date.now();
}

