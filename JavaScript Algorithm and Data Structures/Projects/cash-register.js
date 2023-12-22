function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  // Step 1: Calculate total cash in drawer
  const totalCID = cid.reduce((total, [, amount]) => total + amount, 0).toFixed(2);

  // Step 2: Calculate change due
  let changeDue = (cash - price).toFixed(2);

  // Step 3: Check if there is insufficient funds or exact change cannot be provided
  if (Number(totalCID) < Number(changeDue)) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Step 4: Check if the drawer is closed
  if (Number(totalCID) === Number(changeDue)) {
    return { status: "CLOSED", change: cid };
  }

  // Step 5: Calculate the change to be given
  const changeArray = currencyUnits.reduceRight((changeArray, [unit, value]) => {
    const availableAmount = cid.find(item => item[0] === unit)[1];
    const maxUnits = Math.floor(availableAmount / value);
    const unitsToReturn = Math.min(maxUnits, Math.floor(changeDue / value));

    if (unitsToReturn > 0) {
      changeDue = (changeDue - unitsToReturn * value).toFixed(2);
      changeArray.push([unit, unitsToReturn * value]);
    }

    return changeArray;
  }, []);

  // Check if exact change cannot be provided
  if (Number(changeDue) > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
}

// Test case
const result = checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);

console.log(result);
