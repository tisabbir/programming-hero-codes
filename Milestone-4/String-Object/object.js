let person1 = {
    name : 'Abdullah',
    age : 24,
    profession : 'Biochemist',
    Skill : 'Lab-expert'
}

// console.log(person1)
console.log(person1.name);

console.log(person1["Skill"])
person1.Skill = 'wordpress expert'
console.log(person1["Skill"])

console.log(Object.keys(person1))
console.log(Object.values(person1))