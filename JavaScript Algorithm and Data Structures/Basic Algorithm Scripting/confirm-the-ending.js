function confirmEnding(str, target) {
  let pattern = `${target}$`;
  let regex = new RegExp(pattern);
  return regex.test(str);
}

console.log(confirmEnding("Bastian", "n"));

