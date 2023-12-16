function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 2,
  eat() {
    console.log('nom nom nom');
  },
  describe() {
    console.log(`My name is ${this.name}`)
  }
  // Only change code below this line
};

let myDog = new Dog("Bernard");
let ownProps = [];
let prototypeProps = []

for (let prop of Object.keys(myDog)) {
    Object.keys(myDog).includes(prop) ? ownProps.push(prop) : prototypeProps.push(prop)
}

console.log(ownProps, prototypeProps)

for (let prop in myDog)
   Object.keys(myDog).includes(prop) ? ownProps.push(prop) : prototypeProps.push(prop)

console.log(ownProps, prototypeProps)