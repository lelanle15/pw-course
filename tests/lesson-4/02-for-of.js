// 2.1 In lần lượt từng ký tự của str
// let str = "Playwright" ;
// for (const item of str){
//     console.log(item);
// }

// //Tạo mảng đảo ngược từ str
// let str1 = "Playwright" ;
// let result = [];
// for(let char of str1){
//    result.unshift(char);
// };
// console.log(result);

//Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
// arr = [1, 2, 3, 4, 3, 55, 3];
// let firstIndex = -1;
// let lastIndex = -1;
// let index = 0;
// for (let num of arr) {
//   if (num === 3) {
//     if (firstIndex === -1) {
//       firstIndex = index;
//     }
//     lastIndex = index;
//   }
//   index++
// }
// console.log("Vị trí đầu tiên:", firstIndex);
// console.log("Vị trí cuối cùng:", lastIndex);

// lọc phần tử xuất hiện 1 lần trong mảng

// const dupArr = [1, 2, 3, 1, 2, 4, 5];
// let result = [];

// for (const num of dupArr) {
//   let count = 0;
//   for (const item of dupArr) {
//     if (num === item) {
//       count++;
//     }
//   }
//   if (count === 1) {
//     result.push(num);
//   }
// }
// console.log(result);
// Bình phương
// const arr = [1, 2, 3, 4, 5];
// let result = [];
// for(let num of arr){
//     result.push(num*num);
// }
// console.log(result);

const users = [
{ name: "Lan", active: true },
{ name: "An", active: false },
{ name: "Vy", active: true }
];

for(let itemm of users){
    if(itemm.active === true){
 console.log(itemm.name);
    }
   
}