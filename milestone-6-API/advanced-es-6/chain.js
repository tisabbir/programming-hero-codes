// Data access
const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA',
    },
    contact: {
        email: 'john@example.com',
        phone: '123-456-7890',
    }
};

// console.log(person.contact.phone);
// console.log(person.address);



// Optional chaining
const classroom = [
    { name: 'Alice', age:  {
        pre : 15,
        post : 55,
    }, subjects: ['Math', 'Science'] },
    { name: 'Bob', age:  {
        pre : 15,
        post : 55,
    }, subjects: ['History', 'English'] },
    { name: 'Charlie', subjects: ['Physics', 'Chemistry'] },
    { name: 'kBob', age: {
        pre : 15,
        post : 55,
    }, subjects: ['History', 'English'] },
];

for(let obj of classroom){
  const name =  obj.name;
  const subject1 = obj?.subjects[0]; 
  const subject12 = obj?.subjects[1]; 
  const age = obj.age?.pre;

  const fullInfo = `
    Name : ${name},
    Subject : ${subject1} & ${subject12},
    age : ${age}
  `
  console.log(fullInfo);
}