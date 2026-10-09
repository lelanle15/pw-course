// console.log("5"!=4);

// for ... in

//object

// let products = {
//     babana: 20,
//     apple: 30,
//     orange: 15
// }
// for (let product in products){
//      console.log(product);
//     console.log(products[product]);

// }

// Array

// const arr = ['a','b','c'];
// for(let i in arr){
//     console.log(i);
//     console.log(arr[i]);
// }

// foreach : dùng cho array
// cú pháp 
// array.forEach ((value, index) => {code});

// const fruits = ["Tao","Chuối", "Cam"];
// fruits.forEach((value, index) => {
//     console.log(`Trai cay o vi tri ${index} là ${value}`);
// })

// for of

// const colors = ["Red", "blue", "Green"];
// for(const color of colors){
//     console.log(color);
// }

// break
// const arr = [11,22,33];
// for(let i =0; i< arr.length; i++){
//     if(arr[i]%2 === 0){
//         break;
//     }
//     console.log(arr[i]);
// }

// continue

const arr = [11,22,33];
for(let i =0; i< arr.length; i++){
    if(arr[i]%2 === 0){
        continue;
    }
    console.log(arr[i]);
}