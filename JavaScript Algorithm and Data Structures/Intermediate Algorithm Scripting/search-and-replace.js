function myReplace(str, before, after) {
  return (/^[A-Z]/).test(before) ?
    str.replace(
      before,
      after.charAt(0)
      .toUpperCase()
      .concat(after.slice(1))) 

   : (/^[a-z]/).test(before) ?
    str.replace(
      before,
      after.charAt(0)
      .toLowerCase()
      .concat(after.slice(1))
      
    ) : str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));