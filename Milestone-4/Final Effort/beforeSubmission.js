
function calculateMoney(ticketSale) {
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





    function deleteInvalids(array) {
        let numArray = [];
        // validation 
        if(!Array.isArray(array)){
            return "Invalid Array. Please provide a valid array"
        } 
        
        else{
            for(let element of array){
                if(typeof element === 'number'){
                    if(!isNaN(element)){
                        numArray.push(element);
                    }
                }
            }
            return numArray;
        }
        
    
    }
        



    function password(obj) {

        // Validation 
        if(!obj.name || !obj.siteName || !obj.birthYear){
            return 'invalid';
        } else if(obj.birthYear.toString().length !== 4){ return 'invalid';

        } 
        else{
            let firstLetter = obj.siteName.charAt(0).toUpperCase();
        let restLetter = obj.siteName.slice(1);
        let finalSiteName = firstLetter + restLetter;
        let finalPassword = finalSiteName + '#' + obj.name + '@' + obj.birthYear;
        return finalPassword;
        }

        
    }


    function monthlySavings(arr , livingCost) {
        // validation
        let totalEarning = 0;
        if(!Array.isArray(arr) || typeof livingCost !== 'number'){
            return "invalid input"
        } else{
            for(let value of arr){
                if(value>=3000){
                    let tax = value * 20/100;
                    let afterTaxEarning = value - tax;
                    totalEarning = totalEarning + afterTaxEarning;
                } else {
                    totalEarning = totalEarning + value;
                }
            }
            
        }
        let totalSavings = totalEarning - livingCost;
        if(totalSavings>=0){
            return totalSavings;
        } else{
            return "earn more";
        }
    
    
    }
