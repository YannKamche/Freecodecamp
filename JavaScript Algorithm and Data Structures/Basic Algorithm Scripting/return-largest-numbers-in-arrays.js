function largestOfFour(arr) {
  let arrayOfLargeElements = []; //array of largest numbers in the subarrays
  for (let i = 0; i < arr.length; i++)
  {
    let max = arr[i][0] //asign max to be the first value of subarray

    for (let j = 1; j < arr[i].length; j++) {

      if (max < arr[i][j]) {
        max = arr[i][j];
      } //compares max with other values of subarray

  }
  arrayOfLargeElements.push(max);
}
return arrayOfLargeElements;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));