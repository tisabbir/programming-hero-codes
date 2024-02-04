// String 

function charCounter (string) {
   const charLength = string.length;
//    console.log(charLength)
    if(charLength % 2 ===0){
        // console.log(string, 'The string has even number of characters')
        return;
    }
    // console.log(string , 'The string has odd number of characters')
}

const isEvenCharNum = charCounter('Dhaka');
charCounter('Faka');


// boolean parameter

function yesNo (fact){
    if(fact){
        return console.log('you are true')
    }
    return console.log('you are false')
}

// const isTheSunMoving = yesNo(false);

// Array

function arrayHandler (arr) {
   return arr.length;
}
const arrCounter = arrayHandler([1,3,5,6,7])

// console.log(arrCounter)

// object 
let person1 = {
    name : 'akkas',
    father : 'jakkas'
}
let person2 = {
    name : 'maliha',
    father : 'kalihar bap'
}


function objHandler(obj){
    return obj.name;
}


let personName = objHandler(person1);
console.log(personName)
personName = objHandler(person2);
console.log(personName)