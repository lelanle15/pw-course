// function multiply (a, b){
//     console.log(`${a} x ${b} = ${a*b}`);
// }
// multiply("5","6");
// multiply("10","6");

// bài 22222

// function findMin(a, b, c) {
//   let min = a;
//   if (b < min) {
//     min = b;
//   }
//   if (c < min) {
//     min = c;
//   }
//   return min;
// }
// console.log(findMin(4, 6, 1));
// console.log(findMin(4, 6, 10));

// bài 3

// function getTopStudent(students, threshold) {
//  let result = []

//  for(let i = 0; i < students.length; i++){
//     if(students[i].score >= threshold){
//         result.push(students[i].name);
//     }
//  }
// return result;
// }

//  const students = [
//     { name: "An",score: 100 },
//     { name: "Binh",score: 90 },
//     { name: "Lan",score: 70 }
//   ];

//   console.log(getTopStudent(students, 80));

// Nhớ template chung cho các dạng bài yêu cầu như này

// JavaScript
// function tenHam(arr) {
// let result = [];
// for (let i = 0; i < arr.length; i++) {

// if (điều_kiện) {
// result.push(giá_trị_cần_lấy);

// }

// }

// return result;
// }

// function getQualifiedEmployees(employees){
//     let result = [];
//     for(let i =0; i < employees.length; i++){
//         if(employees[i].age >= 18 && employees[i].salary >= 2000 ){
//             result.push(employees[i].name);
//         }
//     }
//     return result;

// }
// const employees = [
// { name: "A", age: 17, salary: 1500 },
// { name: "B", age: 20, salary: 2500 },
// { name: "C", age: 25, salary: 1000 },
// { name: "D", age: 30, salary: 3000 }
// ];
// console.log(getQualifiedEmployees (employees));

function getQualifiedStudents(students) {
    let result = [];
    for(let i =0; i< students.length; i++){
        if(students[i].score >=80 && students[i].active === true){
            result.push(students[i].name);
        }
    }
    return result;
}
const students = [
  { name: "An", score: 90, active: true },
  { name: "Binh", score: 90, active: false },
  { name: "Lan", score: 70, active: true },
  { name: "Minh", score: 95, active: true },
];
console.log(getQualifiedStudents(students));

function getInactiveUsers(users){
    let resultName = [];
    for(let i= 0; i < users.length; i++){
        if(users[i].active === false){
            resultName.push(users[i].name);
        }
    }
    return resultName;
}
const users = [
{ name: "Tom", active: true },
{ name: "Jerry", active: false },
{ name: "Anna", active: false }
]
 console.log(getInactiveUsers(users))

//  Bài 4

function calculateInterest(principal,rate, years){
    let total = 0
    total = principal+ principal*rate * years/100; 
return total;


}
// tính giá tiền sau khi discount

console.log(calculateInterest(1000,5,2));

function calculateDiscount (price, discountPercent){
    let finalPrice = price- (price*discountPercent/100);
    return finalPrice;
}
console.log(calculateDiscount(1000,50));