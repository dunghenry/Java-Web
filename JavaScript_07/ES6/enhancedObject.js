var name = "JavaScript";
var price = 1000;

var course = {
    name,
    price,
    getName(){
        return name;
    }
}
console.log(course);
console.log(course.getName());

var fieldName = 'name';
var fieldPrice = 'price';

var course1 = {
    [fieldName]: 'PHP',
    [fieldPrice]: 1000
}

console.log(course1);