const { log } = require("node:console");

let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

// Bài 2

// for (let i =2; i<=9; i++){
// console.log(`Bang cửa chương ${i}`);

//     for(let j =1; j<= 10; j++){
//         console.log(`${i} x ${j} = ${i*j}`);

//     }
//     console,log(".........................")
// }

// bài 3

const arrM = [];
for (let i = 1; i <= 99; i = i + 2) {
  arrM.push(i);
}
console.log(arrM);
// bài 4

for (let i = 1; i <= 10; i++) {
  console.log(`user-${i}@example.com`);
}
//bài 5

let arrD = [
  { month: 1, total: 100 },
  { month: 2, total: 200 },
  { month: 3, total: 100 },
  { month: 4, total: 100 },
  { month: 5, total: 100 },
  { month: 6, total: 100 },
  { month: 7, total: 100 },
  { month: 8, total: 100 },
  { month: 9, total: 100 },
  { month: 10, total: 100 },
  { month: 11, total: 100 },
  { month: 12, total: 100 },
];
let totalRe = 0
for (let i = 0; i < arrD.length ; i++) {
totalRe += arrD[i].total;
}
console.log(totalRe);
