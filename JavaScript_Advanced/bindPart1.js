// "use strict";
// console.log(this);// window

// function myFunction(){
//     console.log(this); //undefined do sd strict mode
// }
// myFunction();

this.firstName = "Minh";
this.lastName = "Thu";

const teacher = {
    firstName: "Minh",
    lastName: "Thảo",
    getFullName(data1, data2) {
        // console.log(data1, data2);
        console.log(`${this.firstName} ${this.lastName}`) ;
    }
}

const student = {
    firstName: "Dũng",
    lastName: "Trần"
}
const getTeacherName1 = teacher.getFullName;
console.log(getTeacherName1 === teacher.getFullName); //true

// console.log(teacher.getFullName());

const getTeacherName = teacher.getFullName.bind(teacher);

const getStudentName = teacher.getFullName.bind(student);

const getStudentName1 = teacher.getFullName.bind(student, "Test1", "Test2");//Đc ưu tiên
console.log(getStudentName1("Dũng", "2001"));


console.log(getStudentName()); //Dũng Trần
console.log(getTeacherName());//Minh Thao


const button = document.querySelector('button');

button.onclick = teacher.getFullName.bind(teacher);