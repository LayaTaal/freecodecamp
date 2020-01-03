/**
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the 
 * first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 * 
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
 */

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

function sumRegister(cid) {
  let total = 0;
  cid.forEach(denomination => {
    total += denomination[1];
  });
  return financial(total);
}

function checkCashRegister(price, cash, cid) {
  const multipliers = [
    0.01,
    0.05,
    0.10,
    0.25,
    1.00,
    5.00,
    10.00,
    20.00,
    100.00,
  ];
  const statusCodes = [
    "INSUFFICIENT_FUNDS",
    "CLOSED",
    "OPEN",
  ];
  let ocid = [];
  let change = [];
  let register = {};
  let changeNeeded = Number(financial(cash - price));
  let amountInRegister = Number(sumRegister(cid));

  // Stop here if we simply don't have enough in the register
  if (amountInRegister < changeNeeded) {
    register = {
      status: statusCodes[0],
      change: [],
    }
    return register;
  }

  // If we do have enough money, let's give some change!
  // Loop through register from highest bill to lowest
  for (let i = 8; i > -1; i--) {
    let currentDrawer = [...cid[i]];
    const changeMultiplier = Math.floor(changeNeeded / multipliers[i]);

    console.log(`Looking in: ${cid[i][0]}, need ${changeNeeded} dollars.`);

    // Only give change from current drawer if it's not larger than total change needed
    if ( changeMultiplier >= 1 ) {

      // Give as much as we can from current drawer without giving more than we have
      for (let j = changeMultiplier; j >= 1; j--) {
        
        let amountToGive = multipliers[i] * j; // Amount of change to give from current drawer

        if ((currentDrawer[1] >= amountToGive) && (changeNeeded >= multipliers[i])) {

          changeNeeded -= amountToGive;
          changeNeeded = Number.parseFloat(changeNeeded).toFixed(2);
          currentDrawer[1] -= amountToGive;
          currentDrawer[1] = Number.parseFloat(currentDrawer[1]).toFixed(2);
          change.push([currentDrawer[0], amountToGive]);
          
          console.log(`Gave ${amountToGive} from ${currentDrawer[0]}, still need ${changeNeeded}.`);
        }
      }
    }
  }
    
  // Return change and register status
  if (changeNeeded == 0) {
    register = {
      status: (amountInRegister == (cash - price)) ? statusCodes[1] : statusCodes[2],
      change: (amountInRegister == (cash - price)) ? cid : change,
    }
  } else {
    register = {
      status: statusCodes[0],
      change: [],
    };
  }

  // console.log(register)
  return register;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])