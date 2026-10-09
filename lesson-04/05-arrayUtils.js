//map

const { log } = require("node:console");

// let numbers = [1,2,3,4];
// let newNumbers = numbers.map(num => num *2);
// console.log(newNumbers);

// Filter: trả về 1 mảng thõa mãn điều kiện 

// let numbers = [1,2,3,4];
// let newNumbers = numbers.filter(num => num %2===0);
// console.log(newNumbers);

// find: trả về phần tử đầu tiên thõa màn điều kiện 

// let numbers = [1,2,3,4];
// let newNumbers = numbers.find(num => num %2===0);
// console.log(newNumbers);

// reduce

// let numbers = [1,2,3,4];
// let sum = numbers.reduce((total, num)=> total + num,0);
// console.log(sum);

// some
// let numbers = [1,2,3,4];
// let hasEven = numbers.some(num => num %2 ===0);
// console.log(hasEven);

// every

// let numbers = [1,2,3,4];
// let allEven = numbers.every(num => num %2 ===0);
// console.log(allEven);

//push 
// shift 
// let number = [1,2,3];
// let firstElement = number.shift();
// console.log(number);
// console.log(firstElement);

// sort()
// let number = [1,10,2,21,100];
// number.sort();
// console.log(number);
// tăng dần 
// compareFn = (a,b) => a - b
// if  a-b < 0 => a đứng trước b
//  if a-b >0 => b đứng trước a 

// giảm dần 
// compareFn = (a,b) => b - a
// if  a-b < 0 => a đứng trước b
//  if a-b >0 => b đứng trước a 

let number = [1,10,2,21,100];
number.sort((a,b)=> a- b);
console.log(number);