console.log("executing one.js");
console.log("Evaluating localVar:");

// Access the local variable using the global object
console.log(global.localVar);
console.log("Evaluating globalVar:");
console.log(global.globalVar);
console.log("end one.js");

global.globalVar = "foo";
