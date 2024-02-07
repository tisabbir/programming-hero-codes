// Problem One

function calculateMoney(ticketSale) {
    // You have to write your code here
    if(ticketSale<0){
        let errorMsg = 'Invalid Number. Please provide a valid number as input.'
        return errorMsg;
    }

    let ticketPrice = 120;
    let darowanPayment = 500;
    let staffPayment = 50;
    let staffNumber = 8;
    let totalIncome = ticketPrice * ticketSale;
    let totalCost = darowanPayment + (staffNumber * staffPayment);
    let moneyLeftToBaker = totalIncome - totalCost; 
    return moneyLeftToBaker;
}


console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
    