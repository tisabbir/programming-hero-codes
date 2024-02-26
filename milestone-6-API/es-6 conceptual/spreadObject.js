const person = {
    name : 'anis',
    car : 'janis',
    roll : 'tanis',
    mail : 'kanis',
}

const person1 = {...person};
person1.game = 'clashOfClan';

console.log(person);
console.log(person1);

const {name, car:amarNam} = person;

console.log(amarNam);