const nam = 'Sabbir';
const nam2 = "sabbir";
const nam3 = `Sabbir    `;
const nam4 = new String('Sabbir');
const nam5 = `    Sabbir`;
// console.log(nam , nam2, nam3, nam4)

// String is one kind of array but immutable
// console.log(nam[2])

//toUpperCase

console.log(nam.toUpperCase());
console.log(nam.toLowerCase());

//Compare 2 string

console.log(nam == nam2);
console.log(nam.toLowerCase() == nam2.toLowerCase());

console.log(nam3==nam5);
console.log(nam3.trim()==nam5.trim());



