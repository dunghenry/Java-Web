//IIFE

(function (msg) {
    console.log(msg);
})("Xin chao");

const Module = (function () {
    let privateData = "Đây là dữ liệu riêng tư";
    function privateFunc() {
        console.log("Đây là hàm private!!!")
    }
    let publicFunc = function () {
        privateFunc();
    }
    return {
        publicData: privateData,
        publicFunc1: privateFunc,
        publicFunc: publicFunc
    }
})();

console.log(Module.publicData); //Đây là dữ liệu riêng tư
Module.publicFunc(); //Đây là hàm private