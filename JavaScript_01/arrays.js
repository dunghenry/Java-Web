/**
 * Mảng trong JavaScript
 * 1.Tạo mảng
 * -Cách tạo
 * -Sử dụng cách nào?Tại sao?
 * -Kiểm tra data type
 * 2.Truy xuất mảng
 * -Độ dài mảng
 * -Lấy phần tử theo index
 */

var languages1 = ["JS", "C++", "PHP"];
var languages2 = new Array("JS", "C++", "PHP");

console.log(languages1);

console.log(typeof languages1); //object

console.log(Array.isArray(languages2)); //true

console.log(languages1.length);//3

for (var i = 0; i < languages1.length; i++){
    console.log(languages1[i]);
}

console.log(languages2[1]); //C++
