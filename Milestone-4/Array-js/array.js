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
