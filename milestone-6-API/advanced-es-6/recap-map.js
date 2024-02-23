// How does 'map' work under the hood?
const originalArr = [1,2,3,4];

const double = originalArr.map(num => num*2);
console.log(double); //[ 2, 4, 6, 8 ]

/**
 * create new empty array
 * iterate for every element of original array
 * apply the callback func for each element of original array
 * push the result into new array
 * return new array
 */

function mapAlt(callback){
    const newEmptyArr = [];
    for(let element of originalArr){
       const result = callback(element);
       newEmptyArr.push(result);
    }
    return newEmptyArr;
}

const triple = num => num * 3;

const tripledArr = mapAlt(triple);
console.log(tripledArr); //[ 3, 6, 9, 12 ]