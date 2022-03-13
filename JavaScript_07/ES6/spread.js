//destructuring , rest

function logger([a, b, ...rest]){
    console.log(a);
    console.log(b);
    console.log(rest);
}

logger([1, 2, 3, 4, 5, 6, 7, 8])

function log({name, price, ...other}){
    console.log(name);
    console.log(price);
    console.log(other);
}
log({
    name: "JavaScript",
    price: 1000,
    description: "Description content",
    address: 'Ninh Binh'
})

//spread

var course1 = ['JavaScript', 'PHP', 'Ruby'];
var course2 = ['ReactJS', 'NodeJS', 'Java'];
var course3 = [...course1, ...course2];
console.log(course3);
console.log(course1.concat(course2));

var obj1 = {
    name: "JS",
}
var obj2 = {
    price: 1000,
}
var obj = {...obj1, ...obj2};
console.log(obj);


var defaultConfig = {
    api: "http://domain-trang-khoa-hoc",
    aoiVersion: 'v1',
    other: 'other'
}
var exersionConfig = {
    ...defaultConfig,
    api: "http://domain-trang-bai-tap", //Ghi đè cái api của defaultConfig
}
console.log(exersionConfig);


var arr = ['JavaScript', 'PHP', 'Ruby'];

function myFunction(...courses){ // rest
    for (var i = 0; i < courses.length; i++){
        console.log(courses[i]);
    }
}

myFunction(...arr) // spread