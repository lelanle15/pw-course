//Bài 1
const car = {
  make: "Toypota",
  model: "Corolla",
  year: 2021,
};
console.log("Năm sản xuất của xe là:", car.year);
//Bài 2
const person = {
  name: "Lan",
  address: {
    street: "Con đường xưa em đi",
    city: "Hồ Chí Minh",
    country: "Việt Nam",
  },
};
console.log(person.address.street);
// Bài 3

const student = {
  name: "Lan",
  grades: {
    math: 10,
    english: 9,
  },
};

console.log(student["grades"]["math"]);

// bài 4

let setting = {
  volunm: "100",
  brightness: "99",
};
setting.volunm = "90";
console.log(setting);

// bài 5
const bike = {};
bike.color = "Blue";
console.log("màu của xe là:", bike.color);

// bài 6
const employee = {
  name: "Lan1",
  age: 32,
};
delete employee.age;
console.log(employee);

// bài 7

const school = {
  classA: ["An", "Binh", "Chau"],
  classB: ["Đao", "Huong", "Giang"],
};
