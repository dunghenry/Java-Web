/**Chuỗi trong JavaScript
 * 1.Tạo chuỗi
 * -Cách tạo chuỗi
 * -Nên dùng cách nào? Lý do?
 * -Kiểm tra data type
 * 2.Một số case sử dụng backslash (\)
 * 3.Xem độ dài chuỗi
 * 4.Chú ý độ dài khi viết code
 * 5.Template string ES6
 */

var fullName = "Dung Tran";
console.log(typeof fullName) // string

var str = new String("Tran Dung");
console.log(typeof(str)); //object

var str2 = "Tran Dung là một \"học sinh\"";
console.log(str2); //Tran Dung là một "học sinh"

var str3 = "Đây là \\";
console.log(str3); //Đây là \

//Length
console.log(str3.length); // 8

var age = 21;

//Tempalte string
console.log(`Tuổi của bạn là ${age} `) // Tuổi của bạn là 21