let mainContainer = document.getElementById('main-container');

let heading1 = document.createElement('h1');
heading1.innerText = 'Hello from js';
mainContainer.append(heading1);

let ul = document.createElement('ul');
let li1 = document.createElement('li');
li1.innerText = 'hello one';
ul.append(li1);
let li2 = document.createElement('li');
li2.innerText = 'hello two';
ul.append(li2);
let li3 = document.createElement('li');
li3.innerText = 'hello three';
ul.append(li3);

mainContainer.append(ul);


// Sections
let Sections = document.getElementsByTagName('section');
for(section of Sections){
    section.style.backgroundColor = 'lightblue';
    section.style.padding = '20px';
    section.style.border = '2px solid tomato';
    section.style.borderRadius = '16px';
    section.style.margin = '10px';
}

document.getElementsByClassName('section2')[0].classList.remove('section2');
document.getElementsByClassName('part2')[0].classList.add('blue');

// adding Section directly from js

// let directSection = document.getElementById('direct');
// let mySection = document.createElement(`
// <h1>Hello</h1>
// <p>Hello p</p>
// `)

// directSection.append(mySection);
let test = document.getElementById('three').nextSibling;

console.log(test)