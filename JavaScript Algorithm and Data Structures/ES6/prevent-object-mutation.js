function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
    
  };

  console.log(MATH_CONSTANTS.PI);
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();