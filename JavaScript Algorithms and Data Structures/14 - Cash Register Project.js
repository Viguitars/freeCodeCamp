/* cSpell: disable; */

/* Caja registradora
Diseña una función checkCashRegister() que acepte el precio de compra como primer argumento 
(price), la cantidad pagada como segundo argumento (cash), y el dinero en efectivo que tiene la 
caja (cid) como tercer argumento.

cid es un arreglo 2D que enumera las monedas disponibles.

La función checkCashRegister() siempre debe devolver un objeto con una clave status y una clave 
change.

Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja es menor que el cambio 
necesario, o si no puedes devolver el cambio exacto.

Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como valor de la clave change es 
igual al cambio que se debe entregar.

En cualquier otro caso, devuelve {status: "OPEN", change: [...]}, con el cambio a entregar en 
monedas y billetes, ordenados de mayor a menor, como valor de la clave change.

Unidad Monetaria              	Importe
Penny                         	$0.01 (PENNY)
Nickel                        	$0.05 (NICKEL)
Dime                          	$0.1 (DIME)
Quarter                       	$0.25 (QUARTER)
Dollar                        	$1 (ONE)
Five Dollars                   	$5 (FIVE)
Ten Dollars                    	$10 (TEN)
Twenty Dollars                 	$20 (TWENTY)
One-hundred Dollars            	$100 (ONE HUNDRED)

A continuación, un ejemplo del efectivo en caja en formato de arreglo:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
 */

const MONEY_TABLE = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000,
};

function checkCashRegister(price, cash, cid) {
  // store variable with amount of change due
  const changeDue = cash - price;
  // convert to cents >>RIGHT AWAY<<
  let changeDueCents = changeDue * 100;
  // sum up all of the money in cents in the cash drawer
  const cashForChange = cid.reduce((acc, moneySlot) => {
    return acc + moneySlot[1] * 100;
  }, 0);
  // if money in cid is the same as change due,
  if (changeDueCents === cashForChange) {
    return { status: "CLOSED", change: cid };
  }
  // Calculate how much change we can give based on slots in the cid
  //Reverse the cid, create an array of slots based on adding up for each slot the amount of money
  //we'll pay with that slot
  const changeInHand = cid
    .reverse()
    .map(([billOrCoinName, valueInSlot]) => {
      // Instantiate the amount of money of that bill type as 0
      let totalCash = 0;
      // Get the value of that slot's worth
      const denomination = MONEY_TABLE[billOrCoinName];
      // Convert amount to cents >>RIGHT AWAY<<
      let valueInSlotCents = Math.round(valueInSlot * 100);
      // Loop: While the amount of money in that slot is bigger than 0 and the value of that slot is
      // smaller than the amount of remaining change due
      while (valueInSlotCents > 0 && denomination <= changeDueCents) {
        // Add one bill's worth to the total
        totalCash += denomination;
        // Subtract that amount from the change due
        changeDueCents -= denomination;
        // Subtract that amount from the amount available in that slot
        valueInSlotCents -= denomination;
      }
      return [billOrCoinName, totalCash / 100];
    }) // filter out all the coin or bill types that have 0 money
    .filter(([_, value]) => value > 0);
  // if there is still change due, we either don't have enough money in the cid, or our money
  //types don't add up
  if (changeDueCents > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: changeInHand };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
// {status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
); //{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
); //{status: "INSUFFICIENT_FUNDS", change: []}.
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
); //{status: "INSUFFICIENT_FUNDS", change: []}.
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
); //{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
