const teacher = {
    firstName: "Tran",
    lastName: "Dung",
}

function greet(greeting, message) {
    return `${greeting} ${this.firstName} ${this.lastName} ${message}`
}

let result = greet.apply(teacher, ['Chao ban', 'Rat vui dc gap ban']);
console.log(result);


const Teacher = {
    firstName: "Minh",
    lastName: "Thao",
    isOnline: false,
    goOnline() {
        this.isOnline = true;
        console.log(`${this.firstName} ${this.lastName} is Online`);
    },
    goOffline() {
        this.isOnline = false;
        console.log(`${this.firstName} ${this.lastName} is Offline`);
    }
}

const Student = {
    firstName: "Tran",
    lastName: "Dung",
    isOnline: false,
}
console.log("Teacher: ", Teacher.isOnline);
Teacher.goOnline();
console.log("Teacher: ", Teacher.isOnline);

console.log("------------------------------");
console.log("Student: ", Student.isOnline);
Teacher.goOnline.apply(Student);
console.log("Student: ", Student.isOnline);


function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}
//C1
// function Parrot(name, weight) {
//     Animal.apply(this, [name, weight]);
//     this.speak = function () {
//         console.log("Hi")
//     }
// }

//C2
function Parrot() {
    Animal.apply(this, arguments);
    this.speak = function () {
        console.log("Hi")
    }
}

const conVet = new Parrot('Con vet', 300);
console.log(conVet);