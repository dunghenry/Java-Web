/**
 * Giới thiệu toán tử trong JavaScipt
 * 1. Toán tử số học - Arithmetic
 * 2. Toán tử gán - Assignment
 * 3. Toán tử so sánh - Comparison
 * 4. Toán tử logic - Logical
*/

//1. Arithmetic
var tong = 1 + 2;
var hieu = 10 - 2;
console.log(hieu);
console.log(tong);

//2. Assignment
var fullName = "Tran Dung";
console.log(fullName);

//3. Comparison
var a = 10;
var b = 1;
if(a > b){
    console.log(`${a} > ${b}`);
}
else{
    console.log(`${a} < ${b}`);
}

if(a == b){
    console.log(`${a} == ${b}`);
}
else{
    console.log(`${a} != ${b}`);
}

//4. Logical

var x = 10;
var y = 100;
if(x > 0 && y > 0){
    console.log(`${x} > 0`);
    console.log(`${y} > 0`);
}
else{
    console.log(`${x} < 0`);
    console.log(`${y} < 0`);
}







