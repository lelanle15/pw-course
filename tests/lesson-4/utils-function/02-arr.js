// 1. Push: Thêm 4 vào cuối numbers; thêm "David" vào cuối names.
let numbers = [1, 2, 3];
let names = ["Alice", "Bob", "Charlie"];
numbers.push(4);
names.push("David");
console.log(numbers);
console.log(names);
// 2. Pop: Loại bỏ phần tử cuối của numbers = [1, 2, 3, 4].
let popNumber = numbers.pop();
console.log(numbers);
console.log(popNumber);
// 3. Unshift: Thêm 0 vào đầu numbers; thêm "David" vào đầu names.
numbers.unshift(0)
names.unshift("David");
console.log(numbers);
console.log(names);
// 4. Shift: Loại bỏ phần tử đầu của numbers = [1, 2, 3, 4].
let shiftNumber = numbers.shift();
console.log(numbers);
console.log(shiftNumber);

