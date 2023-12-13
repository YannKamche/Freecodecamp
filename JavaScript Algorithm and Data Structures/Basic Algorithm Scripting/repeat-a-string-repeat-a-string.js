function repeatStringNumTimes(str, num) {
let finalStr = ''
  for (let i = 0; i < num ; i++) 
    finalStr += str;
  return finalStr;
}

console.log(repeatStringNumTimes("abc", 3));