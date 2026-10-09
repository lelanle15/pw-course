// 4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90.
let scores = [85, 90, 78];
let newScores = scores.map((score) => {
  if (score < 90) {
    return  score += (score * 10/100);
  } else {
    return  score  -=(score * 5/100);
  }
});
console.log(newScores);
// 4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi.
let numbers = [1, 2, 3];
let newNumbers = numbers.map(num =>  num + "");
console.log(newNumbers);
// 4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị. 
let numbers1 = numbers.map(num1 => num1*2);
console.log(numbers1);
