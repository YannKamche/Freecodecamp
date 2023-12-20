function sumAll(arr) {
  //sorted Array
  let sortArr = [...arr].sort((a, b) => a - b);
  let newArr = []
  for(let i = sortArr[0]; i <= sortArr[1]; i++) 
    newArr.push(i); //push elements in between

  return newArr.reduce((sum, elem) => sum + elem);
}

console.log(sumAll([6, 4]));