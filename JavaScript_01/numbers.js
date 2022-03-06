var a = 10;
var b = 3.14;

var x = new Number(10);

console.log(typeof x); //object

var result = a / 'ABC'; //NaN
console.log(result); //NaN
console.log(result === NaN); //false
console.log(isNaN(result)); //true

//Làm việc vs number
//toString

var str = a.toString();
console.log(typeof str); //string

var PI = Math.PI;

//toFixed
console.log(PI.toFixed()); //3
//Tự làm tròn lên hoặc làm tròn xuống.toFixed(2) thường dùng để làm việc với tiền bạc
console.log(typeof PI.toFixed()); //string
//

//toPrecision
let y = 9.656;
y.toPrecision(); //9.656
y.toPrecision(2); //9.7
y.toPrecision(4);//9.656
y.toPrecision(6);//9.65600

var z = new Number(10);

console.log(typeof z.valueOf()); //convert obj => number

console.log(Number(true)) //1
console.log(Number(false)) //0