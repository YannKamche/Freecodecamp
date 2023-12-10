let sampleWord = "bana12";
let pwRegex = /(?=\w{6,})(?=\D*\d\d)/; // Change this line
let result = pwRegex.test(sampleWord);
console.log(result);
console.log(sampleWord.match(pwRegex));