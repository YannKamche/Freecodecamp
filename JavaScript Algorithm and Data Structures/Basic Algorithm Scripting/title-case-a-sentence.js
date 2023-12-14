function titleCase(str) {
  const arrStr = str.split(/\s/);
  console.log(arrStr)
  const newStrArr = [];

  for (let word of arrStr) {
    newStrArr.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
  console.log(newStrArr)
  return newStrArr.join(' ')
}
console.log(titleCase("i'm the little tea pot"));