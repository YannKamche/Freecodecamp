let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
console.log(result);

let myFaculty = "I am at FET";
let myFacultyRegex = /FET/;
let sure = myFacultyRegex.test(myFaculty);
console.log(sure);
