let timStr = "Timmmmber";
let timRegex = /tim{4}ber/ig; // Change this line
let result = timRegex.test(timStr);
console.log(timStr.match(timRegex));