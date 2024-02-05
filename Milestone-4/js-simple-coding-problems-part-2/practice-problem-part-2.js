// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function lowestNumberFinder(arr) {
  let lowestNumber = arr[0];
  for (let num of arr) {
    if (num < lowestNumber) {
      lowestNumber = num;
    }
  }
  return lowestNumber;
}
// const theLowestNumber = lowestNumberFinder([167, 190, 120, 165, 137]);
// console.log(theLowestNumber)

// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function smallestStringFinder(arr) {
  let smallestString = arr[0];
  for (let str of arr) {
    if (str.length < smallestString.length) {
      smallestString = str;
    }
  }
  return smallestString;
}

// const theSmallestString = smallestStringFinder(['rahim', 'robin', 'rafi', 'ron', 'rashed'])
// console.log(theSmallestString)

// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

let laptopPrice = 35000;
let tabletPrice = 15000;
let mobilePrice = 20000;

function calculateElectronicsBudget(
  laptopQuantity,
  tabletsQuantity,
  mobileQuantity
) {
  let forLaptop = laptopPrice * laptopQuantity;
  let forTablet = tabletPrice * tabletsQuantity;
  let forMobile = mobilePrice * mobileQuantity;

  let totalPrice = forLaptop + forTablet + forMobile;
  console.log(totalPrice);
}

// calculateElectronicsBudget(1,2,3)

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input

//     const phones = [
//         { model: "PhoneA", brand: "Iphone", price: 95000 },
//         { model: "PhoneB", brand: "Samsung", price: 40000 },
//         { model: "PhoneC", brand: "Oppo", price: 26000 },
//         { model: "PhoneD", brand: "Nokia", price: 35000 },
//         { model: "PhoneE", brand: "Iphone", price: 105000 },
//         { model: "PhoneF", brand: "HTC", price: 48000 },
//     ];

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(arr) {
  let totalPrice = 0;
  let objCount = 0;
  for (let obj of arr) {
    totalPrice = totalPrice + obj.price;
    objCount++;
  }
  let avgPrice = totalPrice / objCount;
  return avgPrice;
}

// const theAvgPrice = findAveragePhonePrice(phones);
// console.log(theAvgPrice)

// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

//  const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalSalaryCounter(arr) {
  let totalSalary = 0;
  for (let obj of arr) {
    totalSalary = totalSalary + (obj.starting + obj.increment * obj.experience);
  }
  return totalSalary;
}

const theTotalSalary = totalSalaryCounter(employees);
console.log(theTotalSalary)
