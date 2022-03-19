"use strict";
//fullName ="Tran Van Dung"; //error

var fullName = "Tran Dung";

function myFunction(){
    console.log("This is my function!!!"); 
    age = 21; //error
    var age = 21;
    console.log(age);
}

myFunction();


const student = {
    fullName: "DungHenry"
}
//student.fullName = "Dung2001" //success

const student1 = Object.freeze({
    fullName: "Dung"
})

//student1.fullName = "Dung2001" //Uncaught TypeError: Cannot assign to read only property 'fullName' of object '#<Object>'
const student2 ={}
Object.defineProperty(student2, 'fullName', {
    value: "Tran Van Dung",
    writable: true
})
student2.fullName = "Dung2001"; //thay đổi nếu writable = true
console.log(student2)

