const numbers = [1, 2, 3, 4, 5, 6];
numbers[3] = 3333;
// console.log(numbers);

// console.log(numbers.length);

// console.log(numbers[3]);

const singers = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];
console.log(singers);

// singers.push('Jailam')
singers[singers.length] = 'Jailam'

console.log(singers);

// singers.pop();
singers.length = singers.length -1;
console.log(singers);

// shift 
singers.shift();
console.log(singers);

// unshift 
// singers.unshift('mailam');
singers[0] = 'mailam';
console.log(singers);

// includes

console.log(singers.includes('salam'));
// indexOf
console.log(singers.indexOf('salam'))

// Array.isArray(arr)
const team = 'kolom';
console.log(Array.isArray(singers))
console.log(Array.isArray(team))
// join

console.log(singers.join('+'))

//concat

const dancer = ['abul','kabul','babul'];

const dolleeens = singers.concat(dancer);

console.log(dolleeens)

//slice

console.log(dancer.slice(1,3))

//splice 

console.log(dancer.splice(1,3))
console.log(dancer)