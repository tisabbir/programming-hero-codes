console.log('Hello from js')

function makeRed(){
    document.body.style.backgroundColor = 'red';
}

const makeBluer = document.getElementById('make-blue');
console.log(makeBluer)



function makeBluish(){
    document.body.style.backgroundColor = 'blue';
}

makeBluer.onclick = makeBluish; //I made mistake on it



// option three

const purpleMaker = document.getElementById('purple');
// console.log(purpleMaker)
purpleMaker.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// option four
const pinkMaker = document.getElementById('make-pink');
        pinkMaker.addEventListener('click', makePink);
        function makePink() {
            document.body.style.backgroundColor = 'pink';
        }

// Option four  Another 
const greenMaker = document.getElementById('green-button');
        greenMaker.addEventListener('click', function(){
            document.body.style.backgroundColor = 'green';
        })


// Final Option four