# Key takeaways lession 2
## Version control system
- Có 3 loại vcs:
    - Local: Lưu ở máy cá nhân
    - Centralize: lưu ở máy chủ tập trung (giống như lưu ở gg doc)
    - Distributed: lưu ở nhiều máy khác nhau (ví dụ như lưu ở git)
## GIT
### So sánh git và github

| Git | GitHub |
|------|------|
| Là một phần mềm | Là một dịch vụ web |
| Cài trên máy của bạn | Host trên website |
| Là một commandline tool | Là công cụ có giao diện |
| Là công cụ quản lý phiên bản, đưa file vào Git repository | Là nơi để upload Git repository lên |
| Có các tính năng của Version Control System | Có các tính năng của Version Control System và một số tính năng khác |

### Ba vùng trạng thái 
Sau khi khởi tạo, git sẽ có 3 vùng trạng thái:

    - Working directory
    - Staging
    - Repository
### Các câu lệnh thường dùng
# Các câu lệnh thường dùng

## Các câu lệnh thường dùng

| Câu lệnh | Công dụng |
|-----------|-----------|
| `git init` | Khởi tạo một thư mục Git mới (Working Directory), chứa các file tạo mới chưa được commit (untracked files). |
| `git config user.name "<name>"`<br>`git config user.email "<email>"` | Cấu hình cho 1 repo |
| `git config --global user.name "<name>"`<br>`git config --global user.email "<email>"` | Cấu hình cho toàn bộ máy tính (default) |
| `git add <file_name>` | Thêm 1 file vào vùng staging |
| `git add .` | Thêm toàn bộ file vào vùng staging |
| `git status` | Xem trạng thái file:<br>&nbsp;&nbsp;&nbsp;&nbsp;- File màu xanh: vùng staging<br>&nbsp;&nbsp;&nbsp;&nbsp;- File màu đỏ: vùng working directory |
| `git commit -m "message"` | Chuyển tất cả các file đang ở trạng thái sẵn sàng commit (staging), sang trạng thái commit (tạo một phiên bản - Repository) |
| `git log` | Kiểm tra lịch sử commit |
| `git push` |  Đẩy các commit từ Local Repository lên Remote Repository (GitHub).|

### Git Workflow
#### Git - simple workflow Sửa file
```text
Sửa file
↓
git add
↓
Staging Area
↓
git commit
↓
Local Repository
↓
git push
↓
GitHub
```

#### Git - simple workflow khởi tạo git
```text
init
↓
config
↓
add
↓
commit
↓
push
```
### Cách đặt commit convention
**<Loại (type)>: <Short_description>**
- feat: add login test
- fix: fix login testcase
- chore: remove unused file
## Javascript basic
### Đuôi file và cách chạy file 
- Đuôi file: file_name.js
- Chạy bằng lệnh: node <path_file_name>
### Biến
#### Quy tắc đặt tên biến
- Tên biến được tạo ra bởi các ký tự chữ, số, _ và $. 
- Tên không được phép bắt đầu bằng số (chỉ bắt đầu bằng ký tự chữ hoặc $ hoặc _). 
- Không được chứa các ký hiệu đặc biệt như ký hiệu toán học, logic (như +, -, *, >, < ...). 
- Không được chứa khoảng trắng. - Không được đặt tên biến trùng với các từ khóa dành riêng cho ngôn ngữ Javascript 
#### Khai báo và khởi tạo biến
Để khai báo biến, ta có 2 từ khoá: **var và let.** 

**Ta có thể khai báo và gán giá trị ngay.** Ví dụ:

var name ="Lan";

let major =" Học automation test từ chưa biết gì”;

**Hoặc khai báo và gán giá trị sau:** 

var name; 
let major; 
name = “Playwright Việt Nam”; 

major = “Học automation test từ chưa biết gì”; 
#### Thay đổi giá trị 
Để thay đổi giá trị của biến, ta thực hiện gán lại giá trị của biến sang giá trị khác mà không cần từ khoá var/let. 

var name = “Playwright”; 

name = “Playwright Viet Nam”;

### Hằng số

Hằng số cần gán giá trị ngay tại thời điểm khai báo 

const framework = “Playwright”;

***Hằng số không thể thay đổi giá trị, nếu cố ý thay đổi thì sẽ gây ra lỗi***
***Lưu ý: Nên dùng let để khai báo biến để dễ kiểm soát phạm vi truy cập. Không dùng var.***

### Điều kiện if 
#### Cú pháp điều kiện if: 
if (condition) { 
// code block 
} 
Trong đó, condition = true thì sẽ chạy đoạn code block. 

### Loops

Cú pháp: for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) { // code } 
Ví dụ 
for (let i = 1; i <= 5; i++) { 
console.log("Giá trị của i là: ", i); 
} 
// 1 
// 2 
// 3 
// 4 
// 5




