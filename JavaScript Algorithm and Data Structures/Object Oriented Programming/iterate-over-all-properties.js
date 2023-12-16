function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let prop in beagle) {
   (beagle.hasOwnProperty(prop)) ? ownProps.push(prop) : prototypeProps.push(prop)
}

console.log(ownProps, prototypeProps);




// Only change code below this line