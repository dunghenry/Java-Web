// callback
//Là hàm function đc truyền qua đối số
//Khi gọi hàm khác 
//1. Là hàm
//2. Đc truyền qua đối số
function myFunction(param){
    if(typeof param == 'function'){
        param("Hello world");
    }
    else{
        console.log("Error");
    }
}
function myCallback(value){
    console.log("Value : " + value);
}
myFunction(myCallback);

var courses = ['JavaScript', 'PHP', 'Ruby'];

courses.map(function(course){
    console.log("Course : " + course);
})

console.log();

function myCourse(course){
    console.log("Course : " + course);
}

courses.map(myCourse);