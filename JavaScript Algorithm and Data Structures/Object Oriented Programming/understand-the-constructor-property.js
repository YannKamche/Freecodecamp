function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog ? true : false
}

let myDog = new Dog("Benchy");
console.log(joinDogFraternity(myDog));
Dog.prototype.legs = 2;
