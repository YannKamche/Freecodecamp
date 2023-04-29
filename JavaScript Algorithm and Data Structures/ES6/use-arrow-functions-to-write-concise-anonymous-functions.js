const magic = () => new Date();
console.log(magic());

const myconst = () => {
   let myArray = []
  for (let i = 0; i < 2; i++) {
      myArray.push(i);
  }
  return myArray;
}
console.log(myconst());

const myNum = () => "true";
console.log(myNum());
