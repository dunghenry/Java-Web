//Hàm
function myFunction(){
    console.log("Hello cac ban!");
}
//() Toán tử call
myFunction();

function showDialog(fullName){
    //fullName gọi là tham số
    console.log(typeof fullName);
    console.log(`Xin chào ${fullName}`);
}
showDialog("Tran Van Dung");//gọi là đối số

function testFunction(msg1, msg2){
    if(msg1){
        console.log(msg1);
    }
    if(msg2){
        console.log(msg2);
    }
}

testFunction("Xin chào", "Successfully");

//Arguments
function testFunctionArguments(){
    console.log(arguments);
    var myString = '';
    for (var i of arguments) {
        myString += `${i} `
    }
    console.log(myString);
}
testFunctionArguments("Msg1", "Msg2");

//Return trong hàm

var isConfirm = confirm("Message");
console.log(isConfirm);

function returnFunction(a){
    return a;
}
console.log(returnFunction(1));

function cong(a, b){
    return a + b;
    console.log(a) //Sau return ko đc thực thi
}
const result = cong(2, 8);
console.log(result);