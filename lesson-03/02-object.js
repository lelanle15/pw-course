// const student = {
//     "name": "lan",
//     "age":20,
//     "isK13Student": false,
//     "score": {
//         "math": 10,
//         "science": 7
//     }
// }
// //in đối tượng 

// console.log("Name", student.name);
// console.log("Name", student["name"]);
// console.log("Name", student.score.math);
// console.log("Name", student["score"].math);
// console.log("Name", student["score"]["math"]);

// // Gán lại giá trị 
// let age = 18;
// age = 20;
//  student.score.math = 9.5;
//  student["score"]["math"] = 9;
//  console.log("new score:", student.score.math);

const student = {
    "name": "Alex",
    "finalGrade": 8.5,
    "class": {
        "name": "K6",
        "major": "Automation"
    }
}

console.log("Name:", student["class"]["name"]);
