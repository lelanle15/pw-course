// 3.1 Tìm giá trị đầu tiên trong scores > 80.
let scores = [85, 90, 78];
let firsrScore = scores.find((num) => num > 80);
console.log(firsrScore);
// 3.2 Tìm giá trị đầu tiên trong ages > 20.
let ages = [18, 21, 16, 25];
let firstAge = ages.find((num1) => num1 > 20);
console.log(firstAge);
// 3.3 Tìm từ đầu tiên trong words có độ dài > 5
let words = ["apple", "banana", "cherry", "date"];
let firstWord = words.find(num2 => num2.length > 5);
console.log(firstWord);
