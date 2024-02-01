// 1

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let reversedColor = []
for(let col of colors){
    reversedColor.unshift(col)
}
// console.log(reversedColor);

// 2

let evenSel = [];
const numbers = [12, 98, 5, 41, 23, 78, 46];
for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2===0){
        evenSel.push(numbers[i])
    }
}
// console.log(evenSel)

// 3
var number = ['Tom', 'Tim', 'Tin', 'Tik'];

let concat = '';
for(let name of number){
    concat = concat + name;
}
// console.log(concat)

const statement = 'I am a hard working person';

let revSen = '';
let arrState = statement.split(" ");
console.log(arrState);

for(let word of arrState){
    revSen = word + " " + revSen;
}
console.log(revSen)