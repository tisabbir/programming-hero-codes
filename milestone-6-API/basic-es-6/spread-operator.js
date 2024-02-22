const nums = [1,2,3,4];
const nums2 = [...nums, 2,3];
// console.log(nums2);

// console.log(nums);
const nums3 = nums;
nums3.push(999);
// console.log(nums);


// Ingredients for a sandwich
const bread = 'Whole Wheat Bread';
const cheese = 'Cheddar Cheese';
const lettuce = 'Iceberg Lettuce';
const tomatoes = 'Tomatoes';

// Making a sandwich using the spread operator
const sandwich = [bread, cheese, lettuce, tomatoes];

console.log(sandwich);
const sandwich1 = [...bread, ...cheese, ...lettuce, ...tomatoes];

console.log(sandwich1);