function bouncer(arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) === false) 
      continue;
    else newArr.push(arr[i])
  }
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));