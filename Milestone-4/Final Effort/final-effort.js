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

    // console.log(checkName('Salman'));
    // console.log(checkName('RAFEE'));
    // console.log(checkName('Jhankar'));
    // console.log(checkName(199));
    // console.log(checkName(["Rashed"]));


    // Problem Three
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
        

    // console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))
    // console.log(deleteInvalids(['1' , {num:2} , NaN ]))
    // console.log(deleteInvalids([ 1 , 2 , -3 ]))
    // console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}))
    // console.log(deleteInvalids([ NaN, 1,12,0 ,-1 , undefined ]))
    

    // Problem three

    function password(obj) {
        //write your code here
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

    // console.log(password({
    //     name : 'kolimuddin', 
    //     birthYear : 1999 , 
    //     siteName : 'google'
    // })) 
    // console.log(password( { name: 'rahat' , birthYear: 2002, siteName: 'Facebook'} ))
    // console.log(password({ name: 'toky' , birthYear: 200, siteName: 'Facebook' } ))
    // console.log(password({ name: 'maisha', birthYear: 2002 }))