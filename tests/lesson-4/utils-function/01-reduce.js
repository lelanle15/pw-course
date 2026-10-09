// 6.1 Tính tổng các giá trị trong scores.
let scores = [85, 90, 78];
let sum = scores.reduce((total, num) => total + num, 0);
console.log(sum);
// 6.2 Tính tích các giá trị trong numbers.
let numbers = [1, 2, 3, 4];
let product = numbers.reduce((prod, num1) => prod * num1, 1);
console.log(product);
// 6.3 Tính tổng các giá trị trong expenses.
let expenses = [50, 100, 150];
let sum1 = expenses.reduce((total1, num2)=> total1+num2, 0);
console.log(sum1);
// Tìm số lớn nhất
let maxScores = scores.reduce((max, num) => {
    if( max < num){
        max = num;
    }
    return max;
})
console.log(maxScores);