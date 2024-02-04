// Number

function numbersSum(a,b){
    return a+b;
}
const sum = numbersSum(10,20);
// console.log(sum)

function doMath(a,b){

    const sum = a+b;
    const sub = sum - b;
    const mult = sub * sum;
    const div = mult / a;

    return div;
}

const theSum = doMath(10,20);
// console.log(theSum)

// isEven

function isEven(num){
    if(num%2===0){
        return true;
    }
    return false;
}

const checkEven = isEven(10);
// console.log(checkEven)


// isOdd 


function isOdd(num){
    if(num%2!==0){
        return true;
    }
    return false;
}

const checkOdd = isOdd(50);
console.log(checkOdd);