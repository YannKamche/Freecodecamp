let myString = "Eleanor D. Roosevelt";
let myRegex = /(Franklin|Eleanor).* Roosevelt/g; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
console.log(result)
console.log(myString.match(myRegex))