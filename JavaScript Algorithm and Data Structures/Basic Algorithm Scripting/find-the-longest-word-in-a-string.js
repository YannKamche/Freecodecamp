function findLongestWordLength(str) {
  let wordArray = [];
  wordArray = str.split(' ');

  let longestWord = '';
  for (let i = 0; i < wordArray.length; i++) {
    if(longestWord.length < wordArray[i].length) 
      longestWord = wordArray[i];
  }
  return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));