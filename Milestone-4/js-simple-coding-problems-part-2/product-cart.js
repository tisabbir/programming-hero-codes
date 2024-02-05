const products = [
  { name: "shampoo", price: 150, quantity: 3 },
  { name: "soap", price: 1500, quantity: 7 },
  { name: "HairClip", price: 200, quantity: 2 },
  { name: "MakeUpBox", price: 1500, quantity: 1 },
];

function totalCostFinder(products) {
  let total = 0;
  for (let product of products) {
    let thisProductPrice = product.price * product.quantity;
    total = total + thisProductPrice;
  }
  return total;
}

const totalCost = totalCostFinder(products);
console.log(totalCost);
