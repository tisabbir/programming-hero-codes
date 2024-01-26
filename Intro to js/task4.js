var a = isNaN('11');

var b = isNaN(2-10);

console.log (a , b)

// Let's analyze each line of code:

// var a = isNaN('11');

// Here, the isNaN function is used to check if the provided value is not a number. However, before applying isNaN, the value '11' is a string. JavaScript will attempt to convert this string to a number when evaluating isNaN. Since '11' can be successfully converted to the number 11, the isNaN function will return false.

// Therefore, the value of a will be false.

// var a = isNaN(2 - 10);

// In this case, the expression 2 - 10 results in the number -8. The isNaN function is then applied to this numeric result. As -8 is a valid number, the isNaN function will return false.

// Therefore, the value of a will be false again.