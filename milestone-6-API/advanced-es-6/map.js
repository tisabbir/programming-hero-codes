const arr = [1, 2, 3, 4, 5];
console.log("array", arr); //array [ 1, 2, 3, 4, 5 ]

const map = (arr, callback) => {
  const newArray = [];
  for (let element of arr) {
    const newElement = callback(element);
    newArray.push(newElement);
  }
  return newArray;
};

const triple = (num) => num * 3;
console.log("triple", map(arr, triple)); //triple [ 3, 6, 9, 12, 15 ]

const double = arr.map((num) => num * 2);
console.log("double", double); //double [ 2, 4, 6, 8, 10 ]

const sqr = arr.map((num) => num * num);
console.log("square", sqr); //square [ 1, 4, 9, 16, 25 ]
