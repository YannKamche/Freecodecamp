function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = () => {
  console.log('Woof!')
}
// Only change code above this line

let beagle = new Dog();
let ownProp = [];
let prototypeProp = [];
for (let prop in beagle) 
  (beagle.hasOwnProperty(prop)) ? ownProp.push(prop) :
  prototypeProp.push(prop)
console.log(ownProp, prototypeProp, beagle.constructor)