# GIT
## Thay đổi commit message
cách 1: Git commit --amend
- gõ i => vào chế độ insert
- Gõ esc để thoát insert
- Gõ ":wq" => write and quite

Cách 2: git commit --amend -m"message"

## Đưa các file từ vùng staging về working directory
```
- git resote --staged <file>
```
## Đưa từ vùng repository về working directory (uncommit)
- git reset HEAD~1 (undo 1 commit)
Muốn revert bao nhiêu commit thì ~ bấy nhiêu 

## Branching model
### Tạo branch
- git branch <ten_branch>: tạo branch
- git checkout <ten_branch>: Di chuyển sang nhánh khác
- git checkout -b <ten_branch>: Tạo và di chuyển sang nhánh khác
**Tips:**
- Luôn tạo ra branch mới trước khi thực hiện một lệnh copy từ internet

## .gitignore file
Dùng để bỏ qua các file không cần git theo dõi 
### Ignore file
```
<file name>
```
### Ignore folder
```
<folder-name>/
```
# JAVASCRIPT
## Convention

-snake_case_now_now
-kebab-case-now-now
-camelCaseNowNow
-PascalCaseNowNow

snake_case: chưa dùng
kebab-case: dùng đặt tên file, tên folder
camelCase: dúng đặt tên biến
PascalCase: dùng đặt tên class
## Console.log

### Formatted console.log 
```
const a = "K13";
console.log("Đây là lớp: " +a);
console.log("Đây là lớp:", a, "Automation test",12, "Student");
console.log(`Đây là lớp: ${a}`);

```

## Object

### Khai báo 

```
let/const <ten_object> = {
  <thuoc_tinh>: <gia_tri>,

}
Trong đó:-<thuoc_tinh>: giống quy tắc đặt tên 
biến-<gia tri>: có kiểu giống biến, hoặc 
là 1 object khác.
```

 ### Sử dụng
```
 const student = {
    "name": "lan",
    "age":20,
    "isK13Student": false,
    "score": {
        "math": 10,
        "science": 7
    }
}
```
```

//in đối tượng 

console.log("Name", student.name);
console.log("Name", student["name"]);
console.log("Name", student.score.math);
console.log("Name", student["score"].math);
console.log("Name", student["score"]["math"]);

```
### Gán lại 
```
// let age = 18;
// age = 20;
//  student.score.math = 9.5;
//  student["score"]["math"] = 9;
//  console.log("new score:", student.score.math);
```

## Logical operator

- && : cả 2 vế của mệnh đề đều đúng
- || : một trong 2 vế đúng
- ! : đảo ngược lại giá trị của mệnh đề

## Array: mảng 

### Tạo mảng
#### Khai báo 
```
Để khai báo mảng, ta sử dụng cú pháp: 
let/const/var <tên_mảng> = [<danh sách các giá trị, cách nhau bởi dấu phẩy ","] 

```
Ví dụ: 
```
let numberArr = [1, 20.5, -300, 4]; 
const strArr = ["Playwright", "Việt", "Nam"]; 
var mixedArr = ["Playwright", 10, true, null, {id: 1, name: 
"Alex"}]; 
console.log(numberArr); 
console.log(strArr); 
console.log(mixedArr); 
```
- - - 
- Mảng numberArr chứa các dữ liệu kiểu số. 
- Mảng strArr chứa các dữ liệu kiểu chuỗi. 
- Mảng mixedArr chứa các dữ liệu kiểu hỗn hợp: chuỗi, số, boolean, object. 

#### Thao tác trên mảng
1. Lấy độ dài của mảng
- Để lấy độ dài của mảng, ta dùng thuộc tính length của array: 
```
const arr = [1, 2]; 
console.log(arr.length);
``` 

#### Truy xuất phần tử của mảng
Để truy xuất phần tử trong mảng, ta dùng cú pháp arr[<index>], trong đó index là số thứ tự, tính từ 0. 
```
const udemy = [20, 50, 30, 40]; 
console.log(udemy[0]); 
console.log(udemy[1]); 
console.log(udemy[2]); 
console.log(udemy[3]); 
// Kết quả 
// 20 
// 50 
// 30 
// 40 
```
#### Thêm phần tử vào mảng
1. Thêm vào đầu mảng 

Sử dụng hàm unshift(): 
```
const arr = [20, 50]; 
arr.unshift(10); 
console.log(arr); 
// Kết quả 
// [ 10, 20, 50 ] 
```
2. Thêm vào cuối mảng 

Sử dụng hàm push(): 
```
const arr = [20, 50]; 
arr.push(10); 
console.log(arr); 
// Kết quả 
// [ 20, 50, 10 ]
```
#### Xóa phần tử khỏi mảng 

1. Xóa phần tử đầu của mảng 

Sử dụng hàm shift(): 
```
const arr = [20, 50, 10]; 
const deleted = arr.shift(); 
console.log(arr); 
console.log(deleted); 
// Kết quả 
// [ 50, 10 ] 
// 20 
```
Giải thích: 
- Hàm shift() xóa phần tử đầu tiên của mảng và trả về. 

2. Xóa phần tử cuối của mảng 
Sử dụng hàm pop() để xóa phần tử cuối cùng của mảng 
```
const arr = [20, 50, 10]; 
const deleted = arr.pop(); 
console.log(arr); 
console.log(deleted); 
// Kết quả 
// [ 20, 50 ] 
// 10 
```
Giải thích:
- Hàm pop() lấy giá trị cuối cùng của phần tử ra khỏi mảng và trả về. 

### Function: Hàm

#### Khai báo hàm 
1. Cú pháp 
```
function <tên_hàm(<danh_sách_tham_số>) { 
// Code của hàm 
} 
Trong đó: 
- function: từ khoá khai báo hàm 
- <tên_hàm>: tên của hàm. 
- <danh sách tham số>: các tham số của hàm, cách nhau bởi dấu phẩy “,” 
- Code của hàm: đoạn logic thực thi trong hàm. 

Ví dụ với hàm đơn giản 
function hello() { 
console.log(“Hello Playwright Viet Nam”); 
}
```
2. Gọi hàm
2.1. Hàm không có tham số 
- Đối với hàm không có tham số, ta chỉ cần “gọi hàm” bằng cách viết tên hàm và thêm cặp ngoặc 
tròn phía sau: hello();

2.2. Hàm có tham số
Tham số giúp hàm trở nên linh động hơn. Tham số nằm trong cặp ngoặc tròn (). 

Ví dụ 
``` 
function describePerson(name, age, city) { 
console.log(name + " is " + age + " years old and lives in " + 
city + "."); 
} 
describePerson("Bob", 30, "New York");  
// Kết quả: Bob is 30 years old and lives in New York. 
```
2.3. hàm có giá trị trả về 

Hàm có giá trị trả về là hàm trả về một giá trị sau khi hoàn thành việc thực thi. Giá trị trả về 
được chỉ định bằng từ khóa return. 

Ví dụ 
```
function add(a, b) { // a và b là tham số 
return a + b; // Trả về tổng của a và b
} 
let sum = add(5, 3); 
```






