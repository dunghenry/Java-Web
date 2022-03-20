function random(){
    console.log(Math.random());
}
random.call() //success

const teacher = {
    firstName: "Minh",
    lastName: "Thảo",
    
}

const me = {
    firstName: "Tran",
    lastName: "Dung",
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`) ;
    }
}
me.getFullName.call(me);

function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Chicken(name, weight, legs) {
    Animal.call(this, name, weight); //Kế thừa trong OOP
    this.legs = legs;
}

const chicken = new Chicken("Chicken", 50, 2);
console.log(chicken);



function logger() {
    //C1
    Array.prototype.forEach.call(arguments, item => console.log(item)) //convert arr
    const arr = Array.prototype.slice.call(arguments); // [ 1, 2, 3, 4, 5 ]
    console.log(arr);
    const arr1 = Array.from(arguments)
    const arr2 = [...arguments];
    console.log(arr1, arr2);
}

logger(1, 2, 3, 4, 5);