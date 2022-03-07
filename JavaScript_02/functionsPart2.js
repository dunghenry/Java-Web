function showMessage(){
    console.log("Message 1");
}

function showMessage(){
    console.log("Message 2");
}

function showMessage(){
    console.log("Message 3");
}
//Hàm cuối cùng có trùng tên đc thực thi

showMessage();

function myFunction(){
    var fullName = 'Tran Van Dung';
    console.log(fullName); //Chỉ dùng biến fullName trong hàm
    function showLog(){
        console.log("Show log message");
    }
    showLog();
}
myFunction();

//Các loại function
//-Declaration function: có Hoisting nghĩa là gọi trước khi hàm 

function testFunction(){
    console.log("Declaration function");
}

//-Expression function

var showLog = function(){
    console.log("Expression function");
}
showLog();

setTimeout(function(){

})

var myObj = {
    myFunction: function(){

 },
  
}
//-Arrow function
const a = (b) => b;
console.log(a(1));