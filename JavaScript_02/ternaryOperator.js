//Toán tử ba ngôi 
var a = 1;
var b = 2;
var msg = a > b ? true : false;
console.log(msg);

var course = {
    name: "JavaScript",
    coin: 500
}

if(course.coin > 0){
    console.log(course.coin + " coins");
}
else{
    console.log("Miễn phí");
}

var result = course.coin > 0 ? course.coin + " coins" : "Miễn phí";
console.log(result);