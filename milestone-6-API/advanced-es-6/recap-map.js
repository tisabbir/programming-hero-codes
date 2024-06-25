// How does 'map' work under the hood?
const originalArr = [1,2,3,4];
const double = originalArr.map(num => num*2);
console.log(double); //[ 2, 4, 6, 8 ]

/**
 * 1. create new empty array
 * 2. Iterate for every element of original array
 * 3. Apply the callback func for each element of original array
 * 4. Push the result into new array
 * 5.Return new array
 */


// const triple = num => num * 3;

// const tripledArr = mapAlt(triple);
// console.log(tripledArr); //[ 3, 6, 9, 12 ]