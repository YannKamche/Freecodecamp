const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  let count = 0;
  // Only change code below this line
  for (const user in allUsers) {
    if (allUsers[user].online == true) count++;
  }
  return count
  // Only change code above this line
}

console.log(countOnline(users));