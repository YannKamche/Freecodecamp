function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str.concat('way');
  const consCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consCluster.length).concat(consCluster + 'ay')
  console.log(consCluster)
}

console.log(translatePigLatin("consonant"));