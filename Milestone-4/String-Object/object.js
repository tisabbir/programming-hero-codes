let person1 = {
    name : 'Abdullah',
    age : 24,
    profession : 'Biochemist',
    Skill : 'Lab-expert'
}

// console.log(person1)
// console.log(person1.name);

// console.log(person1["Skill"])
// person1.Skill = 'wordpress expert'
// console.log(person1["Skill"])

// console.log(Object.keys(person1))
// console.log(Object.values(person1))


let per = new Object();
per.name =  'Akkas';
per.father =  'Jakkas';

console.log(per);

let per2 = Object.create({});
per2.name = 'Polao';
per2.father = 'Biriyani';
console.log(per2);