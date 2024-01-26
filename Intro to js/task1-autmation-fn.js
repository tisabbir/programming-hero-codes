function calculateReturnedMoney(taka, orangePrice, applePrice) {
    var totalPrice = orangePrice + applePrice;
    return taka - totalPrice;
}

function printReturnedMoney(taka, orangePrice, applePrice) {
    var returnedMoney = calculateReturnedMoney(taka, orangePrice, applePrice);
    console.log('The amount of money Shop owner will return: ' + returnedMoney);
}

// Initial values
var takaIHave = 1740;
var initialOrangePrice = 240;
var initialApplePrice = 756;

// Print returned money based on initial values
printReturnedMoney(takaIHave, initialOrangePrice, initialApplePrice);

// Update values
takaIHave = 1000;
var updatedOrangePrice = 120;
var updatedApplePrice = 580;

// Print returned money based on updated values
printReturnedMoney(takaIHave, updatedOrangePrice, updatedApplePrice);
