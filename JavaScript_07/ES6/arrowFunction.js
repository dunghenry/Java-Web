//Arrow functionx: Không có this và ko có constructor
const t = (a, b) => a + b;
console.log(t(1, 2)); //3

const logger = log => console.log(log);
console.log("Message"); // Message

const obj = (a, b) => ({a, b});
console.log(obj(1, 2)); //obj {a: 1, b: 2}

//constructor function
const Course = function(name, price){
    this.name = name;
    this.price = price;
    this.getName = function() {
        return this.name;
    }
}

const jsCourse = new Course("JavaScript", 1000);
console.log(jsCourse.getName());// JavaScript

const course = {
    name: "JS",
    // getName: function() {
    //     return this; //success
    // },
    // getName: function() {
    //     return this.name; //success
    // },
    getName: () =>{
        return this;// window
    }
};
console.log(course.getName());