let haStr = "Hazzzzah hazzzzzah";
let haRegex = /haz{4,}ah/ig; // Change this line
let result = haRegex.test(haStr);
console.log(haStr.match(haRegex))