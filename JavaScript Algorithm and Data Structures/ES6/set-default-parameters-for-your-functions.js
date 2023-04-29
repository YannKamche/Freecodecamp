// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line
console.log(increment(2, 1));
console.log(increment(2, 3));
console.log(increment(2));

const saluteMom = (greetings = "Hello", slept = "well") => greetings + " mom. I slept " + slept;
console.log(saluteMom("Hi", "bad"));
console.log(saluteMom());