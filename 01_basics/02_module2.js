const {addFunc, subFunc} = require('./02_module1'); // Importing the module
const math = require("fs"); // Importing the fs module

console.log("Result is", addFunc(2,1)); // Result is 5
console.log("Result is", subFunc(2,3)); // Result is -1
console.log(math); // fs module object