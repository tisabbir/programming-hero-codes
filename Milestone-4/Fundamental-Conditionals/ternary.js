const isLeader = true;
let price = 1500;

// Simple Ternary

// isLeader === true ? price = 0 : price = price + 50;

// console.log(price)

// Variable Ternary

// price = isLeader === true? 0 : price+100;
// console.log(price)

// Nested Ternary

price = isLeader === true ? price > 1000 ? price /2 : 0  : price + 20;


console.log(price)
