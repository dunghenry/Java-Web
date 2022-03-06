var myString = 'Học JavaScript JavaScript';

//Length
console.log(myString.length) // 14

//find index of

console.log(myString.indexOf("JavaScript")); //Trả về vị trí đầu tiên của nó nếu chuỗi tìm kiếm tồn tại trong chuỗi: 4
console.log(myString.indexOf("Java", 3)); // 4
console.log(myString.indexOf("Chuỗi")); //Không tìm thấy trả về -1
console.log(myString.lastIndexOf("JavaScript")); //Trả về vị trí cuối cùng mà chuỗi cần tìm kiếm tồn tại trong chuỗi: 4
console.log(myString.search("JavaScript")); // 4

//cut string
console.log(myString.slice(4));// JavaScript
console.log(myString.slice(4, 8));//Java
console.log(myString.slice(-10, -6));

//replace
console.log(myString.replace("JavaScript", "JS"))// Học JS JavaScript
console.log(myString.replace(/JavaScript/g, "JS")); //Học JS JS

//convert to upper case
console.log(myString.toUpperCase()); //HỌC JAVASCRIPT JAVASCRIPT

//convert to lower case
console.log(myString.toLowerCase()); //học javascript javascript

//trim : loại bỏ khoảng trắng ở hai đầu

var fullName = "    Tran Dung      ";

console.log(fullName.trim()); // Tran Dung

//split
var languages = 'JS, C, C++';
console.log(languages.split(', ')); //[ 'JS', 'C', 'C++' ]

//get a character by index
var name = 'DungHenry';
console.log(name[1]); //u
//Nếu truyền vào index ko có trong chuỗi thì trả về undefined
console.log(name.charAt(1)); // u
//Nếu truyền vào vị trí ko có sẽ trả về chuỗi trắng

