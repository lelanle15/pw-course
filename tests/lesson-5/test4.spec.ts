import {test} from "@playwright/test";

test("Exercise 4 cach 1", async({page})=> {
    let notes = [
        {title:"Bên trong trung tâm chọn giống tôm bố mẹ ở Khánh Hòa", content: "Khánh HòaTrung tâm Di truyền và chọn giống tôm bố mẹ tại xã Phước Dinh là một trong ba trung tâm" },
        {title: "Mở hộp Apple Watch Ultra 4 giá 23,9 triệu đồng trước mở bán", content: "Mở hộp Apple Watch Ultra 4 giá 23,9 triệu đồng trước mở bán ple Watch Ultra 4, bán ra ngày 22/10 tại Việt Nam, không thay đổi" },
        {title: "Khủng hoảng heli bủa vây ngành chip và bán dẫn",content: "Nguồn cung heli thương mại đang thiếu hụt trầm trọng, đe dọa gây gián đoạn sản xuất ở các ngành" },
        {title: "Test 123", content: "Test 123"},
        {title: "Test 124", content: "Test 124"},
        {title: "Test 125", content: "Test 125"},
        {title: "Test 126", content: "Test 126"},
        {title: "Test 127", content: "Test 127"},
        {title: "Test 128", content: "Test 128"},
        {title: "Test 129", content: "Test 129"}
    ];
    await test.step("Goto page material" , async()=>{
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Go to page Personal notes", async() => {
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    })
    for(let note of notes){
        await page.locator("//input[@id='note-title']").fill(note.title);
        await page.locator("//textarea[@id='note-content']").fill(note.content);
        await page.locator("//button[@id='add-note']").click();
    }
    await test.step("Search title", async()=>{
        await page.locator('//input[@type="text" and @id="search"]').fill("Apple Watch Ultra");
    })
});
test("Exercise 4 cach 2", async({page})=> {
    let titles: string[] = [];
    let contents: string[] = []

    await test.step("Vao trang vnexpress lay data", async() =>{
        await page.goto("https://vnexpress.net/", {waitUntil: 'domcontentloaded'});
        titles = await page.locator("//h3[@class='title-news']/a").allTextContents();
        contents = await page.locator("//p[@class = 'description']/a").allTextContents();
        console.log(titles);

    })
   
    await test.step("Goto page material" , async()=>{
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Go to page Personal notes", async() => {
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    })
    for(let i =0; i < 10; i++){
        await page.locator("//input[@id='note-title']").fill(titles[i]);
        await page.locator("//textarea[@id='note-content']").fill(contents[i]);
        await page.locator("//button[@id='add-note']").click();
    }
    await test.step("Search title", async()=>{
        await page.locator('//input[@type="text" and @id="search"]').fill("Giá một");
    })
})