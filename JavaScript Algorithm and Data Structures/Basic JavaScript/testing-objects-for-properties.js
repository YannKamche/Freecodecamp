function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj.hasOwnProperty(checkProp))
    return obj[checkProp];
    else
    return "Not Found";
  return "Change Me!";
  // Only change code above this line
}