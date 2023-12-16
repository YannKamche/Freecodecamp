function Bird() {
  let weight = 15;
  this.getWeight = () => weight


}
 let bird = new Bird();
 console.log(bird.weight)
 console.log(bird.getWeight())