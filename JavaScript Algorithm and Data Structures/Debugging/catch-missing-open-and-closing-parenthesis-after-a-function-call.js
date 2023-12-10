function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
let newNine = getNine;
console.log(result);
console.log(newNine())