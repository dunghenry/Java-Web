localStorage.clear() //clear all localStorage
sessionStorage.clear(); //clear all sessionStorage

//!Tạo data lưu localStorage
const API_KEY = "TODOS"
var a = localStorage.setItem(API_KEY, JSON.stringify({id: 1, title: "Cong viec 1"})) //Convert sang JSON để lưu vào localStorage
var b = sessionStorage.setItem(API_KEY, JSON.stringify({id: 1, title: "Cong viec 1"})) //Convert sang JSON để lưu vào sessionStorage

//?Lấy data được lưu vào localStorage và sessionStorage
var x = localStorage.getItem(API_KEY)
console.log(JSON.parse(x)) //convert sang JavaScript

var y = sessionStorage.getItem(API_KEY)
console.log(JSON.parse(x)) //convert sang JavaScript

const data = JSON.parse(sessionStorage.getItem(API_KEY)) //convert sang JS
console.log(data)
console.log(data.id) //Lấy ra id 


var x = localStorage.key(0);
console.log(x) //Lấy ra mục lưu trữ đầu tiên trong localStorage tương tự sessionStorage cũng vậy
console.log(localStorage.length) // length of localStorage, sessionStorage thì tương tự

//Remove item
localStorage.removeItem("myItem");
sessionStorage.removeItem("myItem");


// Syntax
localStorage.setItem(keyname, value)
localStorage.setItem(keyname, value)