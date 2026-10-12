let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K13";
let crew = ["Lan", " An", " Binh", " Tinh"];
function launchShip(crew) {
  console.log(
    `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`,
  );
}
launchShip(crew);

function calculateDistance(speed, time) {
  return speed * time;
}
console.log(
  "Sau đây là khoảng cách đến hành tinh bí ẩn là: " +
    calculateDistance(1000, 24) +
    "km",
);
function convertTimeToHex(time) {
  return time.toString(16);
}
console.log("Thời gian ở hành tinh này là: " + convertTimeToHex(120) + " giây");

function decryptCode(code) {
  let result = "";
  for (const char of code) {
    if(char >="a" && char <="z"){
      result += char.toUpperCase();
    }else if (char >= "A" && char <= "Z"){
      result += char.toLowerCase();

    }else{
      result += char
    }
  }
  return result;
}
console.log("Mật mã là: " + decryptCode("K13 Challenge"));

function returnToEarth(){
  console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();