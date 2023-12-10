let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
console.log(wsRegex.test(hello))
console.log(hello.match(wsRegex))
let result = hello.replace(wsRegex, ''); // Change this line

console.log(result)
