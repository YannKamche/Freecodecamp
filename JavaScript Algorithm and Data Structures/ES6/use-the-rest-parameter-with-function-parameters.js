const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(sum(2,3,4,));

const numOfParameters = (...args) => "You passed " + args.length + " Parameters";
console.log(numOfParameters("sdf", {}, 2));