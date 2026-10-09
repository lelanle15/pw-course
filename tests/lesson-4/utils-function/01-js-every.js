// 1.1 Kiểm tra tất cả giá trị trong scores có > 70 không. 
let scores = [85, 90, 78] ;
let allEven = scores.every(num => num >70 );
console.log(allEven);

// 1.2 Kiểm tra tất cả giá trị trong ages có > 15 không.
let ages = [18, 21, 16, 25] ;

let age1 = ages.every(num1 => num1 > 15);
console.log(age1);

// 1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không. 
let words = ["apple", "banana", "cherry", "date"] ;
 let checkLength = words.every(word => word.length > 3);
 console.log(checkLength);
 

