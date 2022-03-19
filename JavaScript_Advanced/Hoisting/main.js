//var
console.log(a); //undefined
console.log(fullName); //Uncaught ReferenceError: fullName is not defined
a = 18;
var a;

// declare function

console.log(sum(1, 2)); //3
function sum(a, b){
    return a + b;
}

const count1 = makeCounter();

console.log(count1()) // 1

function makeCounter(){
    let count = 0;
    return increase;
    
    function increase(){
        return ++count;
    }
}

//Error

carName ="Volvo";
let carName = "Mazda";
console.log(carName) //Uncaught ReferenceError: Cannot access 'carName' before initialization

carName1 = "Volvo";
// const carName1;
console.log(carName1) //Uncaught SyntaxError: Missing initializer in const declaration