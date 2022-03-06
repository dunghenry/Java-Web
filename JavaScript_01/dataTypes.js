/**Kiểu dữ liệu
 * 1.Dữ liệu nguyên thủy - Primitive Data
 * -Number
 * -String
 * -Boolean
 * -Undefined
 * -Null
 * -Symbol
 * 2.Dữ liệu phức tạp - Complex Data
 * -Function
 * -Object
*/

//Number type
var a = 1;
var b = 1.5;

//String type
var fullName ="Tran 'Dung";
var firstName = '"Tran Dung"';
console.log(fullName);
console.log(firstName);

//boolean type
var isSuccess = true;

//undefined type(Nếu hai báo mà ko gán giá trị)
var age;
console.log(age); // undefined

//number type
var isNull = null; //null(object)

//symbol type
var id1 = Symbol("id"); //unique
var id2 = Symbol("id"); //unique
console.log(id1 == id2); //false

//function type
var myFunction = function(){
    console.log("Hi.Xin chao cac ban");
}
myFunction();

//object type
var myObj = {
    name: "Tran Dung",
    age: 21,
    address: "Ninh Binh",
    printName: function() {
        return "Successfully";
    }
};

console.log(myObj.printName());

console.log(myObj);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);
console.log(numbers.length);
console.log(typeof(numbers));

