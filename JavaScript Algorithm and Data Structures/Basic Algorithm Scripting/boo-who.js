function booWho(bool) {
  return typeof bool === 'boolean' ? true : false;
}

console.log(booWho(null));
