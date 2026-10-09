// 3.1 In tên và giá trị mỗi thuộc tính của student 
const student = { 
    "name": "Alex", 
    "age": 10, 
    "salary": 20 } 
// for (const property in student) { 
// console.log(`${property}: ${student[property]}`); 
// } 

// // 3.2 Tính tổng các giá trị số trong student
// let sum = 0;
// for (let key in student) {
// if (key === "age" || key === "salary") {
// sum += student[key];
// }
// }
// console.log(sum);

// Tạo mảng chứa tên các thuộc tính của student 
let result = [];
for(let ten in student){
result.push(ten);
}
console.log(result);