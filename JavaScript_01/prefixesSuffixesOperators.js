//Toán tử ++. --
//Prefix, Suffexes
var a = 10
//Việc 1: +1 cho a, a = a + 1, => a = 7;
//Việc 2: trả về a sau khi đc cộng 1

console.log(++a);

var b = 10;
//Việc 1: b copy, b copy = 10
//Việc 2: +1 cho b, b = b + 1 => b = 11;
//Việc 3: Trả về b copy

var output = b++;
console.log("output : " + output); // 10
console.log("b : " + b); //11

var c = 5;
var kq = c++ + --c;
// 6 + 6
console.log("c : " + c); //12

var number = 6;

var ketqua = ++number * 2 - number-- * 2;

//7 * 2 - 7 * 2
console.log(ketqua); //14
console.log(number); 

