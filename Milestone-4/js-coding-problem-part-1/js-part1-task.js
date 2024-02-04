// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celToFah (celsius){
    let Fahrenheit = (celsius * 9/5) + 32;
    console.log(Fahrenheit, ' F');
}
// celToFah(100);

// Task-2: (unfinished)
// You are given an array of numbers. Count how many times the a number is repeated in the array.

function repeatedNumberCounter(number, arr){
    let thatNumber = [];

    for(let num of arr){
        if(num === number){
            thatNumber.push(number);
        }
    }
    if(thatNumber.length>=2){
        console.log('the repeated number is : ', thatNumber[0]);
    console.log( "Repeated : " , thatNumber.length)

    } else{ console.log(thatNumber.length)}
}
// repeatedNumberCounter(5, [5,6,11,12,98, 5])
// repeatedNumberCounter(25, [5,6,11,12,98, 5, 25, 25, 25])
// repeatedNumberCounter(6, [5,6,11,12,98, 5, 25, 25, 25])
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0





// Task-3:
// Write a function to count the number of vowels in a string.
function vowelCounter(str){
    let string = str.split('');
    // console.log(string)
    count = 0;
    for(let letters of string){
        if(letters == 'a' || letters == 'e' || letters == 'i' || letters == 'o' || letters == 'u'){
            count++;
        }
    }
    // console.log(count)
}
vowelCounter('Dhaka aeiou')


// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming


function longestWordFinder(str){
    let strToArr = str.split(' ')
    // console.log(strToArr)
   let  longestWord = '';
   for(let i=0; i<strToArr.length; i++){
    if(longestWord.length<strToArr[i].length){
        longestWord = strToArr[i];
    }
   }
   console.log(longestWord);
}

longestWordFinder('I am learning Programming to become a programmer')


// Task-5:
// Generate a random number between 10 to 20.

function random10to20(){
    const random = Math.round(((Math.random()*10)+10));
    console.log(random);
}
// random10to20()