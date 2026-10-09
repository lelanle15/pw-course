let numbers = [1, 2, 3];
// 1.1 In lần lượt từng phần tử của numbers.
numbers.forEach((num) => console.log(num));
// 1.2 tính tổng
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
console.log("Sum là ", sum);

// 1.2 tìm giá trị lớn nhất
let maxNum = numbers[0];
 numbers.forEach((num) => {
    if(num > maxNum){
        maxNum = num;
    }
 });
 console.log(`Số lớn nhất là: ${maxNum}`);
 // 1.2 tìm giá trị nhỏ nhất
let minNum = numbers[0];
numbers.forEach((num) => {
    if(num< minNum){
        minNum = num;
    }
});
console.log(`Số nhỏ nhất là: ${minNum}`);

// 1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi
let newArr = []
numbers.forEach(num =>{
    newArr.push(num *2);
})
console.log(newArr);

//  đếm có bao nhiêu phần tử trong mảnh
// const numbers = [1, 2, 3, 4, 5, 6];
// let count = 0
// numbers.forEach(num =>{count ++}  );


// console.log(count);

// In số chẵn
// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.forEach((num) => {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });

// Tính tổng số chẵn

// const numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0
// numbers.forEach((num) => {
//   if (num % 2 === 0) {
//    sum += num;
//   }
// });
// console.log(`Tổng các số chẵn là: ${sum}`);

// đếm số lượng số lẻ
// const numbers = [1, 2, 3, 4, 5, 6];
// let count = 0;
// numbers.forEach((num) => {
//   if (num % 2 !== 0) {
//     count++;
//   }
// });
// console.log(count);

// Tìm số lớn nhất là số chẵn
// const numbers = [11, 8, 25, 42, 30];
// let max = numbers[0];
// numbers.forEach(num => {
// if(num%2 ===0 && num > max){
//     max = num;
// }
// })
// console.log(max);

// Tính tổng các số lớn hơn 10
// const numbers = [5, 12, 8, 20, 15];
// let sum = 0;
// numbers.forEach(num => {
//     if(num > 10){
//         sum +=num;
//     }
// });
// console.log(sum);
//  tìm sinh viên có điểm cao nhất
// const students = [
// { name: "Lan", score: 8 },
// { name: "Minh", score: 9 },
// { name: "An", score: 10 }
// ];
// let max= students[0].score;
// let name1 = students[0].name

// students.forEach(ten =>{
//    if (ten.score > max){
//     max = ten.score;
//     name1 = ten.name;

//    }
// });
// console.log(name1);

//Đếm có bao nhiêu sinh viên đạt điểm >= 8.
// const students = [
// { name: "Lan", score: 8 },
// { name: "Minh", score: 5 },
// { name: "An", score: 9 }
// ];
// let count = 0;

// students.forEach(ten => {
//     if (ten.score >= 8){
//         count++;
//     }
// });
// console.log(count);
//Tính tổng giá tiền tất cả sản phẩm.

// const products = [
// { name: "iPhone", price: 1000 },
// { name: "Samsung", price: 800 },
// { name: "Oppo", price: 500 }
// ];
// let sum = 0;

// products.forEach(tien => {
// sum += tien.price;
// })
// console.log(sum);

// Tìm sản phẩm đắt nhất.

// const products = [
//   { name: "iPhone", price: 1000 },
//   { name: "Samsung", price: 8000 },
//   { name: "Oppo", price: 5000 },
// ];
// let max = products[0];
// products.forEach((product) => {
//   if (product.price > max.price) {
//     max = product;
//   }
// });
// console.log(max);

// đếm xem có bao nhiêu sản phẩm hớn hơn 700

// const students = [
//   { name: "Lan", score: 8 },
//   { name: "Minh", score: 5 },
//   { name: "An", score: 9 },
//   { name: "Hoa", score: 9 },
// ];
// // tìm điểm cao nhât
// let max = students[0];
// let count = 0;

// students.forEach((student) => {
//   if (student.score > max.score) {
//     max = student;
//   }
// });

// students.forEach((student) => {
//   if (student.score === max.score) {
//     count++;
//   }
// });
// console.log(count);
//................................................................................
