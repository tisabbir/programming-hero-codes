const num1 = 1000;
const num2 = 2000;
const num3 = 3000;

if(num1>num2 && num1>num3){
    console.log(num1, 'is the king');
}
else if ( num2>num1 && num2>num3){
    console.log(num2, 'is the king')
} else {
    console.log(num3, 'is the king')
}

function maxFinder(num1, num2, num3){
    if(num1>num2 && num1>num3){
        console.log(num1, 'is the king');
    }
    else if ( num2>num1 && num2>num3){
        console.log(num2, 'is the king')
    } else {
        console.log(num3, 'is the king')
    }
}

maxFinder(num1, num2, num3)


// Unlimited Number 

console.log(Math.max(num1, num2, num3))