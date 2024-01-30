/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for(let i=5; i<=100; i++){
    let square = Math.sqrt(i);
    let isInteger = Number.isInteger(square);
    console.log(i);
    if(isInteger===true){
        break;
    }
    
}

// console.log(Math.sqrt(16))
// console.log(Number.isInteger(10.02544))