// if - else

const { log } = require("node:console");

/**
 * if(condition){
 * run code 1
 * }else{
 * run code 2
 * }
 */
// let score = 8;
// if (score >= 8) {
//   console.log("Học sinh giỏi");
// } else {
//   console.log("Học sinh khá hoặc trung bình");
// }

// if - elseif: kiểm tra nhiều điều kiện khác nhau
/**
 * if(condition 1){
 *  // run code 1
 * }else if (condition 2){
 * // run code 2
 * }else if (condition 3){
 * // run code 3
 * }else {
 * // run code when all condition false
 * }
 */

// let score1 = 75;
// if (score1 >= 90) {
//   console.log("Xuất sắc");
// } else if (score1 >= 70) {
//   console.log("giỏi");
// } else if (score1 >= 50) {
//   console.log("Trung Bình");
// } else {
//   console.log("yếu");
// }

//switch ..case..default
/**
 * switch (biểu thức){
 *  case gia_trị_1:
 * // run code 1
 * // break;
 *  case gia_trị_2:
 * // run code 2
 * // break;
 *  case gia_trị_3:
 * // run code 3
 * // break;
 * default:
 * // run code default
 * }
 */

let ngay = 3;
switch (ngay) {
  case 1:
    console.log("Thu hai");
    break;
  case 2:
    console.log("Thu ba");
    break;
  case 3:
    console.log("Thu tư");
    break;
  case 4:
    console.log("Thu năm");
    break;
  case 5:
    console.log("Thu sáu");
    break;
  case 6:
    console.log("Thu bảy");
    break;
  case 7:
    console.log("Chủ nhật");
    break;

  default:
    console.log("Ngày không hợp lệ");
}
