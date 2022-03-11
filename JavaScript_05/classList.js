var box = document.querySelector('.box');
console.log(box.classList.length); // nếu 2 class giống nhau chỉ nhập độ dài 1 cái
console.log(box.classList.value); //Lấy ra value
box.classList.add('red', 'blue');// add class
console.log(box.classList.contains('red')); //true

setTimeout(() =>{
    box.classList.remove('red');//remove class
}, 1000)

//toggle class

setInterval(() =>{
    box.classList.toggle('red');//toggle class
}, 1000)
