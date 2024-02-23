class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

const mycar1 = new Car('Tesla', 2026);
// console.log(mycar1);

class Product{
    country = 'Bangladesh';
    speak(text){
       console.log( `Amar deshe amra boli ${text}`)
    }
}

const lenovo = new Product();
// console.log(lenovo);

// lenovo.speak('Aai vat khamu');


class Teacher{
    constructor(name,subject){
        this.name = name;
        this.subject = subject;
    }
}

const tapan = new Teacher('Tapan', 'Physics');
// console.log(tapan);
// console.log(tapan.name);
// console.log(tapan.subject);


const roton = new Teacher('roton', 'Math');
// console.log(roton);
// console.log(roton.name);
// console.log(roton.subject);