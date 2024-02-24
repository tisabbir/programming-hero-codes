const oddArr = [1,3,5,7];
const evenArr = oddArr.map(num => num + 1);
// console.log(evenArr); //[ 2, 4, 6, 8 ]

const originalArr = [34,234,59, 60, 23, 70, 110,23];
const dividedBy10 = originalArr.filter(num => num%10 === 0);
// console.log(dividedBy10); //[ 60, 70, 110 ]

const dividedBy10Find1st = originalArr.find(num => num%10 === 0);
// console.log(dividedBy10Find1st); // 60 

const instructor = [
    {name : 'Muhammad' , age : 23, position : 'senior'},
    {name : 'Ibrahim' , age : 43, position : 'junior'},
    {name : 'Musa' , age : 13, position : 'senior'},
]

const onlySenior = instructor.filter(person => person.position === 'senior');
// console.log(onlySenior); 
/*
[
  { name: 'Muhammad', age: 23, position: 'senior' },
  { name: 'Musa', age: 13, position: 'senior' }     
]
*/

const people = [
    {name : 'mina', age : 20},
    {name : 'razu', age : 15},
    {name : 'mithu', age : 22},
];

console.log(people.map(person => person.age).reduce((a,c) => a+c, 0));
