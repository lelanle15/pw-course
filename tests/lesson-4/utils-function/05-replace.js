let phoneNumber = "0123 456 789";
let report = "Có một lỗi trong hệ thống.";
let numbersStr = "1,234,567";

// 1. Thay khoảng trắng bằng "." trong phoneNumber 
phoneNumber = phoneNumber.replaceAll(" ",".");
console.log(phoneNumber);
// 2. Thay "lỗi" bằng "bug" trong report. 
report = report.replace("lỗi", "bug");
console.log(report);

// 3. Thay "," bằng "." trong numbersStr. 

numbersStr = numbersStr.replaceAll(",", ".");
console.log(numbersStr);
