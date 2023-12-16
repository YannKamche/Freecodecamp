let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
let glideMixin = (obj) => obj.glide = () => "glide";

glideMixin(bird)
glideMixin(boat)
console.log(bird.glide());
console.log(boat.glide());

