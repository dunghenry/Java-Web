class Course{
    constructor(name, price){
        this.name = name
        this.price = price
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
}

const phpCourse = new Course('PHP', 1000);
console.log(phpCourse.getName());
console.log(phpCourse.getPrice());