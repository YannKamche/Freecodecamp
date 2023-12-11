function mixedNumbers(arr) {
  // Only change code below this line
let end = [7, 'VIII', 9];
let begin = ['I', 2, 'three'];
arr.push(...end);
arr.unshift(...begin) 
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));