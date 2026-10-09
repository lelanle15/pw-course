// 5.1 Kiểm tra scores có giá trị nào > 80 không.
let scores = [85, 90, 78];
let hasScore = scores.some((num) => num > 80);
console.log(hasScore);
// 5.2 Kiểm tra ages có giá trị nào < 18 không.
let ages = [18, 21, 16, 25];
let hasAge = ages.some((num1) => num1 < 18);
console.log(hasAge);
// 5.3 Kiểm tra words có từ nào dài > 5 không.
let words = ["apple", "banana", "cherry", "date"];
let hasWord = words.some(num2 => num2.length > 5);
console.log(hasWord);