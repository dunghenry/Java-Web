//Object
let a = {
    name: "Dung",
    age: 21
}

let b = Object.create(a);
b.name = "Hi";
b.address = "Ninh Binh"
console.log(b)

//constructor function

function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.getInfo = function () {
        return `${this.name} - ${this.age} - ${this.address}`;
    }
}
Person.prototype.fullName = "Tran Van Dung";
Person.prototype.getName = function () {
    return this.name;
}
const person = new Person("Dung", 21, "Ninh Binh");
console.log(person.getInfo());
console.log(person.fullName);
console.log(person.getName());