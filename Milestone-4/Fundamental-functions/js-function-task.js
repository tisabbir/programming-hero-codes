// Simple function Related Practice Tasks
// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiplyFourNumber (a,b,c,d){
    return a*b*c*d;
}

const multiplier = multiplyFourNumber(2,4,5,6);
// console.log(multiplier)


// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


function numberMultiplier(num){
    if(num%2===0){
       return num/2;
    }
    else{
        return num*2;
    }
}

// console.log(numberMultiplier(6));


// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr, size) {
    let sum = 0;
    for(let i=0; i<size; i++){
        sum = sum + arr[i];
    }
    return sum / size;

}

// let avg = make_avg([1,2,3,4],4)
// console.log(avg)




// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(bnStr){
    let count = 0;
    let str = bnStr.split('');
    // console.log(str)
    for(let i=0; i < str.length; i++){
        if(str[i]==0){
            count = count + 1;
        }
    }
    return count;
}

// const zeroCounter = count_zero('010100001110101010001');
// console.log(zeroCounter)


// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(int){
    if(int%2===0){return 'Even'}
    else{return 'Odd'}
}

const odd_even_checker = odd_even(42);
console.log(odd_even_checker)