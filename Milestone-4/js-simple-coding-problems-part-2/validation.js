// Validation of parameters

// number

function adder(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    let errorMsg = "Please Provide a valid number";
    return errorMsg;
  } else {
    return a + b;
  }
}

// console.log(adder(5, 8));

// string Validation
function stringConsoler(str) {
  if (typeof str !== "string") {
    console.log("Please provide a valid string");
  } else {
    console.log(str);
  }
}

// stringConsoler('I am a good men')
// stringConsoler(313)

// Object validation

function pricePrinter(obj) {
  if (typeof obj !== "object" || typeof obj.price !== "number") {
    console.log(
      "Please provide a valid object which contains price key with valid number value"
    );
  }else {
    console.log('The price is ', obj.price)
  }
}

// pricePrinter({
//     name : 'Akkash',
//     price : 75
// })

// pricePrinter('hello')
// pricePrinter([1,2,3,4])


// Array Validation 

function arrayLengthPrinter(arr){
    if(Array.isArray(arr)===true){
        console.log('the length of the array is ', arr.length);
    } else {
        console.log('Please provide a valid array')
    }
}

arrayLengthPrinter([1,2,4]);
arrayLengthPrinter({ name : 'hello' , price : 75 , value : 313});
arrayLengthPrinter('hello');