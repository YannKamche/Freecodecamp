let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
console.log(result);

let makeYourChoice = "Do you like cats? Yes or No? I love them maybe";
let makeYourChoiceRegex = /True|no/;
let myChoice = makeYourChoiceRegex.test(makeYourChoice);
console.log(myChoice)