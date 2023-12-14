function frankenSplice(arr1, arr2, n) {
  // Create a shallow copy of arr2
  const cpArr2 = arr2.slice(0);

  // Use splice to insert the elements of arr1 into the copy at index n
  cpArr2.splice(n, 0, ...arr1);
  

  // Return the modified copy
  return cpArr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
