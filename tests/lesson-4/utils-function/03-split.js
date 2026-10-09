// 1. Chia name thành mảng các từ (dùng khoảng trắng).

let names = "Nguyễn Văn A";
let words = names.split(" ");
console.log(words);
// 2. Chia emails thành mảng các email (dùng dấu phẩy).
let emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
let words1 = emails.split(",");
console.log(words1);
// 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang). 

let date = "2024-05-19";
let word2 = date.split("-");
console.log(word2);