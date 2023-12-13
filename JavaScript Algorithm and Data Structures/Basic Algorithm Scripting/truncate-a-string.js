function truncateString(str, num) {
  let regex = new RegExp('.', 'ig');
  return (num === str.length) || (num > str.length) ?
   str:
   str.match(regex).splice(0, num).join('').concat('...')
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));