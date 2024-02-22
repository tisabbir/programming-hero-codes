const person = {
    name : 'mofiz',
    age : 23,
    home : 'ctg',
    favNum : 7,
    favCity : 'Madina',
    dream : 'kabul',
}

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// use for of on Object ?

for(let prop of Object.entries(person)){
    // console.log(prop);
}

for(let prop in person){
    // console.log(prop);
    // console.log(person[prop]);
}

// console.log(person);
delete person.name;
person.watch = 'Rolex';
person.name = 'karim'
console.log(person);

Object.seal(person);
delete person.age;
person.car = 'Nissan';
person.watch = 'eStall';
console.log(person);