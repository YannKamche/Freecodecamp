function mutation(arr) {

  let letToMatch = arr[1].split('');
  for(let i = 0; i < letToMatch.length; i++ ) {
    let regex = new RegExp(`${letToMatch[i]}`,'i' )
    if(regex.test(arr[0])) continue;
    else return false
  }
  return true;
}

mutation(["hello", "hey"]);