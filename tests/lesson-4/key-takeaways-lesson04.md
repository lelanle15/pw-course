# Javascript

### Phạm vi của biến, var và let
Đoạn code không nằm trong cặp ngoặc nhọn nào gọi là phạm vi global (toàn cục). 
- Global
- function 
- Scope: {}


### Hoisting
- Var: có thể truy cập được vào biến trước khi được khai báo: Giá trị undefined
- Let: KHÔNG thể truy cập trước khi khai báo

### Điều kiện nâng cao  if…else, if…else if, switch…case
#### Điều kiện if…else…
Cú pháp điều kiện if…else…: 
```
if (condition) { 
// code block 1 
} else { 
// code block 2 
} 
```
Trong đó: 
- Nếu condition = true, sẽ chạy logic ở code block 1. 
- Nếu condition = false, sẽ chạy logic ở code block 2. 
#### Điều kiện if…else if…

Cú pháp điều kiện if…else if…: 
```
if (condition) { 
// Code block 1 
} else if (condition2) { 
// Code block 2 
} else if (condition3) { 
// Code block 3 
} else { 
// Code block 4 
}
```
Có thể hiểu if…else if là câu điều kiện nâng cao hơn câu điều kiện if, thêm một lần kiểm tra điều kiện, chia thành nhiều trường hợp: 

- Nếu condition đúng, chạy logic trong code block 1 
- Nếu condition sai, kiểm tra condition2 
    - Nếu condition2 đúng, chạy logic trong code block 2 
    - Nếu condition2 sai, kiểm tra condition3 
        - Nếu condition3 đúng, chạy logic trong code block 3 
        - Nếu condition3 sai, chạy logic trong code block 4 
Có thể hiểu, câu lệnh else là “các trường hợp còn lại”. 

#### Điều kiện switch…case 
switch…case thường dùng để rẽ nhánh trong trường hợp có nhiều điều kiện khác nhau. 
switch…case giúp code trở nên gọn gàng, dễ nhìn hơn

Cú pháp switch…case: 
```
switch (condition) { 
case "<case_value_1>": 
// code block 1 
break; 
case "<case_value_2>": 
// code block 2 
break; 
case "<case_value_3>": 
// code block 3 
break; 
default: 
// code block 4 
} 
```
Trong đó:  
- condition gọi là biểu thức điều kiện 
- Các case_value1, case_value2, case_value3… được gọi là các giá trị của các trường hợp. 
- Nếu sau khi tính toán, giá trị của condition rơi vào case_value nào thì sẽ chạy đoạn code tương ứng với case đó.
- Lưu ý, mỗi case cần có break để thoát khỏi đoạn logic của case. Nếu không có break, đoạn logic của case phía dưới sẽ tiếp tục được chạy. 
- default là case mặc định. Trong trường hợp nếu không có case nào match, logic default sẽ được chạy. 

### Toán tử so sánh == và !=

#### == và !=
-So sánh kiểu “lỏng lẻo”
-Convert giá trị về kiểu “lớn hơn”
#### === !==
- So sánh tuyệt đối 

### Vòng lặp nâng cao
#### Vòng lặp  for in : Dùng để duyệt key/index.
- for ... in: lặp lại các thuộc tính của object hoặc giá trị của mảng 

Cú pháp 
```
for (const property in object) { 
// Code ở đây 
} 
```
Trong đó: 
- const property: khai báo một biến tên là property. Trước mỗi vòng lặp, biến property này sẽ có giá trị là các thuộc tính của object 
- object: là tên biến có kiểu dữ liệu object

Ví dụ 
```
const student = { 
id: 1, 
name: "Alex", 
isGraduated: true 
}; 
for (const property in student) { 
console.log(property); 
} 
```

// Kết quả: 
// id 
// name 
// isGraduated 
#### Vòng lặp  foreach: duyệt mảng bằng callback

Cú pháp 
```
<biến_là_tên_mảng>.forEach(callbackFn) 
```
Trong đó:  
```
- <biến_là_tên_mảng>: tên của biến 
- callbackFn: viết tắt của callback function, là hàm xử lý vòng for. Thường hàm này sẽ là: item => { // code ở đây }.
``` 
Ví dụ;
```
let numberArr = [1, 20.5, -300, 4]; 
numberArr.forEach(number => { 
console.log(number) 
}) 
```
 Giải thích: 
- numberArr: tên biến 
- number => { console.log(number)}: hàm callback chứa thông tin mảng. 
    - Chú ý tới tên biến number, biến này đại diện cho các phần tử trong mảng. Ở mỗi vòng lặp, biến number sẽ được gán giá trị của từng phần tử trong mảng. 
#### Vòng lặp  for of: Dùng để duyệt giá trị (value) của Array, String, Set, Map,...
Cú pháp:
```
for (const item of <tên_biến_của_mảng>) { 
// Code ở đây 
} 
```
Trong đó:  
- item là tên của hằng số, giá trị hằng số sẽ được khởi tạo trong mỗi lần lặp 
- <tên_biến_của_mảng> là tên biến chứa mảng. 

Ví dụ 
```
const arr = [1, 3, 5, 2]; 
for (const item of arr) { 
console.log (item); 
} 
// Kết quả: 
// 1 
// 3 
// 5 
// 2
```
=> 
***NOTE:***
- for...in : Dùng để lặp qua key (thuộc tính) của object hoặc index của array.
- for...of: Dùng để lặp qua giá trị (value).

#### Vòng lặp break and continue
### Utils functions
#### String utils
- trim(): dùng để loại bỏ khoảng trắng ở đầu và cuối chuỗi. 
- toLowerCase() : chuyển đổi tất cả các ký tự trong chuỗi thành chữ thường. 
- toUpperCase(): chuyển đổi tất cả các ký tự trong chuỗi thành chữ hoa. 
- includes():  kiểm tra xem một chuỗi có chứa một chuỗi con (substring) hay không. Nó trả về true nếu tìm thấy, trả false khi không tìm thấy.
- replace(): dùng để thay thế một chuỗi con trong chuỗi bằng một chuỗi khác.
- split(): chia một chuỗi thành một mảng các chuỗi con, dựa trên một ký tự (delimiter).
- substring():  trả về một phần của chuỗi, bắt đầu từ chỉ số (index) được chỉ định đến một chỉ số khác hoặc đến cuối chuỗi.
- indexOf(): trả về vị trí xuất hiện đầu tiên của một chuỗi con trong chuỗi, hoặc -1 nếu không tìm thấy

#### Array utils
- map(): tạo ra một mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc.
- filter(): tạo ra một mảng mới chỉ bao gồm các phần tử thỏa mãn điều kiện được chỉ định trong hàm callback. 
- find(): trả về giá trị của phần tử đầu tiên trong mảng thỏa mãn điều kiện được chỉ định trong hàm callback, nếu không có phần tử nào thỏa mãn thì trả về undefined.
- reduce(): áp dụng một hàm lên từng phần tử của mảng (từ trái qua phải) để trả về một giá trị duy nhất. 
```
let numbers = [1, 2, 3, 4]; 
let sum = numbers.reduce((total, num) => total + num, 0); 
console.log(sum); 
// Kết quả: 10 
//total: biến nhận giá trị duy nhất 
//num: phần tử của mảng 
//0 giá trị khởi tạo cho biến total 
```
- some():  kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện được chỉ định trong hàm callback. Trả về true nếu tìm thấy, ngược lại trả về false.
- every(): kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện được chỉ định trong hàm callback hay không. Trả về true nếu tất cả đều thỏa mãn, ngược lại trả về false. 
- push(): Phương thức push() thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng.
- shift
- unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng, làm thay đổi mảng gốc.
- sort
- pop(): Xóa và trả về phần tử cuối cùng của mảng, làm thay đổi mảng gốc 
