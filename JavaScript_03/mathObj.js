// Math.PI
console.log(Math.PI); //3.141592653589793

//Math.round
console.log(Math.round(1.3)); // Nếu như phần sau dấu phẩy nhỏ hơn 5 thì làm tròn xuống ngược lại làm tròn lên

//Math.abs
console.log(Math.abs(-1)) //1

//Math.ceil: Làm tròn lên
console.log(Math.ceil(10.1)) //11 

//Math.floor: Làm tròn dưới 
console.log(Math.floor(10.9)) // 10

//Math.random: Lấy số ngẫu nhiên 0 -> 1
console.log(Math.floor(Math.random() * 10)) // Lấy số ngẫu nhiên từ 0 -> 9

var random = Math.floor(Math.random() * 5);
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];

console.log(bonus[random]);

//Game

var random1 = Math.floor(Math.random() * 100);
if(random1 < 5){ // tỉ lệ đc nhỏ hơn 5%
    console.log(random1);
    console.log("Thành công");
}

var min = Math.min(1, 2, 4, 5);
console.log("Min : " + min);

var max = Math.max(1, 2, 4, 5);
console.log("Min : " + max);
