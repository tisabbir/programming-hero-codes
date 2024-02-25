function hello(a,b,c){
    const   result = a+b+c;
    console.log(arguments);
}

hello(1,2,4);

console.log(hello.length); //the number of parameter a function has

