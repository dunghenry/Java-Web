var number = 10; //global variable
window.number = number; //global window

var value = "Dung"

//global function
function logger1(){
    console.log("In ra log");
}
function logger2(){
    logger1(); //success
}
logger2();

//const, let : block code

{
    const age = 21;
    console.log(age);//success
}
// console.log(age);//error
if(true){
    let fullName = "Tran Dung";
}
    
