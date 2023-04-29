let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
console.log(result);
let result1 = starRegex.test(twinkleStar);
console.log(result1);