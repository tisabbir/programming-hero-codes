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


// console.log(calculateMoney(10));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(93));
// console.log(calculateMoney(-130));

// Problem Two

function checkName(name) {
    // Validation
    if(typeof name !== 'string'){
        return "invalid";
    } else{
        let nameToLowerCase = name.toLowerCase();
        let lastLetter = nameToLowerCase.length - 1;
        
        // condition
        if(nameToLowerCase[lastLetter] === 'a' ||
        nameToLowerCase[lastLetter] === 'y' ||
        nameToLowerCase[lastLetter] === 'i' ||
        nameToLowerCase[lastLetter] === 'e' ||
        nameToLowerCase[lastLetter] === 'o' ||
        nameToLowerCase[lastLetter] === 'u' ||
        nameToLowerCase[lastLetter] === 'w' ){
            return "Good Name";
        } else{
            return "Bad Name";
        }
    }

   

    }

    console.log(checkName('Salman'));
    console.log(checkName('RAFEE'));
    console.log(checkName('Jhankar'));
    console.log(checkName(199));
    console.log(checkName(["Rashed"]));
    