let count = 0;

function cc(card) {
  // Only change code below this line
switch(card) {
  
  case 2:
  case 3:
  case 4: 
  case 5:
  case 6:
    count++;
    break;

  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count--;
    break;
}
if (count < 0 || count === 0)
  return count + " Hold";
  else return count + " Bet";

  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));