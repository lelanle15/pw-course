# XPath selector

- XPath = XML Path
- Có 2 loại:
    - Tuyệt đối: đi dọc theo cây DOM
        - Bắt đầu bởi 1 / (Ví dụ: /html/body/div/p)
    - Tương đối: tìm dựa vào đặc tính 
        - bắt đầu bởi 2 //
        - //tenThe[@thuoctinh="giatri"]
        - Ví dụ: //div[@id='parent']
- Nên dùng XPath tương đối 

//select[@id = 'country']

# Playwright basic syntax

## test
- Đơn vị cơ bản để khai báo một test
```
import {test} from '@playwright/test';

test('<tên test>', async ({page}) => {
    //code của test
}) ;
```

## step
- Đơn vị nhỏ hơn test, để khai báo từng step của test case
```
await test.step('Tên step', async() => {
    // Code here
})
```
=> Lưu ý: step nên được map 1- với test case để dễ dàng maintain.


## Basic actions

### Navigate 
Cú pháp:
```
await page.goto('https://material.playwrightvn.com/');
```
### Click
#### Single click
```
await page.locator ("//button").click();
```
#### Double click
```
await page.locator("//button").dbclick();
```
#### Click chuột phải 
```
page.locator("//button").click({
    button: 'right'
})
```
#### Click chuột kèm bấm phím khác

```
page.locator("").click({
    modifiers: ['Shift']
})
```
### Input
#### Fill
- Giống việc bạn paste content vào một ô input
```
page.locator("//input").fill('Playwright Viet Nam');
```
#### pressSequentially 
- Giống việc bạn gõ từng chữ cái vào ô input 
```
page.locator("//input").pressSequentially('Playwrigh Viet Nam', {
    delay: 100,
});
```

### Radio/checkbox
#### Lấy giá trị hiện tại đang là check hay không:
```
const isChecked = page.locator(("//input")).isChecked();
```

Check/uncheck
```
// Check vào checkbox
page.locator("//input").check();
//Bỏ check vào checkbox
page.locator(//input").setChecked(false);
```
### hover
- Để hover vào phần tử ta dùng hàm hover:
```
await page.locator("<xpath here>").hover();
```

### text
- Hàm text() dùng để tìm ra phần tử có giá trị tương ứng. 
- Ví dụ với DOM sau:
```
<div @class=”playwright”>This is a text</div>
```
Thì đề chọn ra phần tử này, ta dùng cú pháp như sau:
//div[text()=’This is a text’]

### contains
Đôi khi trong phần tử HTML, phần tử sẽ bị thừa khoảng trắng, hoặc có các giá trị không cố định trong text. Ví dụ;
```
<div> Tôi là Alex </div>// Text này có 1 ký tự space ở đầu và ở đuôi
<div> Bây giờ là: 08:07 </div>//Thời gian sẽ tuỳ vào thời điểm truy cập trang web
```
Để chọn các phần tử này, ta cùng hàm contains(<giá trị>, <giá trị contains>). Ví dụ
```
//div[contains(text(), ‘Tôi là Alex’)]
//div[contains(text(), ‘Bây giờ là:’)]
```



