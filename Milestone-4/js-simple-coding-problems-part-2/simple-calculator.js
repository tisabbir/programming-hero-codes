function add(a,b){return a+b};
function substraction (a,b) {return a-b};
function multiplication (a,b) {return a*b};
function division (a,b) { return a/b};

function calculator(a,b,func){
    console.log(func(a,b));
}

calculator(90,100,add);
calculator(180,150,substraction);
calculator(180,60,division);
calculator(180,2,multiplication);