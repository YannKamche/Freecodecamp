function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];



for (let prop in canary) {
  if(canary.hasOwnProperty(prop)) ownProps.push(prop)
}
// Only change code below this line