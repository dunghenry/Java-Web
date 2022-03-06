/**
 * Giới thiệu một số hàm built-in
 * 1. Alert
 * 2. Console
 * 3. Confirm
 * 4. Prompt
 * 5. Set timeout
 * 6. Set interval
 */

//?1. Alert
alert("Xin chào");

//!2. Console
console.log("Xin chào");
console.warn("Xin chào");
console.error("Xin chào");

//TODO3. Confirm
confirm("Xin chào");

//?4. Prompt
prompt("Xin chào");

//!5. Set timeout
setTimeout(function () {
    console.log("Xin chào")
}, 3000)
//Sau thời gian 3s sẽ console.log("Xin chào")

//TODO6. Set interval

setInterval(function (){
    console.log("Xin chào");
    //Chạy console.log("Xin chào") lien tục sau một khoảng thời gian mà bạn xác định
}, 2000)


