Array.prototype.myFilter = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (const [index, elem] of this.entries()) {
    if (callback(elem, index, this)) newArray.push(elem);
  }
  // Only change code above this line
  return newArray;
};